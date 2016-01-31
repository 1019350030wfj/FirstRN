'use strict';

var React = require('react-native');

var {
	Text,
	View,
	Image,
	TextInput,
} = React;

var styles = require('./style');

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Image 
					style={styles.image}
					source={require('image!uie_thumb_selected')}
				/>

				<TextInput 
					style= {styles.firstInput}
					defaultValue='lalalll'
				 />
				 <TextInput 
					style= {styles.secondInput}
					placeholder='lalalll'
					autoFoucs={true}
					textAlign='center'
					underlineColorAndroid = {'transparent'}
				 />
				 <TextInput 
					style= {styles.thirdInput}
					defaultValue='lalalll'
					editable = {false}
				 />

				 <View style={styles.commitview}>
				 	<Text style={styles.committext}>提交</Text>
				 </View>
				 <View style={styles.bottomview}>
				<Text>
					登录
				</Text>
				<Text style={styles.regitster}>
					注册
				</Text>
			</View>
			</View>
			
		);
	},
});