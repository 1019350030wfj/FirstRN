'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
	container: {
		flex:1,
	    flexDirection:'row',
	    justifyContent:'center',
	    alignItems:'center',
	    backgroundColor: 'white',
	    padding:0,
	    marginLeft: 10,
	    marginRight: 10,
	    marginVertical: 5,
	    borderColor:'#dddddd',
	    borderStyle:null,
	    borderWidth: 0.5,
	    borderRadius: 2,
	},
	projectDetailsContainer:{
	    flex: 1,
	},
	projectImage: {
		height: 40,
		width: 40,
		marginRight: 10,
		marginLeft: 10,
		borderRadius: 50,
	},
	projectName: {
	    fontSize:15,
	    textAlign:'left',
	    marginTop:10,
	    marginBottom:4,
	    color: '#ff6600',
	},
	projectDetail: {
	    fontSize:12,
	    color:'gray',
	},
});