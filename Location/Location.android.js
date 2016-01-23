'use strict';

var React = require('react-native');
var styles = require('./style.js');
var Button = require('./Button/index');

var LocationButton = React.createClass({

	_onPress: function() {
		console.info("locationButton onPress");
		navigator.geolocation.getCurrentPosition(
			(initialPosition) => {
				this.props.onGetGoords(initialPosition.coords.latitude,
					initialPosition.coords.longitude);
			},
			(error) => {
				alert(error.message)
			},
			{enableHighAccuracy: true, timeout:20000,maximumAge: 1000}
			);
	},

	render: function() {
		return (
			<Button 
				label="Use CurrentLocation"
				style={styles.locationButton}
				onPress={this._onPress}/>
		);
	},
});

module.exports = LocationButton;