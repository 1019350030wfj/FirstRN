'use strict';

var React = require('react-native');

var {
	TouchableHighlight,
	Text,
	View,
} = React;

var styles = require('./style');

var Button = React.createClass({
	getInitialState: function() {
		return {
			isPressed: false,
		};
	},

	_onPress: function() {
		this.setState({
			isPressed: true,
		});
	},

	_onPressOut: function() {
		this.setState({
			isPressed: false,
		});
	},

	render: function() {
		return(
			<View style={styles.container}>
				<TouchableHighlight 
					onPressIn={this._onPress}
					onPressOut={this._onPressOut}
					style={styles.touchable}>
					<View style={styles.button}>
						<Text style={styles.welcome}>
							{this.state.isPressed ? 'Pressing' : 'PUSH Me'}
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	},
});

module.exports = Button;