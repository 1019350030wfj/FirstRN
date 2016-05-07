'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    Animated,
    Dimensions,
} from 'react-native';

export default class TestAnimated extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            fadeAnimationLogo:new Animated.Value(0)
        };
      }

    componentDidMount() {
        Animated.timing(this.state.fadeAnimationLogo,{
            toValue:1,
            duration:800
        }).start();
    }

    render() {
        return (
            <View style = {styles.container}>
                <Animated.View
                    style = {{
                        opacity:this.state.fadeAnimationLogo,
                        transform:[{
                        translateX:this.state.fadeAnimationLogo.interpolate({
                            inputRange:[0,1],
                            outputRange:[90,0]
                        })
                    },
                    {scale: this.state.fadeAnimationLogo.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    })},
                    {rotate: this.state.fadeAnimationLogo.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        '0deg', '360deg' // 'deg' or 'rad'
                      ],
                    })},
                    ]
                    }}
                >
                    <Image
                        style = {styles.img}
                        source = {require('./six.png')}
                    />
                </Animated.View>
                <Text style = {styles.testAnimated}>动画Testing</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green'
    },
    img: {
        alignSelf:'center',
        width:90,
        height:90,
        margin:40
    },
    testAnimated: {
        alignSelf:'center',
        fontSize:20,
        color:'yellow',
    }
});
