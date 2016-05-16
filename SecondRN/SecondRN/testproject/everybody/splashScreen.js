'use strict';

import React,{
    Component,
    View,
    Image,
    StyleSheet,
    Text,
    Animated,
    Dimensions,
} from 'react-native';

import Home from './home/Home';


export default class SplashScreen extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fadeAnimWelcome: new Animated.Value(0)
        };
      }

    componentDidMount() {
        Animated.timing(this.state.fadeAnimWelcome,{
            toValue:1,
            duration:800
        }).start(async() => {
            setTimeout(() => {
                this._turnToHomePage()
            },2200);
        });
    }

    _turnToHomePage() {
        const {navigator} = this.props;
        navigator.replace({
            name:'Home',
            component:Home
        });
    }

    render() {
        return (
            <Animated.View
                style={{
                    opacity:this.state.fadeAnimWelcome,
                    transform:[{
                       scale:this.state.fadeAnimWelcome.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,1]
                       })
                    }]
                }}
            >
                <Image
                    style={styles.backgroundImage}
                    source = {require('./images/hello_page_bg.png')}
                />
            </Animated.View>
        );
    }
}


let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover'
    }
});

