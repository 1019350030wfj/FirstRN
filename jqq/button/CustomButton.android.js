/**
 * Created by Jayden on 2016/3/23.
 * Email 1570713698@qq.com
 */

 'use strict';

 import React, {
    View,
    TouchableHighlight,
    ToastAndroid,
    Text,
    StyleSheet,
 } from 'react-native';

 class CustomButtonMore extends React.Component{
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                style={styles.button}
                underlayColor="#00ff00"
            >
            <Text style={{color:'red'}}>{this.props.text}</Text>

            </TouchableHighlight>
        );
    }
 }

 export default class CustomButton extends React.Component {
    render() {
        return (
            <CustomButtonMore
                text="Click Me Please~"
                onPress={() => {
                    ToastAndroid.show("你点击了我，好疼！",ToastAndroid.LONG)
                    }}
             />
        );
    }
 }

 const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor:'white',
        padding:15,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#cdcdcd',
    }
 });
