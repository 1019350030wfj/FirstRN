/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Route = require('./src/components/Routes.android');
//var Route = require('./WeatherProject/components/firstProject/FirstProject.android');
// var Route = require('./WeatherProject/components/weather/Weather.android');
//var Route = require('./Touch/PressDemo.android');

// var Route = require('./Touch/PanDemo');
// var Route = require('./CameraRoll/CameraRoll.android');

// var Route = require('./NavTab.android');

// var Route = require('./Meituan/TestImage.android');

AppRegistry.registerComponent('FirstRN', () => Route);
