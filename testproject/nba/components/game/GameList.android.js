'use strict';

import React, {
	View,
	Text,
	ListView,
	StyleSheet,
	Component,
	TouchableHighlight,
	PropTypes,
} from 'react-native'

import {Icon} from 'react-native-icons'
import moment from 'moment-timezone'
import GamePanel from './GamePanel.android'
import Tabbar from '../share/Tabbar'