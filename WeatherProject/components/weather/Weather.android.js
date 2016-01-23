'use strict';

var React = require('react-native');

var {
	Text,
	TextInput,
	View,
	Image,
	StyleSheet,
} = React;

var LocationButton = require('../../../Location/Location.android');
var DataService = require('../../network/DataService');
var Forecast = require('./Forecast');
var styles = require('./style');

var Weather = React.createClass({

	getInitialState: function() {
		return {
			zip: '',
			forecast: null,
		};
	},

	_handleTextChange: function(event) {
		var zip = event.nativeEvent.text;
		this.setState({zip: zip});
		DataService.getWeatherDataById(zip)
			.then((responseData) => {
				this.setState({
					forecast: {
						main: responseData.weather[0].main,
						descriptions: responseData.weather[0].description,
						temp: responseData.main.temp
					}
				});
			})
			.catch((error) => {
				console.warn(error);
			})
			.done();
	},

	_getForecastForCoords: function(lat,lon) {
		console.info("wfj"+"lat = " + lat + " lon = " + lon);
	},

	render: function() {
		var content = null;
		if (this.state.forecast !== null) {
			content = <Forecast 
						main={this.state.forecast.main}
						descriptions={this.state.forecast.descriptions}
						temp={this.state.forecast.temp}/>
		}

		return (
			<View style={styles.container}>
				<Image source={require('image!flowers')}
						resizeMode='cover'
						style={styles.backdrop}>
					<View style={styles.overlay}>
						<View style={styles.row}>
							<Text style={styles.mainText}>
								Current weather for
							</Text>
							<View style={styles.zipContainer}>
				               <TextInput
				                 style={[styles.zipCode, styles.mainText]}
				                 onSubmitEditing={this._handleTextChange}/>
				             </View>
						</View>
						<View style={styles.row}>
			             	<LocationButton onGetCoords={this._getForecastForCoords}/>
			            </View>
						{content}
					</View>
				</Image>
			</View>
		);
	},
});

module.exports = Weather;