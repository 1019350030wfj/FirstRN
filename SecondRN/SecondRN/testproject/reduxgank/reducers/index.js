'use strict'

import {combineReducers} from 'redux';
import read from './read'
import beautyReducers from './beautyReducers';

/*
 一个调用 reducers 对象里所有 reducer 的 reducer，
 并且构造一个与 reducers 对象结构相同的 state 对象。

 然后就可以对这个 reducer 调用 createStore
 */
const rootReducer = combineReducers({
    read,
    beautyReducers
});

export default rootReducer;
