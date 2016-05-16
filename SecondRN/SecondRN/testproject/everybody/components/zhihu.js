'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class zhihu extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text> 这是知乎</Text>
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