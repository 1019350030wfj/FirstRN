'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    Image,
    ScrollView,
    Alert,
} from 'react-native';

export default class MessagePage extends Component {
    _itemPress() {
        Alert.alert('提示','正在开发中...',[{text:'确认',onPress:() => console.log('OK Pressed!')}]);
    }

    render() {
        let UNDERLAY_COLOR = '#e8e8e8';
        return(
            <View style = {styles.container}>
                <ScrollView>
                    <TouchableHighlight onPress={() => this._itemPress()} underlayColor={UNDERLAY_COLOR}>
                        <View>
                            <View style = {styles.item_container}>
                                <Image style = {styles.thumb} source = {require('../image/icon_user_info_name.png')}/>
                                <View style = {styles.item_text_zone}>
                                    <Text style={styles.item_caption}>谁看过我</Text>
                                    <Text style={styles.no_msg_txt}>暂无新消息</Text>
                                </View>
                            </View>
                            <View style = {styles.separator}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._itemPress()} underlayColor={UNDERLAY_COLOR}>
                        <View>
                            <View style={styles.item_container}>
                                <Image style={styles.thumb} source={require('../image/icon_user_info_mail.png')}/>
                                <View style={styles.item_text_zone}>
                                    <Text style={styles.item_caption}>简历状态通知</Text>
                                    <Text style={styles.no_msg_txt}>暂无新消息</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._itemPress()} underlayColor={UNDERLAY_COLOR}>
                        <View>
                            <View style={styles.item_container}>
                                <Image style={styles.thumb} source={require('../image/icon_user_info_work.png')}/>
                                <View style={styles.item_text_zone}>
                                    <Text style={styles.item_caption}>职位邀请通知</Text>
                                    <Text style={styles.no_msg_txt}>暂无新消息</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: Platform.OS === 'android' ? 0 : 20,
        flex:1,
        backgroundColor: '#eee'
    },
    thumb: {
        width: 50,
        height:50,
    },
    item_container: {
        padding:10,
        flexDirection:'row'
    },
    item_text_zone:{
        paddingLeft:10
    },
    item_caption: {
        fontSize:16,
        marginBottom:15,
    },
    no_msg_txt: {
        fontSize:14,
        color:'#999'
    },
    separator: {
        marginLeft:64,
        height:1,
        backgroundColor:'#e8e8e8'
    }
});