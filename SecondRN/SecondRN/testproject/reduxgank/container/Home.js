'use strict';

import React, {
    Component,
    StyleSheet,
    DrawerLayoutAndroid,
    View,
    Text,
    Image,
    Platform,
    ScrollView,
    TouchableHighlight,
    Dimensions,
    BackAndroid,
    RefreshControl,
} from 'react-native';

import {connect} from 'react-redux';
import Drawer from 'react-native-drawer';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ArticleList from '../presentation/ArticleList';
import AboutCmp from '../presentation/AboutCmp'
import BeautyCmp from './BeautyCmp'

let {height,width} = Dimensions.get("window");

class Home extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false
        };
          this.navigator = this.props.navigator;
      }

    componentDidMount() {
        if (Platform.OS === 'ios') {

        } else {
            BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid.bind(this));
        }
    }

    componentWillUnMount() {
        if (Platform.OS === 'ios') {

        } else {
            BackAndroid.removeEventListener('hardwareBackPress',this.onBackAndroid.bind(this));
        }
    }

    onBackAndroid() {
        const {navigator} = this.props;
        const  routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    _onHomeClick() {
        if (Platform.OS === 'ios') {
            this.refs.drawer.close();
        } else {
            this.refs.drawer.closeDrawer();
        }
    }

    _onMenuClick() {
        if (Platform.OS === 'ios') {
            this.refs.drawer.open();
        } else {
            this.refs.drawer.openDrawer();
        }
    }

    _onAboutClick(navigator) {
        console.log("_onAboutClick navigator" + navigator);
        if (Platform.OS === 'ios') {
            this.refs.drawer.close();
        } else {
            this.refs.drawer.closeDrawer();
        }

        if (navigator) {
            navigator.push({
                name:'AboutCmp',
                component:AboutCmp
            });
        }
    }

    _onBeautyClick(navigator) {
        console.log("_onBeautyClick navigator" + navigator);
        if (Platform.OS === 'ios') {
            this.refs.drawer.close();
        } else {
            this.refs.drawer.closeDrawer();
        }

        if (navigator) {
            navigator.push({
                name:'BeautyCmp',
                component:BeautyCmp
            });
        }
    }

    render() {
        const {navigator} = this.props;
        let navigationView = (
            <View style = {styles.container}>
                <Image style = {styles.headerImage} source = {require('../images/bg_drawer_header.png')}>
                    <Text style = {styles.titleText}>技术干货&&福利</Text>
                </Image>
                <TouchableHighlight underlayColor = "rgba(34, 26, 38, 0.1)" onPress={() => this._onHomeClick()}>
                    <View style = {styles.item}>
                        <Image style = {styles.iconHomeImage} source = {require('../images/icon_home.png')}>
                        </Image>
                        <Text style = {styles.itemText}>首页</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style = {{marginTop: 10}} underlayColor = "rgba(34, 26, 38, 0.1)" onPress={() => this._onBeautyClick(navigator)}>
                    <View style = {styles.item}>
                        <Image style = {styles.iconHomeImage} source = {require('../images/icon_beautiful.png')}></Image>
                        <Text style = {styles.itemText}>福利</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style = {{marginTop: 10}} underlayColor = "rgba(34, 26, 38, 0.1)" onPress={() => this._onAboutClick(navigator)}>
                    <View style = {styles.item}>
                        <Image style = {styles.iconHomeImage} source = {require('../images/icon_about.png')}></Image>
                        <Text style = {styles.itemText}>关于</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );

        if (Platform.OS === 'ios') {

        } else {
            return (
                <DrawerLayoutAndroid
                    ref = 'drawer'
                    drawerWidth = {width * 0.8}
                    drawerPosition = {DrawerLayoutAndroid.positions.Left}
                    renderNavigationView = {() => navigationView}
                >
                    <View style = {{flex:1}}>
                        <View style = {styles.headerBar}>
                            <TouchableHighlight
                                underlayColor="rgba(36,24,38,0.1)"
                                onPress={() => this._onMenuClick()}
                            >
                                <Image style = {styles.iconImage} source = {require('../images/ic_menu.png')}></Image>
                            </TouchableHighlight>
                            <Text style = {styles.headerText}>
                                干货分享
                            </Text>
                        </View>

                        <ScrollableTabView style = {{flex:1}}
                            tabBarUnderlineColor = "white"
                             tabBarInactiveTextColor = "#F2F2F2" tabBarBackgroundColor = "#27B5EE" tabBarActiveTextColor = "white">
                            <ArticleList category = 'Android' tabLabel = "安卓" {...this.props}></ArticleList>
                            <ArticleList category = 'iOS' tabLabel = "苹果" {...this.props}></ArticleList>
                            <ArticleList category = '拓展资源' tabLabel = "拓展" {...this.props}></ArticleList>
                        </ScrollableTabView>
                    </View>
                </DrawerLayoutAndroid>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    headerImage: {
        height:height / 5,
        width:width * 0.8,
        backgroundColor:'#27b5ee',
        marginBottom:20
    },
    item: {
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(34,26,38,0.1)'
    },
    iconHomeImage: {
        height:30,
        margin:8,
        width:30
    },
    itemText: {
        marginLeft:6,
        fontWeight:'bold',
        fontSize:16
    },
    iconImage: {
        height:30,
        margin:4,
        width:30
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
    },
    titleText: {
        color:'white',
        fontSize:16,
        textAlign:'center',
        backgroundColor:'transparent',
        margin:80
    }
});

//说明状态变化，这个组件要跟着响应
function mapStateToProps(state) {
    const {read} = state;
    return {
        read
    }
}

export default connect(mapStateToProps)(Home);