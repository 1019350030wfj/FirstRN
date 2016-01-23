'use strict';

var React = require('react-native');

var {
	Navigator,
	View,
	Text,
} = React;

var ProjectList = require('./projectList/ProjectList.android');
var ProjectProfile = require('./projectProfile/ProjectProfile.android');
var IssuesProfile = require('./issues/issuesProfile/IssuesProfile.android');
var IssuesList = require('./issues/issuesList/IssuesList.android');

var Route = React.createClass({
	renderScene: function(route,navigator) {
		if (route.id === 'ProjectList') {
			return (
				<View style={{flex:1}}>
					<ProjectList nav={navigator}/>
				</View>
				);
		}

		if (route.id === 'ProjectProfile') {
			return (
				<View style={{flex:1}}>
					<ProjectProfile nav={navigator} project={route.project}/>
				</View>
			);
		}

		if (route.id === 'IssuesProfile') {
			return (
				<View style={{flex:1}}>
					<IssuesProfile nav={navigator} />
				</View>
			);
		}

		if (route.id === 'IssuesList') {
			return (
				<View style={{flex: 1}}>
					<IssuesList nav={navigator}/>
				</View>
			);
		}
	},

	render: function() {
		return (
				<Navigator
			        initialRoute = {{id: 'ProjectList'}}
			        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
			        renderScene={this.renderScene}
			      />
			);
	},
});

module.exports = Route;

