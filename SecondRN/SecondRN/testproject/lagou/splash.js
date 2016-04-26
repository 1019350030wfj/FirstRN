'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
} from 'react-native';

import FramePage from './framepage';

export default class SplashScreen extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var {navigator} = props;
          setTimeout(() => {
              navigator.replace({name:'FramePage',component:FramePage})
          },3000);
      }

    render() {
        return (
            <Image source={require('./image/hello_page_bg.png')} style={styles.backgroundImage}/>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:null,
        height:null,
        resizeMode:'cover'
    }
});
