'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Gank extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text> 这是Gank</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'green'
    }
});