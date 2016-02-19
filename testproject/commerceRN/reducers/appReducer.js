/**
 * Created by Jayden on 2016/2/4.
 * Email: 1570713698@qq.com
 */

'use strict';

import Immutable from 'immutable'
import types from '../constants'
import icons from '../assets/icons'

/**
 * Immutable 可以轻松的跳过那些状态没有发生改变的组件子树
 */
const initialState = Immutable.fromJS({
    //当前菜单的ID
    currentMenuId: 1,
    menuItems: {
        1: {id:1,title:'首页'},
        2: {id:2,title:'电商资讯'},
        3: {id:3,title:'专家专栏'},
        4: {id:4,title:'数据报告'},
        5: {id:5,title:'会议培训'},
        7: {id:7,title:'创业融资'},
    },
    //轮播图片
    carouselImages: [
        {id:1,img:icons.default,href:'',title:''},
    ],
    //ID对应资讯列表
    newsList_1:{page:1,perPage:10, list:[]},
    newsList_2:{page:1,perPage:10, list:[]},
    newsList_3:{page:1,perPage:10, list:[]},
    newsList_4:{page:1,perPage:10, list:[]},
    newsList_5:{page:1,perPage:10, list:[]},
    newsList_6:{page:1,perPage:10, list:[]},
})

export default function appReducer(state=initialState,action={}) {
    switch (action.type){
        //改变当前menuid
        case types.SET_CURRENT_MENU_ID:
            return state.updateIn(['currentMenuId'], value => action.menuId);
        //设置图片
        case types.SET_SLIDE_IMAGES:
            return state.setIn(['carouselImages'],Immutable.fromJS(action.images));
        //重置资讯列表
        case types.SET_NEWS_LIST_DATA:
            return state.setIn(['newsList_'+action.menuId], Immutable.fromJS(action.data));
        //加载更多数据
        case types.PENDING_NEWS_LIST_DATA:
            var newState = state.setIn(['newsList_'+action.menuId, 'page'], action.data.page);
            newState = newState.setIn(['newsList_'+action.menuId, 'perPage'], action.data.perPage);
            return newState.updateIn(['newsList_'+action.menuId, 'list'],
                list=>list.concat(action.data.list));
        default:
            return state;
    }
}