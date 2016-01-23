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
		backgroundColor: '#00ffff',
	},

	circle: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'blue',
		position: 'absolute',
		left: 0,
		top: 0,
	},
});