'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    Platform,
    ScrollView,
    Linking,
    TouchableHighlight,
} from 'react-native'

export default class AboutCmp extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    _onBackClick(navigator) {
        if (navigator) {
            navigator.pop();
        }
    }

    _onLinkClick(url){
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
        const {navigator} = this.props;
        return (
            <ScrollView style = {{flex:1}}>
                <View style = {{flex:1}}>
                    <View style = {styles.headerBar}>
                        <TouchableHighlight
                            underlayColor='rgba(34,26,38,0.1)'
                            onPress={() => this._onBackClick(navigator)}
                        >
                            <Image style = {styles.iconImage} source = {require('../images/icon_back.png')} />
                        </TouchableHighlight>
                        <Text style = {styles.headerText}>关于</Text>
                    </View>
                    <Image style = {{alignSelf:'center',margin:40}} source = {require('../images/ic_app.png')}/>
                    <Text style = {{alignSelf:'center',marginTop:-38,color:'#9c9c9c'}}>干货分享2.0.0</Text>
                    <Text style = {{alignSelf:'center',fontSize:18,margin:6}}>每日提供技术干货的App。</Text>
                    <Text style = {{alignSelf:'center',fontSize:14,margin:6}}>本App中所有数据均来自
                        <Text onPress={() => this._onLinkClick('http://gank.io')}
                            style = {{color:'#9c9c9c'}}>
                            @干货集中营。
                        </Text>
                    </Text>
                    <Text style={{alignSelf:'center',fontSize:14,margin:6}} >作者(Android)：陈忠杰 杭州 328197444</Text>
                    <Text style={{alignSelf:'center',fontSize:14,margin:6,color:'blue',}} onPress={()=>this._onLinkClick('mailto:czjchn@163.com')} >e-mail:czjchn@163.com</Text>
                    <Text style={{alignSelf:'center',fontSize:14,color:'blue',margin:6}} onPress={()=>this._onLinkClick('https://github.com/zhongjie-chen')} >
                        @Github</Text>
                    <Text style={{alignSelf:'center',fontSize:14,color:'blue',margin:6}} onPress={()=>this._onLinkClick('https://github.com/zhongjie-chen/rn_rank')} >
                        @该项目开源地址1</Text>
                    <Text style={{alignSelf:'center',fontSize:14,margin:6}} >作者(IOS)：刘鹏 天津 32003737</Text>
                    <Text style={{alignSelf:'center',fontSize:14,margin:6,color:'blue',}} onPress={()=>this._onLinkClick('mailto:liupeng826@hotmail.com')} >e-mail:liupeng826@hotmail.com</Text>
                    <Text style={{alignSelf:'center',fontSize:14,color:'blue',margin:6}} onPress={()=>this._onLinkClick('https://github.com/liupeng826')} >
                        @Github</Text>
                    <Text style={{alignSelf:'center',fontSize:14,color:'blue',margin:6}} onPress={()=>this._onLinkClick('https://github.com/liupeng826/rn_rank')} >
                        @该项目开源地址2</Text>
                    <Text style={{alignSelf:'center',fontSize:14,margin:6}} >感谢
                        <Text onPress={()=>this._onLinkClick('https://github.com/facebook/react-native')}
                              style={{color:'#9c9c9c',fontSize:14,margin:6}}>@React-native</Text>
                        <Text onPress={()=>this._onLinkClick('http://toutiao.io/')}
                              style={{color:'#9c9c9c',fontSize:14,margin:6}}>@开发者头条</Text>
                        <Text onPress={()=>this._onLinkClick('https://github.com/attentiveness/reading')}
                              style={{color:'#9c9c9c',fontSize:14,margin:6}}>@reading</Text>
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    iconImage: {
        height:30,
        margin:4,
        width:30
    },
    headerBar:{
        backgroundColor:'#27b5ee',
        flexDirection:'row',
        alignItems:'center',
        padding:10
    },
    headerText: {
        fontSize:22,
        color:'white',
        marginLeft:10
    }
});