/**
 * Created by Administrator on 2016/5/5.
 */
 'use strict';

 import React, {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    WebView,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    ProgressBarAndroid,
    Animated,
    Easing,
    Dimensions,
 } from 'react-native';

 let {height, width} = Dimensions.get('window');

 export default class DetailArticleCmp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isCanBack: false,
            progressValue: new Animated.Value(0)
        };
        const {navigator} = this.props;
    }

    componentDidMount() {
        Animated.timing(this.state.progressValue,{
            toValue:width * 0.8,
            duration: 1500,
            easing:Easing.linear
        }).start();
    }

    _onBackClick(navigator) {
        //WebView可以返回
        if (this.state.isCanBack) {
            this.refs.webView.goBack();
            return;
        }

        //WebView已经没有页面返回，当前页面退出
        if (navigator) {
            navigator.pop();
        }
    }

    _onNavigationStateChange(navState) {
        this.setState({
            isCanBack:navState.canGoBack
        });
    }

    _renderLoading() {
        console.log('_renderLoading');
    }

    _onLoadEnd() {
        this.setState({
            progressValue: width
        });
    }

    render() {
        const {rowData,navigator} = this.props;
        return (
            <View style = {{flex:1}}>
                <View style = {styles.headerBar}>
                      <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onBackClick(navigator)}>
                        <Image style = {styles.iconImage} source = {require('../images/icon_back.png')}></Image>
                      </TouchableHighlight>
                      <Text style = {styles.headerText}>{rowData.desc}</Text>
                </View>
                <Animated.View style = {{height: 2, backgroundColor: '#27B5EE', width: this.state.progressValue}}>
                </Animated.View>
                <WebView
                    ref = 'webView'
                    style = {{flex:1}}
                    source = {{uri:rowData.url}}
                    onNavigationStateChange = {(navState) => this._onNavigationStateChange(navState)}
                    onLoadEnd = {() => this._onLoadEnd()}
                    renderLoading = {() => this._renderLoading()}
                />
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
    iconImage: {
        height:30,
        width:30,
        margin:4
    },
    headerBar: {
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
