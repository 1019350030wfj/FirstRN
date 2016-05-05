'use strict';

import React,{
    Component,
    View,
    BackAndroid,
    Dimensions,
    TouchableHighlight,
    LayoutAnimation,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    Image,
    Text
} from 'react-native';

let {height,width} = Dimensions.get('window');

export default class ImageDetailCmp extends Component {
    // 构造
      constructor(props) {
        super(props);
          this.image = props.image;
        // 初始状态
        this.state = {
            h: new Animated.Value(0.5),
            w: new Animated.Value(0.5)
        };
      }

    componentWillMount() {
        LayoutAnimation.spring();
    }

    componentDidMount() {
        Animated.timing(this.state.h,{
            toValue:height * 1,
            duration:500,
            easing:Easing.linear
        }).start();
        Animated.timing(this.state.w,{
            toValue:width * 1,
            duration:500,
            easing:Easing.linear
        }).start();
    }

    _onBackClick() {
        const {navigator} = this.props;
        if (navigator){
            navigator.pop();
        }
    }

    render() {
        return(
            <View style = {{flex:1}}>
                <TouchableWithoutFeedback onPress={()=>this._onBackClick()}>
                    <Animated.Image style = {{height:this.state.h, width:this.state.w}}
                                    source = {{uri:this.image.url}} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}