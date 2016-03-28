'use strict';

import React,{
    View,
Component,
    Text,
    StyleSheet,
    BackAndroid,
    Dimensions,
    ToastAndroid,
    PixelRatio,
} from 'react-native';

var count = 2;

export default class BackAndroidDemo extends Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',function() {
            if(count >= 1) {
                ToastAndroid.show('点击物理返回键 count == ' + count,ToastAndroid.SHORT);
                count--;
                return true;//我们处理
            } else {
                //返回false表示，我们不处理，交给系统默认处理
                return false;
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcom}>BackAndroid & Dimensions * PixelRadio</Text>
                <Text style={styles.instruction}>点击物理返回键，演示BackAndroid</Text>
                <Text style={styles.instruction}>当前屏幕的像素密度比={PixelRatio.get()}</Text>
                <Text style={styles.instruction}>当前屏幕的1dp={PixelRatio.getPixelSizeForLayoutSize(1)} px</Text>
                <Text style={styles.instruction}>屏幕高度： {Dimensions.get('window').height}</Text>
                <Text style={styles.instruction}>屏幕高度： {Dimensions.get('window').width}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcom: {
        fontSize:15,
        color:'blue',
        padding:10,
        margin:10,
        textAlign:'center'
    },
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f5fcff',
    },
    instruction: {
        fontSize:15,
        color:'red',
        padding:10,
        margin:10,
        textAlign:'left'
    }
});