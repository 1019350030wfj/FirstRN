'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Git extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text> 这是Git</Text>
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