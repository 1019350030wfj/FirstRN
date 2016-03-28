'use strict'

import React, {
    TouchableHighlight,
    StyleSheet,
    View,
    Text,
Component,
} from 'react-native';

export default class ButtonCuston extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                underlayColor='#a5a5a5'
                style={styles.button}
            >
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    };
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        margin:10,
        padding:15,
        borderBottomColor:'#cdcdcd',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
});