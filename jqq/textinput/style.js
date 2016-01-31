'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
		flex: 1,
	},
	firstInput: {
		height: 40,
		borderWidth: 1,
		borderColor: 'blue',
		marginTop:30,
		marginLeft:20,
		marginRight:20,
	},
	secondInput: {
		marginLeft: 19,
		color: 'red',
		marginTop: 20,
	},
	thirdInput: {
		marginTop:20,
		color: 'green',
	},
	image: {
		height: 60,
		width: 60,
		alignSelf:'center',
		borderRadius: 30,
	},
	commitview: {
		marginLeft:15,
		marginRight:15,
		marginTop:35,
		backgroundColor: '#63B8FF',
		height:35,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5,
	},
	committext: {
		color:'#fff',
	},
	bottomview: {
		flex:1,
		flexDirection: 'row',
		alignItems:'flex-end',
		bottom:20,
	},
	regitster: {
		flex: 1,
		textAlign:'right',
	},
});