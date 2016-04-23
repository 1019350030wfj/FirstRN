'use strict'

import React,{
    View,
Component,
    Vibration,
Text,
    StyleSheet,
} from 'react-native';

import CustomButton from '../button/ButtonCustom.android';

export default class VibrationDemo extends Component {

    render() {
        return(
            <View>
                <Text>
                    Vibration 实例
                </Text>
                <CustomButton
                    text="点击设备震动"
                    onPress={() => Vibration.vibrate()} />
            </View>
        );
    }
}