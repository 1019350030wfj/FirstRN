'use strict';

var React = require('react-native');

var {
	Text,
	View,
	TouchableHighlight,
} = React;

var styles =require('./style.js');

var Button = React.createClass({
	  render: function() {
	    return (
	      <TouchableHighlight onPress={this.props.onPress}>
	        <View style={[styles.button, this.props.style]}>
	          <Text>
	            {this.props.label}
	          </Text>
	        </View>
	      </TouchableHighlight>
	      );
	  },
});

module.exports = Button;