'use strict'

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TimePickerAndroid,
    ToastAndroid,
} from 'react-native';

import CustomButton from '../button/ButtonCustom.android';

export default class TimePickerDemo extends Component {
    // 构造
    constructor(props){
        super(props);
        this.state={
            isoFormatText: 'pick a time (24-hour format)',
            presetHour: 4,
            presetMinute: 4,
            presetText: 'pick a time, default: 4:04AM',
            simpleText: 'pick a time',
        };
    }
    //进行弹出时间选择器
    async showPicker(options) {
        try {
            const {action, minute, hour} = await TimePickerAndroid.open(options);
            if (action === TimePickerAndroid.timeSetAction) {
                ToastAndroid.show('选择的时间为:'+this._formatTime(hour,minute),ToastAndroid.SHORT);
            } else if (action === TimePickerAndroid.dismissedAction) {
                ToastAndroid.show('选择器关闭取消',ToastAndroid.SHORT);
            }
        } catch (error) {
            ToastAndroid.show('错误信息:'+message,ToastAndroid.SHORT);
        }
    }

    _formatTime(hour, minute) {
        return hour + ':' + (minute < 10 ? '0' + minute : minute);
    }

    render() {
        return (
            <View>
                <Text style={{margin:10}}>
                    TimePickerAndroid实例
                </Text>
                <CustomButton
                    text="时间选择器-默认当前时间"
                    onPress={this.showPicker.bind(this)}
                />
                <CustomButton
                    text="时间选择器-指定时间:20:34"
                    onPress={this.showPicker.bind(this,{
              hour: 20,
              minute: 34,
          })}
                />
                <CustomButton
                    text="时间选择器-指定时间以及时间制格式"
                    onPress={this.showPicker.bind(this,{
              hour: 20,
              minute: 34,
              is24Hour:true,
          })}
                />
            </View>
        );
    }

}