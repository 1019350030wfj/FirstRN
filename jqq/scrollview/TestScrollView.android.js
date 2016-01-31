'use strict';

import React,{
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions,
} from 'react-native';

export default class TestScrollView extends React.Component {
	render() {
		return (
			//水平方向记得设置scrollview的宽度width，
			//垂直方向记得设置scrollview的高度，如果没有设置默认会是无穷高
			<View style={[styles.container,{width:Dimensions.get('window').width}]}>
				<Text style={{fontSize:20,color:'green'}}>
					Test ScrollView Component
				</Text>
				<ScrollView 
					style={{height:400,width:300}}
					horizontal = {true}
					showsHorizontalScrollIndicator ={true}
					contentContainerStyle={styles.contentContainer}>
					<Text style={{fontSize:15,color:'#fff',margin:10,backgroundColor:'blue'}}>
						Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
		                Shake or press menu button for dev menuShake or press menu button for dev menu
					</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height:400,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
	},
	contentContainer: {
		margin: 10,
		backgroundColor:'#ff0000',
	},
});