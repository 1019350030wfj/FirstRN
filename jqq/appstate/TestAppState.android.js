'use strict'

import React, {
    View,
    Text,
    ToastAndroid,
    Component,
    StyleSheet,
    AppState,
} from 'react-native';

export default class AppStateDemo extends Component {
    // 构造
      constructor(props) {
        super(props);
          this._handleAppStateChange = this.handleAppStateChange.bind(this);
        // 初始状态
        this.state = {
            _appState:AppState.currentState,
            _messageChange:'initial',
        };
      }

    componentWillMount() {
        AppState.addEventListener("change",this._handleAppStateChange);
    }

    componentWillUnMount() {
        AppState.removeEventListener("change",this._handleAppStateChange);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>当前应用的状态：</Text>
                <Text>
                    {this.state._appState} + {this.state._messageChange}
                </Text>
            </View>
        );
    }

    handleAppStateChange(appState) {
        console.log("appState"+appState);
        this.setState({
              appState,
        });
        ToastAndroid.show("Current State is : " + appState,ToastAndroid.SHORT);
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    }
});