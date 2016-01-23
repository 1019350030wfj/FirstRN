'use strict';

var React = require('react-native');

var {
	ListView,
	View,
	Text,
} = React;

var NavTab = require('../navigation/navTab/NavTab.android');
var NavToolBar = require('../navigation/navToolBar/NavToolBar.android');
var DataService = require('../../network/DataService');
var ProjectCell = require('./projectCell/ProjectCell.android');
var styles = require('./style');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
			loaded: false,
		};
	},

	componentDidMount: function() {
		DataService.getProjectList()
			.then(responseData => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
					loaded: true,
					});
			})
			.done();
	},

	onToolbarClicked: function() {
		// important：需要调用子控件中导出的方法，可以通过ref，去调用。
    	this.refs['navTab'].openNavDrawer();
	},

	render: function() {
		var content = (
			<ListView
					style = {styles.projectListView}
					dataSource={this.state.dataSource}
					renderRow={this.renderProject}
				/>
			);

		if (!this.state.loaded) {
			content = (
				<View style={styles.loading}>
					<Text>载入项目中...</Text>
				</View>
			);
		}

		return(
				<NavTab ref='navTab' nav={this.props.nav}>
			        <NavToolBar icon={"fontawesome|ic_menu_white"} title={'项目'} onClicked={this.onToolbarClicked} />
			        {content}
			    </NavTab>
			);
	},

	renderProject: function(project) {
		return(
			<ProjectCell
				onSelect={() => this.selectProject(project)}
				project={project}
			 />
		);
	},

	selectProject: function(project) {
		this.props.nav.push({
			id: 'ProjectProfile',
			project: project,
		});
	},
});
