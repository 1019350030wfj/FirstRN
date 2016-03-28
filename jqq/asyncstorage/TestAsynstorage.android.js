'use strict'

import React, {
    View,
Component,
    Text,
    AsyncStorage,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.props.onPress}
                underlayColor='#a5a5a5'
            >
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    };
}

var STORAGE_KEY_ONE = '@AsyncStorageDemo:key_one';
var STORAGE_KEY_MESSAGE = '@AsyncStorageDemo:key_message';

export default class AsyncStorageDemo extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            message:[],
        };
      }

    //组件挂载完回调
    componentDidMount() {
        this._loadInitState().done();
    }

    //初始化数据-默认从AsyncStorage中获取数据
    async _loadInitState() {
        try {
            var value = await AsyncStorage.getItem(STORAGE_KEY_ONE);
            if (value != null) {
                this._appendMessage('从存储中获取到数据为:'+value);
            } else {
                this._appendMessage('存储中无数据,初始化为空数据');
            }
        } catch (error) {
                this._appendMessage('AsyncStorage错误'+error.message);
        }
    }

    //进行储存数据_ONE
    async _saveValue_One(){
        try{
            await AsyncStorage.setItem(STORAGE_KEY_ONE,'我是老王');
            this._appendMessage('保存到存储的数据为:'+'我是老王');
        }catch(error){
            this._appendMessage('AsyncStorage错误'+error.message);
        }
    }
    //进行存储数据删除_ONE
    async _removeValue_One(){
        try{
            await AsyncStorage.removeItem(STORAGE_KEY_ONE);
            this._appendMessage('数据删除成功...');
        }catch(error){
            this._appendMessage('AsyncStorage错误'+error.message);
        }
    }

    //进行把message信息添加到messages数组中
    _appendMessage(message){
        this.setState({message:this.state.message.concat(message)});
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    AsyncStorage使用实例
                </Text>
                <CustomButton text='点击存储数据_我是老王' onPress={this._saveValue_One}/>
                <CustomButton text='点击删除数据' onPress={this._removeValue_One}/>
                <Text style={styles.content}>信息为:</Text>
                {this.state.message.map((m) => <Text style={styles.content} key={m}>{m}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin:10,
        padding:15,
        backgroundColor: '#f5f5f5',
        borderBottomColor:'#cdcdcd',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    welcome: {
        fontSize:15,
        color:'blue',
        margin:15,
        textAlign:'center'
    },

    content:{
        fontSize:13,
        color:'red',
        margin:10,
        textAlign:'left'
    },

});