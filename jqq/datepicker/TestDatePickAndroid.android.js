'use strict'

import React,{
    View,
Component,
DatePickerAndroid,
    TouchableHighlight,
    StyleSheet,
    Text,
} from 'react-native';

class CustomButton extends Component{
    render() {
        return(
            <TouchableHighlight
                onPress={this.props.onPress}
                style={styles.button}
                underlayColor='#a5a5a5'
                >
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class DatePickerAndroidDemo extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            presetDate: new Date(2016, 3, 28),
            allDate: new Date(2020, 3, 28),
            simpleDate: new Date(2016,3,28),
            simpleText: '选择日期,默认今天',
            minText: '选择日期,不能比今日再早',
            maxText: '选择日期,不能比今日再晚',
            presetText: '选择日期,指定2016/3/28',
        };
      }

    //创建时间日期选择器
    async showPicker(stateKey,options) {
        try {
            var newState = {};
            const {action,year,month,day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year,month,day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        }catch (error) {
            console.warn(`Error in example '${stateKey}:`,error.message);
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    时间选择器实例
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
                    <Text style={styles.buttonText}>点击弹出基本日期选择器 + {this.state.simpleDate.toLocaleString()}</Text>
                </TouchableHighlight>
                <CustomButton text={this.state.presetText}
                              onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}/>
                <CustomButton text={this.state.minText}
                              onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:new Date()})}/>
                <CustomButton text={this.state.maxText}
                              onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});