'use strict';

var React = require('react-native');

var { 
	Text, 
	View, 
	ListView, 
	TouchableHighlight, 
} = React;

var DataService = require('../../../network/DataService');

var styles = require('./style');

var Issues = React.createClass({

	getInitialState: function() {
		return {
			dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2}),
			loaded: false,
		};
	},

	render: function() {
		if (!this.state.loaded) {
			return (
					<View />
				);
		}
		return (
			<ListView 
				style = {styles.issuesListView}
				dataSource = {this.state.dataSource}
				renderRow={this.renderIssuesCell}
				/>
		);
	},

	componentDidMount: function() {
		DataService.getProjectIssueList(this.props.project.id)
			.then((data) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(data),
					loaded: true,
				});
			})
			.done();
	},

	selectIssues: function(issues) {
		this.props.nav.push({
			id: 'IssuesProfile',
			issues: issues,
		});
	},

	renderIssuesCell: function(issues) {
		return (
			<TouchableHighlight onPress={()=>{this.selectIssues(issues)}}>
				<View style={styles.issuesCell}>
					<Text style={styles.issuesTitle}>
						{issues.title}
					</Text>
				</View>
			</TouchableHighlight>
		);
	},
});

module.exports = Issues;

