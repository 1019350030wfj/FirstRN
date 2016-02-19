/**
 * Action是把数据从应用传到store的有效载荷。它是store的唯一来源
 * Action说明有什么发生了， 返回一个type：表示将要执行的action（动作）
 * 除了 type 字段外，action 对象的结构完全由你自己决定
 * Created by Jayden on 2016/2/4.
 * Email: 1570713698@qq.com
 */

'use strict';

import types from '../constants';
import urls from '../assets/urls'

/**
 * 指定当前显示的资讯分类
 * @param menuId
 * @return {{type:null, menuId: *}
 */

export function setCurrentMenuId(menuId) {
    return {
        type: types.SET_CURRENT_MENU_ID,
        menuId: menuId
    };
}

/**
 * 设置轮播图
 * @param images
 * @return {{type:null,images:*}
 */
export function setSlideImages(images) {
    return {
        type:types.SET_SLIDE_IMAGES,
        images:images
    }
}

/**
 * 重置资讯列表
 * @param menuId
 * @param data
 * @return {{type:null,menuId:*,data:*}}
 */
export function setListData(menuId,data) {
    return {
        type:types.SET_NEWS_LIST_DATA,
        menuId: menuId,
        data:data
    }
}

/**
 * 新增列表
 * @param menuId
 * @param data
 * @return {{type:null,menuId:*,data:*}}
 */

export function pendingListData(menuId,data) {
    return {
        type:types.PENDING_NEWS_LIST_DATA,
        menuId:menuId,
        data:data
    }
}

/**
 * 获取资讯列表
 */
export function fetchNewsList(menuId = 1, page = 1, perPage = 5) {
    //生成请求链接
    let url = urls.listUrl + `?menuId=${menuId}&page=${page}&perPage=${perPage}`;
    return (dispatch) => {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (page == 1) {
                    dispatch(setListData(menuId,data))
                } else {
                    dispatch(pendingListData(menuId,data))
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

/**
 * 获取轮播图图片数据
 * @return {Function}
 */
export function fetchCarouselImage() {
    return (dispatch) => {
        return fetch(urls.slideImageUrl)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setSlideImages(data))
            })
            .catch((error) => {
                console.error(error)
            })
    }
}


