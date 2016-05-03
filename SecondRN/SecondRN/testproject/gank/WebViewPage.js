'use strict';

import React,{
    Component,
    View,
    Text,
    WebView,
} from 'react-native';

import NavigationBar from './custom-views/react-native-navigationbar';

export default class WebViewPage extends Component {
    // 构造
      constructor(props) {
        super(props);
      }

    render() {
       return (
           <View style = {{flex:1}}>
               <NavigationBar
                title = {this.props.title}
                backHidden = {false}
                barTintColor = 'white'
                backFunc = {() => {
                    this.props.navigator.pop()
                }}
               />
               <WebView
                   source={{uri:this.props.url}}
               />
           </View>
       );
    }
}