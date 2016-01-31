'use strict';

var React = require('react-native');

var {
	Text,
	View,
	Image,
	StyleSheet,
	ActivityIndicatorIOS,
} = React;

var NetWorkImageCallbackExample = React.createClass({
	getInitialState: function() {
		return {
			events: [],
			mountTime: new Date(),
		};
	},

	componentWillMount: function() {
		this.setState({
			mountTime: new Date(),
		});
	},

	render: function() {
		var {mountTime} = this.state;
		var jaydenTime = this.state.mountTime;
		console.info("jaydne time = " + jaydenTime);
		console.info("mountTime = " + mountTime);
		return(
			<View>
				<Image
					source={this.props.source}
					style={[styles.base,{overflow: 'visible'}]}
					onLoadStart={() => this._loadEventFired(`onLoadStart(+${new Date() - mountTime}ms)`)}
					onLoad = {() => this._loadEventFired(`onLoad(+${new Date() - mountTime}ms)`)}
					onLoadEnd = {() => this._loadEventFired(`onLoadEnd(+${new Date() - mountTime})`)} />
				<Text style={{marginTop: 20}}>
					{this.state.events.join('\n')}
				</Text>
			</View>
		);
	},

	_loadEventFired: function(event) {
		this.setState((state) => {
			return state.events = [...state.events,event];
		});
	},
});

var NetWorkImageExample = React.createClass({
	getInitialState: function() {
		return{
			error: false,
			loading: false,
			progress: 0,
		};
	},

	render: function() {
		var loader = this.state.loading ? 
				<View style= {styles.progress}>
					<Text >
						{this.state.progress}%
					</Text>
					<ActivityIndicatorIOS style={{marginLeft: 5}}/>
				</View> : null;
		return (
			this.state.error ? 
			<Text style={{color: 'red'}}>{this.state.error}</Text> : 
			<Image 
				source={this.props.source}
				style={[styles.base,{overflow: 'visible'}]}
				onLoadStart = {() => this.setState({loading: true})}
				onError = {(e) => this.setState({error: e.nativeEvent.error,loading: false})}
				onProgress = {this.handleProgress}
				onLoad = {() => this.setState({loading: false,error: false})}
				>
				{loader}
			</Image>
		);
	},

	handleProgress: function(e) {
		console.info("loaded:"+ e.nativeEvent.loaded + "total" + e.nativeEvent.total);
		this.setState({
			progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)
		});
	},
});

var ImageExample = React.createClass({
	render: function() {
		return(
			<View style={styles.container}>
				<Text>http</Text>
				<Image 
					source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
					style = {styles.base} />
				<Text>static assets are located in the app bundle.</Text>
				<View style={styles.horizontal}>
					<Image 
						source={require('image!uie_thumb_normal')}
						style = {styles.icon}
					/>
					<Image 
						source={require('image!uie_thumb_selected')}
						style = {styles.icon}
					/>
					<Image 
						source={require('image!uie_comment_normal')}
						style = {styles.icon}
					/>
					<Image 
						source={require('image!uie_comment_highlighted')}
						style = {styles.icon}
					/>
				</View>
				<NetWorkImageCallbackExample source={{uri:'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}}/>
				<NetWorkImageExample source={{uri: 'http://TYPO_ERROR_facebook.github.io/react/img/logo_og.png'}}/>
				<NetWorkImageExample source={{uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}}/>
			</View>
		);
	},
});

module.exports = ImageExample;

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	base: {
		height: 38,
		width: 38,
	},
	icon: {
	    width: 15,
	    height: 15,
	 },
	 horizontal: {
	 	flexDirection: 'row',
	 },
	 progress: {
	 	flex: 1,
	 	flexDirection: 'row',
	 	width: 100,
	 	alignItems: 'center',
	 },
});