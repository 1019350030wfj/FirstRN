'use strict';

var React = require('react-native');

var {
	View,
	StyleSheet,
} = React;

var JWebView = require('./JWebView');

var JaydenWebview = React.createClass({
	render: function() {
		return(
			<View style={{flex: 1}}>
				<JWebView url = 'http://www.baidu.com/' style={{width:300,height:400}}/>
			</View>
		);
	},
});

module.exports = JaydenWebview;