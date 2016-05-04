'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    loading:false,
    beauty:[]
};

export default function beautyReducers(state = initialState,action) {
    switch (action.type) {
        case types.RECEIVE_BEAUTY_LIST: {
            console.log("receiver beauty list");
            return Object.assign({},state,{
                loading:true,
                beauty:action.beauty
            });
            break;
        }
        default:
            return state;
    }
}