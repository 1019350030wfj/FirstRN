'use strict';

var React = require('react-native');

var {
	Text,
	View,
	TouchableOpacity,
	Platform,
} = React;

var styles = require('./style');

var GiftedListView = require('react-native-gifted-listview');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			renderRow: this.props.renderRow,
            backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#FFFFFF',
            loadMoreText: this.props.loadMoreText ? this.props.loadMoreText : '+',
            renderHeader: this.props.renderHeader ? this.props.renderHeader : null,
		};
	},

	renderRow: function(row) {
		return this.state.renderRow(row);
	},

	renderPaginationAllLoadedView: function() {
		return(
            <View />
        );
	},

	renderPaginationWaitingView: function(paginateCallback) {
		return (
			<TouchableOpacity style={styles.paginationView}
				onPress={paginateCallback}>
				 <Text style={styles.loadMoreText}>
                    {this.state.loadMoreText}
                </Text>
			</TouchableOpacity>
		);
	},

	renderHeaderView: function() {
		if (this.state.renderHeader) {
			return this.props.renderHeader();
		}
		return (null);
	},

	onRefresh: function(page=1,callback,options) {
		this.props.onRefresh(page,callback);
	},

	render: function() {
		return(
			<View style={[styles.container,{backgroundColor: this.state.backgroundColor},this.props.style]}>
				<View style={styles.navBarSpace}></View>
				<GiftedListView rowView={this.renderRow}
					onFetch={this.onRefresh}
					paginationAllLoadedView={this.renderPaginationAllLoadedView}
					paginationWaitingView={this.renderPaginationWaitingView}
					headerView={this.renderHeaderView}
					refreshable = {Platform.OS !== 'android'}
					customStyles = {{
                        refreshableView: {
                            backgroundColor: this.state.backgroundColor,
                            justifyContent: 'flex-end',
                            paddingBottom: 12,
                        },
                        paginationView: {
                            backgroundColor: this.state.backgroundColor,
                            height: 60
                        }
					}}
				/>
			</View>
		);
	},
});