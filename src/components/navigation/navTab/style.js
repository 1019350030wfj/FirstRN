'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

var Styles = StyleSheet.create({
	background: {
	    flex: 1,
	    flexDirection:'column',
	    justifyContent: 'flex-start',
	    alignItems: 'flex-start',
	    backgroundColor: '#FFF',
  	},
  	userInfo: {
  		flex: 1,
  		flexDirection: 'row',
  		backgroundColor: '#4e8ef7',
  		justifyContent: 'flex-start',
  		alignItems: 'center',
  		height: 120,
  		marginBottom: 10,
  	},
  	slideNavItem: {
  		flex: 1,
  		flexDirection: 'row',
  		justifyContent: 'flex-start',
  		alignItems: 'center',
  		padding: 20,
  	},
  	separator: {
  		height: 0.5,
  		backgroundColor: '#CCCCCC',
  	},
});

module.exports = Styles;