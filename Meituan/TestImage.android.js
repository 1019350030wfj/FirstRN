'use strict';

var React = require('react-native');

var {
	Image,
	Text,
	View,
} = React;

var styles = require('./testStyle');

var TestImage = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<View style={styles.above}>
					<View style={styles.item}>
						<Image style={styles.image} source={require('image!ic_menu_black_24dp')}/>
						<Text style={styles.text}>美食</Text>
					</View>
					<View style={styles.item}>
						<Image style={styles.image} source={require('image!ic_menu_black_24dp')}/>
						<Text style={styles.text}>电影</Text>
					</View>
					<View style={styles.item}>
						<Image style={styles.image} source={require('image!ic_menu_black_24dp')}/>
						<Text style={styles.text}>酒店</Text>
					</View>
				</View>
				<View style={styles.bottom}>
					<View style={styles.item}>
						<Image style={styles.image} source={require('image!ic_menu_black_24dp')}/>
						<Text style={styles.text}>丽人</Text>
					</View>
					<View style={styles.item}>
						<Image style={styles.image} source={require('image!ic_menu_black_24dp')}/>
						<Text style={styles.text}>今日新单</Text>
					</View>
					<View style={styles.item}>
						<Image style={styles.image} source={require('image!ic_menu_black_24dp')}/>
						<Text style={styles.text}>周边游</Text>
					</View>
				</View>
			</View>
		);
	},
});

module.exports = TestImage;