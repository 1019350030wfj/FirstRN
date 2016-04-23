'use strict'

import React, {
View,
    ViewPagerAndroid,
    Text,
    TouchableHighlight,
    Image,
    StyleSheet,
    ToastAndroid,
Component,
} from 'react-native';

import CustomButton from '../button/ButtonCustom.android';

export default class ImageBackDemo extends Component {
    render() {
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>

                <View  style={styles.pageStyle}>
                    <Image style = {styles.image}
                           source={require('../../res/image/bg_guide_1.jpg')}/>
                </View>

                <View  style={styles.pageStyle}>
                    <Image style = {styles.image}
                           source={require('../../res/image/bg_guide_2.jpg')}/>
                </View>

                <View  style={styles.pageStyle}>
                    <Image style = {styles.image}
                           source={require('../../res/image/bg_guide_3.jpg')}/>
                </View>

                <View  style={styles.pageStyle}>
                    <Image style = {styles.image}
                           source={require('../../res/image/bg_guide_4.jpg')}>
                        <CustomButton
                            text = "开启应用"
                            onPress={() => ToastAndroid.show("进入西子颜",ToastAndroid.SHORT)}/>
                    </Image>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
         //justifyContent: 'center',
         //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    pageStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //position:'relative',
        flexDirection:'column',
    },
    image: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:50,
    },
    button1:{
        width:200,
    },
    messageText: {
        fontSize: 27,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
        alignSelf:'center',
    },
});
