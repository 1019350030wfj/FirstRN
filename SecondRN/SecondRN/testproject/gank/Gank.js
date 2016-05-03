'use strict';

import React,{
Component,
    View,
    Text,
    StatusBar,
    Navigator,
    StyleSheet,
    BackAndroid,
} from 'react-native';

import HomePage from './HomePage';

export default class Gank extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.handleBack = this._handleBack.bind(this);
      }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',this.handleBack);
    }

    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress',this.handleBack);
    }

    _handleBack() {
        var navigator = this.navigator;

        if (navigator && navigator.getCurrentRoutes.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    render() {
        return (
            <View style = {styles.container}>
                <StatusBar
                    backgroundColor = 'transparent'
                    transparent={true}
                />

                <Navigator
                    ref = {component => this.navigator = component}
                    initialRoute = {{
                        component:HomePage
                    }}
                    renderScene = {(route,navigator) =>{
                        return <route.component navigator = {navigator} {...route} {...route.passProps}/>
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});