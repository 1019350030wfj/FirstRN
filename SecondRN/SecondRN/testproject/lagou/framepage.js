'use strict';

import React,{
    Component,
    Dimensions,
    Image,
    View,
    Platform,
    StyleSheet,
    Text,
} from 'react-native';

let HOME_TAB = 'homeTab';
let HOME_NORMAL = require('./image/icon_home_nor.png');
let HOME_PRESS = require('./image/icon_home_pre.png');

let MESSAGE_TAB = 'messageTab';
let MESSAGE_NORMAL = require('./image/icon_message_nor.png');
let MESSAGE_PRESS = require('./image/icon_message_pre.png');

let DISCOVER_TAB = 'discoverTab';
let DISCOVER_NORMAL = require('./image/icon_find_nor.png');
let DISCOVER_PRESS = require('./image/icon_find_pre.png');

let ME_TAB = 'meTab';
let ME_NORMAL = require('./image/icon_user_nor.png');
let ME_PRESS = require('./image/icon_user_pre.png');

import TabNavigator from 'react-native-tab-navigator';

let tabBarHidden = false;

import RouteHome from './views/routeHome';
import Message from './views/message';
import Discover from './views/discover';
import RouteMe from './views/routeme';

export default class FramePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: HOME_TAB,
            tabBarShow:true
        };
          console.log("0.FramePage - constructor");
      }

    componentWillMount() {
        console.log("3.FramePage - componentWillMount");
    }

    _renderBadge(badgeCount) {
        if (!badgeCount) {
            return null;
        }
        return (
            <Image style={styles.badgeBg} source = {require('./image/message_num_bg.png')}>
                <Text style={styles.badgeText}>{badgeCount}</Text>
            </Image>
        );
    }

    itemPress(tag) {
        console.log("item Press " + tag);
        this.setState({
            selectedTab:tag
        });
        this.render.bind(this);
    }

    _renderTabItem(img,selectedImg,tag,title,badgeCount,childView) {
        return (
            <TabNavigator.Item
                selected = {this.state.selectedTab === tag}
                renderIcon = {() => <Image style = {styles.tabIcon} source = {img}/>}
                title={title}
                selectedTitleStyle = {styles.selectedTitleStyle}
                renderBadge = {() => this._renderBadge(badgeCount)}
                renderSelectedIcon = {() => <Image style = {styles.tabIcon} source = {selectedImg}/>}
                onPress={() => this.itemPress(tag)}
            >
                {childView}
            </TabNavigator.Item>
        );
    }

    _createChildView(tag) {
        let renderView;
        switch (tag) {
            case HOME_TAB: {
                renderView = <RouteHome />
                break;
            }
            case MESSAGE_TAB: {
                renderView = <Message />
                break;
            }
            case DISCOVER_TAB: {
                renderView = <Discover />
                break;
            }
            case ME_TAB: {
                renderView = <RouteMe />
                break;
            }
            default:
                break;
        }
        return (
            <View style = {styles.container}>
                {renderView}
            </View>
        );
    }

    render() {
        console.log("4.FramePage - render");
        let {tabBarShow} = this.state;
        console.log(tabBarShow);

        return(
            <View style = {styles.container}>
                <TabNavigator
                    hidesTabTouch = {false}
                    sceneStyle = {{paddingBottom:0}}
                    tabBarStyle = {tabBarShow ? styles.tabNav : styles.tabNavHide}
                >
                    {this._renderTabItem(HOME_NORMAL,HOME_PRESS,HOME_TAB,'首页',0,this._createChildView(HOME_TAB))}
                    {this._renderTabItem(MESSAGE_NORMAL,MESSAGE_PRESS,MESSAGE_TAB,'消息',1,this._createChildView(MESSAGE_TAB))}
                    {this._renderTabItem(DISCOVER_NORMAL,DISCOVER_PRESS,DISCOVER_TAB,'发现',0,this._createChildView(DISCOVER_TAB))}
                    {this._renderTabItem(ME_NORMAL,ME_PRESS,ME_TAB,'我的',0,this._createChildView(ME_TAB))}

                </TabNavigator>
            </View>
        );
    }

    componentDidMount() {
        console.log("5.FramePage-componentDidMount()");
    }

    componentWillReceiveProps() {
        console.log("6.FramePage-componentWillReceiveProps()");
    }

    shouldComponentUpdate() {
        console.log("7.FramePage-shouldComponentUpdate()");
        return false;
    }

    componentWillUpdate() {
        console.log("8.FramePage-componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("9.FramePage-componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("10.FramePage-componentWillUnmount");
        //tabBarHidden = true;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    tabNav: {
        height:60,
        backgroundColor:'#fff',
        alignItems: 'center',
        borderTopWidth:0.5,
        borderTopColor:'#e8e8e8',
    },
    tabNavHide: {
      position:'absolute',
        top:Dimensions.get('window').height,
        height:0,
    },
    selectedTitleStyle: {
        color:'#11a984',
    },
    badgeBg: {
        width:14,
        height:14,
        marginTop:6,
    },
    badgeText: {
        color:'#fff',
        textAlign:'center',
        fontSize:10,
        backgroundColor:Platform.OS === 'android' ? null : 'transparent'
    },
    tabIcon: {
        height: 30,
        width:30,
        resizeMode:'cover'
    }
});


