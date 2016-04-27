'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Home from './home/home';

export default class RouteHome extends Component {
    render() {
        let defaultName = 'Home';
        let defaultComponent = Home;

        return(
            <Navigator
                initialRoute = {{name:defaultName,component:defaultComponent}}
                configureScene = {(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene = {(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }
}