'use strict';

var React = require('react-native');

var {
	ToolbarAndroid,
} = React;

var styles = require('./style');

module.exports = React.createClass({

	render: function() {
		return (
			<ToolbarAndroid
				title={this.props.title}
				style = {styles.toolbar}
				titleColor='#ffffff'
				 />
				}
			);
	},
});