'use strict';

import {
    createStore,
    applyMiddleware,
} from 'redux';

//middleware是对action进行扩展处理
import thunkMiddleWare from 'redux-thunk';

import rootReducer from '../reducers/index';//关注的是数据的转化逻辑

/*
    实现action异步的middleware
    出发一个action，store调用dispatch方法，
     将action分发给reducer，而reducer只是接受action的简单对象
     如果dispatch返回的是一个function，则这时候中间件就起到作用了
  */
const createStoreWithMiddleWare = applyMiddleware(thunkMiddleWare)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleWare(rootReducer,initialState);

    return store;
}