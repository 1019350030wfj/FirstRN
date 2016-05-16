'use strict';

import React,{
    Component,
    Navigator,
    BackAndroid,
} from 'react-native'

import SplashScreen from './splashScreen'

export default class Everybody extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.handleBack = this.handleBack.bind(this);
      }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',this.handleBack);
    }

    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress',this.handleBack);
    }

    handleBack() {
        let navigator = this.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    render() {
        let defaultComponent = SplashScreen;
        let defaultName = 'SplashScreen';
        return (
            <Navigator
                ref = {(component) => this.navigator = component}
                initialRoute = {{name:defaultName,component:defaultComponent}}
                configureScene = {(route) => {
                        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
                    }}
                renderScene = {(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator = {navigator} />
                }}
            />
        );
    }
}