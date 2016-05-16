'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Me from '../components/me'
import Git from '../components/git'
import Gank from '../components/gank'
import Zhihu from '../components/zhihu'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from '../customview/TabBar'

export default class Home extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'white', flex: 1}}>
                <ScrollableTabView
                    renderTabBar={() => <TabBar />}
                    tabBarPosition={'bottom'}
                >
                    <Me tabLabel={{tabName: 'Me', iconName: 'face'}} />
                    <Gank tabLabel={{tabName: 'Gank', iconName: 'home'}} />
                    <Git tabLabel={{tabName: 'Git', iconName: 'settings'}}/>
                    <Zhihu tabLabel={{tabName: 'Zhihu', iconName: 'store'}}/>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'green'
    }
});