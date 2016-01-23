'use strict';

var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
} = React;

var Log = require('./Log');

module.exports = React.createClass({
	render: function() {
		Log.d(
			'wfj',
			'test Js call Native Module',
			(str)=>{console.log('wfj',str);}
			);
		return(
			<View style={{flex:1,backgroundColor: '#f0f',justifyContent:'center',alignItems: 'center'}}>
				<Text>Hello Log!</Text>
			</View>
			);
	},
});