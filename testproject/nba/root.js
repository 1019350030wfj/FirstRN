'use strict'

import React, {
	Component,
} from 'react-native'

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux/native'
import reducers from './reducers'