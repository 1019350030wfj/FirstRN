'use strict';

var React = require('react-native');

var {
	ToolbarAndroid,
} = React;

var styles = require('./style');

var NavToolBar = React.createClass({
	render: function() {
		var title = this.props.title;
		var navIcon = {uri: this.props.icon, isStatic: true}
		
		return (
	      <ToolbarAndroid
	        style={styles.toolbar}
        	navIcon={require('image!ic_menu_black_24dp')}
	        onIconClicked={this.props.onClicked}
	        titleColor="#ffffff"
	        title={title} />
	    );
	},
});

module.exports = NavToolBar;