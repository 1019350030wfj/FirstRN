'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF',
	},
	issuesListView: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#FFF',
	},
	issuesCell: {
		padding: 10,
		marginTop: 5,
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 5,
		flexDirection: 'column',
	},
	issuesTitle: {
		fontSize: 13,
		color: '#ff6600',
		textAlign: 'left',
	},
});