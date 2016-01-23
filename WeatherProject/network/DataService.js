'use strict';

var URI = "http://api.openweathermap.org/data/2.5/weather?id=";

function getWeatherDataById(id) {
	return fetch(`${URI}${id}&appid=2de143494c0b295cca9337e1e96b00e0`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("load data of weather = " + responseData.name);
			return responseData;
		});
}

var DataService = {
	'getWeatherDataById': getWeatherDataById,
};

module.exports = DataService;