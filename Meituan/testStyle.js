'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: 'green',
	},

	above: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'blue',
	},

	bottom: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'gray',
	},

	image: {
		height: 50,
		width: 50,
		borderRadius: 20,
	},

	text: {
		fontSize: 26,
		color: '#555555',
		textAlign: 'center',
		marginTop: 15,
	},

	item: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});