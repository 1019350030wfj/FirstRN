'use strict';

var React = require('react-native');

var {
	ListView,
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
} = React;

var COMPONENTS = [
  './ImageExample',
  './ListViewExample',
  './ProgressBarAndroidExample',
  './ScrollViewSimpleExample',
  './SwitchExample',
  './RefreshControlExample',
  './PickerAndroidExample',
  './PullToRefreshViewAndroidExample.android',
  './TextExample.android',
  './TextInputExample.android',
  './ToolbarAndroidExample',
  './TouchableExample',
  './ViewExample',
  './ViewPagerAndroidExample.android',
  './WebViewExample',
];

var APIS = [
  './AccessibilityAndroidExample.android',
  './AlertExample',
  './AppStateExample',
  './BorderExample',
  './CameraRollExample',
  './ClipboardExample',
  './GeolocationExample',
  './IntentAndroidExample.android',
  './LayoutEventsExample',
  './LayoutExample',
  './NetInfoExample',
  './PanResponderExample',
  './PointerEventsExample',
  './TimerExample',
  './ToastAndroidExample.android',
  './XHRExample',
];

var ListViewWithSectionHeader = React.createClass({
	getInitialState: function() {
		var dataSource = new ListView.DataSource({
				rowHasChanged: (r1,r2) => r1 !== r2,
				sectionHeaderHasChanged: (h1,h2) => h1 !== h2,
			});
		return {
			dataSource: dataSource.cloneWithRowsAndSections({
				components: COMPONENTS,
				apis: APIS
			}),
		};
	},

	onPressRow: function(example) {
		console.info(example);
	},

	renderRowView: function(example: string, i: number) {
		 return (
	      <View key={i}>
	        <TouchableHighlight onPress={() => this.onPressRow(example)}>
	          <View style={styles.row}>
	            <Text style={styles.rowTitleText}>
	              {example}
	            </Text>
	            <Text style={styles.rowDetailText}>
	              {example} + description
	            </Text>
	          </View>
	        </TouchableHighlight>
	        <View style={styles.separator} />
	      </View>
	    );
	},

	renderSectionHeaderView: function(data: any,section: string) {
		 return (
		      <Text style={styles.sectionHeader}>
		        {section.toUpperCase()}
		      </Text>
		   );
	},

	render: function() {
		return (
			<View style={styles.listContainer}>
		        <ListView 
					dataSource = {this.state.dataSource}
					renderRow = {this.renderRowView}
					renderSectionHeader = {this.renderSectionHeaderView}
					keyboardShouldPersistTaps={true}
			        automaticallyAdjustContentInsets={false}
			        keyboardDismissMode="on-drag"
				/>
      		</View>
			
		);
	},
});

var styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  list: {
    backgroundColor: '#eeeeee',
  },
  sectionHeader: {
    padding: 5,
    fontWeight: '500',
    fontSize: 11,
    textAlign: 'auto',
    justifyContent: 'center',
  },
  group: {
    backgroundColor: 'white',
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  rowDetailText: {
    fontSize: 15,
    color: '#888888',
    lineHeight: 20,
  },
  searchRow: {
    backgroundColor: '#eeeeee',
    paddingTop: 75,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  searchTextInput: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 8,
  },
});

module.exports = ListViewWithSectionHeader;