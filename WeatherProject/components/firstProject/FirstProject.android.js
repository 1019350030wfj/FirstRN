'use strict';

var React = require('react-native');

var {
	Text,
	View,
} = React;

var styles = require('./style');

var FirstProject = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
			</View>
		);
	},
});


module.exports = FirstProject;