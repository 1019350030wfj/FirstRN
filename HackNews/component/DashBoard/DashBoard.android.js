'use strict';

var React = require('react-native');

var {
	View,
	Text,
	TouchableHighlight,
} = React;

var styles = require('./style');

var NavToolbar = require('../nav/navToolbar/NavToolbar.android');
var RefreshListView = require('../refreshListview/RefreshListView.android');
var DataService = require('../../network/api');

var DashBoard = React.createClass({
	getInitialState: function() {
		return {
			topStoryIDs: null,
			lastIndex: 0,
		};
	},

	render: function() {
		return (
			<View style={styles.toolbar}>
				<NavToolbar
					title={'Top Stories'}
					 />
				<RefreshListView 
					renderRow = {(row) => this.renderListViewRow(row)}
					onRefresh={(page,callback) => this.listViewOnRefresh(page,callback)}
					backgroundColor={'#F6F6EF'}
                    loadMoreText={'Load More...'}/>
			</View>
		);
	},
});

module.exports = DashBoard;
