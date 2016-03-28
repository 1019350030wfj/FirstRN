'use strict'

import React,{
    View,
Component,
    Text,
StatusBar,
    StyleSheet,
} from 'react-native'

import CustonButton from '../button/ButtonCustom.android';

export default class StatusBarDemo extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <StatusBar
                    backgroundColor='#ff0000'
                    translucent={true}
                    hidden={false}
                    animated={true}
                />
                <CustonButton text="状态栏Demo"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
    }
});