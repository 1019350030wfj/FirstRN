'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column',
	},
	loading: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bdbdbd',
	},
	issuesCell: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding:10,
		borderWidth: 0.5,
		borderRadius: 2,
		borderColor: '#dddddd',
		borderStyle: null,
		marginBottom: 10,
	},

	issuesAvatar: {
		height: 40,
		width: 40,
		borderRadius: 50,
		marginRight: 10,
	},

	issuesTitle: {
		color: '#ff6600',
		fontSize: 15,
		textAlign: 'left',

	},

	issuesDetail: {
		fontSize: 13,
		color: 'gray',
		marginTop: 5,
	},

	isssuesList: {
		backgroundColor: '#fff',
		padding: 10,
	},
});