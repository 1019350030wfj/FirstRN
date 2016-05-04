'use strict';

import React,{
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Home from './Home';

export default class App extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render() {
        let name = 'Home';
        let home = Home;
        return (
            <Navigator
                initialRoute = {{name:name,component:home}}
                configureScene = {(route,routeStack) => Navigator.SceneConfigs.FloatFromRight}
                renderScene = {(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator = {navigator}/>
                }}
            />
        );
    }
}