'use strict';

var React = require('react-native');

var API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
var QUERY_TYPE = 'hardcover-fiction';
var API_STEM = 'http://api.nytimes.com/svc/books/v3/lists';
var ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`

var URL = `https://api.github.com/repositories/892275/contributors?%20page=1`;
function getBookList() {
	fetch(URL)
		.then((response) => {response.json()})
		.then((responseData) => {
			console.info("get data finished: ");
			return responseData;
		});
}

var ApiService = {
	'getBookList': getBookList,
};

module.exports = ApiService;