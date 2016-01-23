'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff00ff',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
	touchable: {
		borderRadius: 100,
	},
	button: {
		backgroundColor: '#ff0000',
		borderRadius: 100,
		height: 200,
		width: 200,
		justifyContent: 'center',
	},
});