'use strict';

var React = require('react-native');

var {
	Navigator,
	StyleSheet,
	BackAndroid,
} = React;

var _navigator;
var DashBoard = require('./component/DashBoard/DashBoard.android');

BackAndroid.addEventListener('hardwareBackPress', function() {
     if (_navigator.getCurrentRoutes().length === 1) { 
       return false;
     }
     _navigator.pop();
     return true;
});

var Route = React.CreateClass({

	navigatorRenderScene: function(route,navigator) {
		_navigator = navigator;
		switch (route.id) {
			case 'DashBoard': {
				return (
					<DashBoard nav={navigator}/>
					);
				break;
			}
		}
	},

	render: function() {
		return (
			<Navigator 
			    style={{flex:1,backgroundColor:'#f6f6ef'}}
				tintColor='#ff6600'
				initialRoute={{id:'DashBoard'}}
				renderScene={this.navigatorRenderScene}
			/>
		);
	},
});

module.exports = Route;