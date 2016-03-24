'use strict';

import React,{
    View,
    Text,
    Navigator,
    Component,
    StyleSheet,
    TouchableHighlight,
    ToastAndroid,
} from 'react-native';

class NavButton extends Component {
    render() {
        return(
            <TouchableHighlight
                style={styles.button}
                underlayColor="b5b5b5"
                onPress={this.props.onPress}
            >
                <Text style = {styles.messageText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class NavMenu extends Component {
    render() {
        return(
            <View style={{flex:1,backgroundColor:'blue'}}>
                <Text style={styles.messageText}>{this.props.message}</Text>
                <NavButton
                    text="从右边向左边切入页面（带有透明度变化）"
                    onPress={() => {
                        this.props.navigator.push({
                            message:'向右拖拽关闭页面',
                            sceneConfig:Navigator.SceneConfigs.FloatFromRight,
                        });
                    }}
                />
                <NavButton
                    text="从下往上切入页面（带有透明度变化）"
                    onPress={() => {
                        this.props.navigator.push({
                            message:'向下拖拽关闭页面',
                            sceneConfig:Navigator.SceneConfigs.FloatFromBottom,
                        });
                    }}
                />
                <NavButton
                    text="页面弹出（回退一页）"
                    onPress={() => {
                        this.props.navigator.pop();
                    }}
                />
                <NavButton
                    text="页面弹出（回退到最后一页）"
                    onPress={() => {
                        this.props.navigator.popToTop();
                    }}
                />
            </View>
        );
    }
}

export default class NavigatorDemo extends Component {
    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{message:'初始化页面',}}
                renderScene={(route,navigator) =>
                 <NavMenu
                    message={route.message}
                    navigator={navigator}
                />}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin:5,
        padding:15,
        backgroundColor:"#b5b5b5",
        borderBottomColor:'#cdcdcd',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    container: {
        flex:1,
    },
    messageText: {
      fontSize:17,
      fontWeight:'500',
      padding:15,
      marginTop:50,
      marginLeft:15,
    }
})