'use strict';

import React,{
    Component
} from 'react-native';

import {Provider} from 'react-redux'; //‘react-redux’把store绑定到视图上

import configureStore from './store/configure-store';

import App from './container/App';

const store = configureStore();

/*
 视图层绑定：
 1、把store绑定到视图上
 2、引入三个概念：
    A、<Provider>组件：这个组件需要包裹在整个组件树的最外层，
    作用：让根组件的所有子孙组件能够轻松的使用connect（）方法绑定到store

    B、connect(): 这是react-redux提供的一个方法。
    如果一个组件想要响应状态的变化，就把自己作为参数传给connect（）
    的结果

    C、selector：声明了你的组件需要整个store中的哪一部分数据
    作为自己的props（简单说：就是返回这个组件所需要state树中的哪个state）
 */
export default class Root extends Component {
    render() {
        return(
            <Provider store = {store}>
                <App />
            </Provider>
        );
    }
}