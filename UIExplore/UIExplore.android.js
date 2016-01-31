'use strict';

var React = require('react-native');

var {
	DrawerLayoutAndroid,
	Text,
	View,
	ToolbarAndroid,
	StyleSheet,
	BackAndroid,
	Dimensions,
} = React;

var DRAWER_LAYOUT_WIDTH = 56;

var UIExplore = React.createClass({
	getInitialState: function() {
		return {
			example: this.getInitExample();
		};
	},

	getInitExample: function() {
		return {
			title: 'UIExplore',
			component: this.renderHome();
		};
	}

	onSelectExample: function(example) {
		this.drawer.closeDrawer();
		if (example.title === this.getInitExample().title) {
			example = this.getInitExample();
		}
		this.setState({
			example: example,
		});
	},

	renderHome: function() {
		var onSelectExample = this.onSelectExample;
		return (
			React.createClass({
				render: function() {
					return (
						<UIExploreList 
							onSelectExample = {onSelectExample}
							isInDrawer = {false}
						/>
					);
				},
			});
			);
	},

	renderNavigationView: function() {
		return (
			<UIExploreList
				onSelectExample = {this.onSelectExample}
				isInDrawer = {true}
			);
	},

	render: function() {
		return (
			<DrawerLayoutAndroid 
				drawerPosition = {DrawerLayoutAndroid.positions.Left}
				drawerWidth = {Dimensions.get('window').width - DRAWER_LAYOUT_WIDTH}
				renderNavigationView={this.renderNavigationView}
				keyboardDismissMode ="on-drag"
				ref = {(drawer) => {this.drawer = drawer;}}
			>
			{this.renderNavigation}
			</DrawerLayoutAndroid>
		);
	},

	renderNavigation: function() {
		return
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	toolbar: {
		backgroundColor: '#E9EAED',
		height:  56,
	},
});

module.exports = UIExplore;