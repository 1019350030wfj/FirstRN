'use strict';

var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	ProgressBarAndroid,

} = React;

module.exports = React.createClass({
	render: function() {
		return (
			<View >
				<Text>
					ProgressBar实例
				</Text>
				<ProgressBarAndroid 
					style={{color: 'red',width:30,height:30}}
					styleAttr='Inverse'/>
				<ProgressBarAndroid 
					style={{color: 'blue',marginTop:10}}
					styleAttr='Horizontal'
					indeterminate={false}
					progress={0.2}/>

				<ProgressBarAndroid 
					style={{color: 'green',marginTop:20}}
					styleAttr='SmallInverse'/>

				<ProgressBarAndroid
					style={{color:'black',marginTop:20}}
					styleAttr='LargeInverse'/>

				<ProgressBarAndroid  
					color="green" 
					styleAttr='Horizontal'
            		indeterminate={true} 
            		style={{marginTop:10}}/>
			</View>
		);
	},
});