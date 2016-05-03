'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    Animated,
} from 'react-native';

import RequestUtils from './utils/RequestUtils';
import DateUtils from './utils/DateUtils';
import SnackBar from './custom-views/SnackBar';
import WebViewPage from './WebViewPage';
import HistoryList from './HistoryList';

export default class HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isError:false,
            isLoading:true,
            isPlaying:true,
            welcomeEnd:false,
            fadeAnimLogo:new Animated.Value(0),// 设置动画初始值，生成Value对象
            fadeAnimText0:new Animated.Value(0),
            fadeAnimText1:new Animated.Value(0),
            fadeAnimLayout:new Animated.Value(1),
        };
      }

    async componentDidMount() {
        let timing = Animated.timing;
        Animated.sequence([
            timing(this.state.fadeAnimLogo,{
                toValue:1,
                duration:800
            }),
            timing(this.state.fadeAnimText0,{
                toValue:1,
                duration:800
            }),
            timing(this.state.fadeAnimText1,{
                toValue:1,
                duration:800
            })
        ]).start(async() => {
            this.setState({
                isPlaying: false
            })

            setTimeout(() => this._hideWelcome(),0);
        });

        try {
            this.dateArray = (await RequestUtils.getDateArray()).results;
            console.log("dateArray" + this.dateArray.length);
            this.contentDataGroup = await RequestUtils.getContents(this.dateArray.slice(0,10));//内容值加载一页（10条）
            if (typeof this.contentDataGroup === 'undefined') {
                return;
            }
            this.setState({
                isLoading:false//加载数据完成
            });
        } catch (error) {
            console.log('request content from HomePage fail');
            this.setState({
                isError:true
            });
        }

        setTimeout(() => this._hideWelcome(),0);
    }

    _hideWelcome () {
        //动画结束，且加载数据完成
        if (this.state.isLoading || this.state.isPlaying) {
            return
        }

        Animated.timing(
            this.state.fadeAnimLayout,
            {
                toValue: 0,
                duration: 1000
            }).start(() => {
            this.setState({
                welcomeEnd: true
            })
        })
    }

    _welcome() {
        if (this.state.welcomeEnd) {
            return null;
        }
        let snackBar = this.state.isError ? (<SnackBar />) : null;

        return (
            <Animated.View style={[styles.indicatorWrapper,{
                opacity:this.state.fadeAnimLayout
                }]}>
                <Animated.View style={{
                    opacity: this.state.fadeAnimLogo,
                    marginTop:220,
                    alignItems:'center',
                    transform:[{
                        translateX:this.state.fadeAnimLogo.interpolate({
                            inputRange:[0,1],
                            outputRange:[-40,0]
                        })
                    }]
                }}>
                    <Image source={require('./images/gank_launcher.png')} style = {{width:100,height:100}}/>
                </Animated.View>

                <Animated.View
                    style={{
                    opacity: this.state.fadeAnimText0,
                    position: 'absolute',
                    bottom: 50,
                    transform: [{
                      translateX: this.state.fadeAnimText0.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 25]
                      })
                    }]
                  }}>
                    <Text style={styles.footerText}>Supported by: Gank.io</Text>
                </Animated.View>

                <Animated.View
                    style={{
                    opacity: this.state.fadeAnimText1,
                    position: 'absolute',
                    bottom: 30,
                    transform: [{
                      translateX: this.state.fadeAnimText1.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 25]
                      })
                    }]
                  }}>
                    <Text style={styles.footerText}>Powered by: 北京杰讯云动力科技有限公司</Text>
                </Animated.View>
                {snackBar}
            </Animated.View>
        );
    }

    render() {
        let content;
        if (this.state.isLoading) {
            content = (<View style = {{backgroundColor:'black',flex:1}}/>);
        } else {
            let homePageContent = this.contentDataGroup[0].results;
            content = (
                <View style = {styles.containers}>
                    <View style = {styles.headWrapper}>
                        <Image style = {{flex:1}} source = {{uri:homePageContent.福利[0].url}}/>
                        <View style = {styles.editorWrapper}>
                            <Text style = {styles.imageEditors}>{'via.' + homePageContent.福利[0].who}</Text>
                        </View>
                    </View>
                    <View style = {styles.contentWrapper}>
                        <TouchableHighlight
                            style = {{flex:2,marginTop:17}}
                            underlayColor={'#333333'}
                            onPress={() => this.props.navigator.push({
                            //活动跳转，以Navigator为容器管理活动页面
                            component:WebViewPage,
                            title:homePageContent.休息视频[0].desc,
                            url:homePageContent.休息视频[0].url
                            })}
                        >
                            <View style = {styles.content}>
                                <Text style={styles.videoTitle} numberOfLines={4}>{homePageContent.休息视频[0].desc}</Text>
                                <Text style={styles.dateAuthor}>{this.contentDataGroup[0].date + ' via.' + homePageContent.休息视频[0].who}</Text>
                                <Text style={styles.toVideo}>--> 去看视频～</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonStyle}
                                            underlayColor={'#333333'}
                                            onPress={() => this._skipIntoHistory(this.contentDataGroup, this.dateArray)}>
                            <Text style={styles.toHistory}>查看往期</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }

        return (
            //renderToHardwareTextureAndroid 设置是否需要GPU进行渲染
            //needsOffscreenAlphaCompositing  设置View是否需要渲染和半透明度效果处理的先后次序。
            <View style = {styles.content} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                {content}
                {this._welcome()}
            </View>
        );
    }

    _skipIntoHistory (contentDataGroup, dateArray) {
        this.props.navigator.push({
            component: HistoryList,
            passProps: {contentDataGroup, dateArray}
        })
    }
}

const styles = StyleSheet.create({
    containers: {
        flex:1,
    },
    headWrapper: {
        flex:4,
    },
    editorWrapper: {
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:17,
        backgroundColor:'black',
        opacity:0.5
    },
    imageEditors: {
        fontSize:12,
        color:'white',
        position:'absolute',
        right:15,
        bottom:1.5
    },
    contentWrapper: {
        backgroundColor:'#252528',
        flex:3,
    },
    content: {
        backgroundColor:'#434243',
        flex:1,
    },
    videoTitle: {
        fontSize:18,
        color:'white',
        marginTop:17,
        left:15,
        lineHeight:21,
        marginRight:25
    },
    dateAuthor: {
        fontSize:14,
        color:'white',
        position:'absolute',
        left:15,
        bottom:17,
    },
    toVideo: {
        fontSize:14,
        color:'white',
        position:'absolute',
        bottom:8,
        right:15,
    },
    buttonStyle: {
        backgroundColor:'#434243',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        marginTop:17,
        marginBottom:17
    },
    toHistory: {
        fontSize:18,
        color:'white'
    },
    loadingText: {
        fontSize:15,
        color:'white',
        marginTop:15,
    },
    indicatorWrapper: {
        flex:1,
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:'black'
    },
    footerText: {
        color:'#aaaaaa',
        fontSize:15,
    }
});