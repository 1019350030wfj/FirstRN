'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

var baseFontSize = 16;

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	backdrop: {
		flex: 1,
		flexDirection: 'column',
	},
	overlay: {
		paddingTop: 5,
		backgroundColor: '#000000',
		opacity: 0.5,
		flexDirection: 'column',
		alignItems: 'center',
	},

	row: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'flex-start',
		padding: 30,
	},
	zipContainer: {
		flex: 1,
		borderBottomColor: '#DDDDDD',
		borderBottomWidth: 1,
		marginLeft: 5,
		marginTop: 3,
		marginBottom: -1,
	},

	zipCode: {
		width: 90,
		height: 35,
	},

	mainText: {
		flex: 1,
		fontSize: baseFontSize,
		color: '#FFFFFF',
	},
});