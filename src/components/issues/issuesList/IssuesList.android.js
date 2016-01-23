'use strict';

var React = require('react-native');

var {
	View,
	Text,
	Image,
	ListView,
	StyleSheet,
	TouchableHighlight,
} = React;

var styles = require('./style');

var DataService = require('../../../network/DataService');
var NavTab = require('../../navigation/navTab/NavTab.android');
var NavToolBar = require('../../navigation/navToolBar/NavToolBar.android');

var IssuesList = React.createClass({
	getInitialState: function() {
		return {
			loaded: false,
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
		};
	},

	onToolbarClicked: function() {
		this.refs['navTab'].openNavDrawer();
	},

	render: function() {
		var content = (
				<ListView 
					dataSource = {this.state.dataSource}
					renderRow = {this.renderIssuesCell}
					style = {styles.isssuesList}
				/>
		);
		if (!this.state.loaded) {
			content = (
				<View style={styles.loading}>
					<Text>
						载入议题中...
					</Text>
				</View>
			);
		}
		return(
			<NavTab ref='navTab' nav={this.props.nav}>
				<NavToolBar title='议题' onClicked={this.onToolbarClicked}/>
				{content}
			</NavTab>
		);
	},

	componentDidMount: function() {
		DataService.getIssuesList()
			.then((data) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(data),
					loaded: true,
				});
			})
			.done();
	},

	renderIssuesCell: function(issues) {
		return (
			<TouchableHighlight onPress={() => this.selectIssues(issues)}>
				<View style={styles.issuesCell}>
					<Image style={styles.issuesAvatar} source={{uri: issues.creator.avatar}} />
					<View style={{flex: 1}}>
						<Text style={styles.issuesTitle}>
							{issues.title}
						</Text>
						<Text style = {styles.issuesDetail}>
							<Text style={{color: '#4e8ef7'}}> {issues.creator.username} </Text>创建于{issues.create_date}
						</Text>
						<Text style = {styles.issuesDetail}>
							所属项目<Text style={{color: '4e8ef7'}}>{issues.belongsTo.name}</Text>| {issues.views} 浏览 | {issues.points} 讨论
            			</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	},

	selectIssues: function(issues) {
		this.props.nav.push({
			id: 'IssuesProfile',
			issues: issues,
		});
	},
});

module.exports = IssuesList;