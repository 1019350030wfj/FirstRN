'use strict'

import React, {
    View,
    TouchableHighlight,
    Text,
    Component,
    StyleSheet,
    Alert,
    ToastAndroid,
} from 'react-native';

class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.props.onPress}
                underlayColor='#ffff00'
            >
                <Text style={{fontSize:17,color:'white'}}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default class AlertDemo extends Component {
    render() {
        return(
            <View style={{flex:1,backgroundColor:'#903452'}}>
                <Text style={{fontSize:20,color:'red'}}>
                    Alert Demo
                </Text>
                <CustomButton
                    text="点击弹出默认Alert"
                    onPress={() =>
                        Alert.alert('温馨提示','确认推出吗？')
                    }
                />

                <CustomButton
                    text="点击弹出两个按钮的Alert"
                    onPress={() =>
                    Alert.alert("温馨提示","确认推出吗？",
                             [
                                {text:'OK',onPress:() => {ToastAndroid.show("Ok You Pressed",ToastAndroid.LONG)}},
                                {text:"Cancel",onPress: () => ToastAndroid.show("Cancel You Pressed", ToastAndroid.LONG)}
                             ]
                         )
                    }
                />

                <CustomButton text='点击弹出三个按钮的Alert'
                    onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
                        {text:'One',onPress:()=>ToastAndroid.show('你点击了One~',ToastAndroid.SHORT)},
                        {text:'Two',onPress:()=>ToastAndroid.show('你点击了Two~',ToastAndroid.SHORT)},
                        {text:'Three',onPress:()=>ToastAndroid.show('你点击了Three~',ToastAndroid.SHORT)}
                     ])}
                />

         </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 15,
        backgroundColor: 'green',
        borderBottomColor: '#b5b5b5',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});


