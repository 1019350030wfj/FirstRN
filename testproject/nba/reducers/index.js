'use strict'

import { combineReducers } from 'redux'

import live from './live'
import over from './over'
import unstart from './unstart'
import team from './team'
import application from './application'
import standing from './standing'
import playerList from './playerList'
import playerLoaded from './playerLoaded'

const reducers = combineReducers({
    unstart,
    live,
    over,
    standing,
    application,
    playerList,
    playerLoaded,
    team
})

export default reducers