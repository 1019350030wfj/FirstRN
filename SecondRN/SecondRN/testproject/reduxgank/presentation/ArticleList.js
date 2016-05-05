'use strict';

import React,{
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    ListView,
    InteractionManager,
    Platform,
    ProgressBarAndroid,
    RefreshControl,
} from 'react-native';

import {fetchArticles} from '../actions/article';
import DetailArticleCmp from './DetailArticleCmp';

export default class ArticleList extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.dataSource = new ListView.DataSource({
            rowHasChanged:(row1,row2) => row1 !== row2
        });
      }

    componentWillMount() {
        InteractionManager.runAfterInteractions(() => {
            //将一些耗时较长的工作安排到所有互动或动画完成之后再进行
            const {dispatch,category} = this.props;
            dispatch(fetchArticles(category));
        })
    }

    _onRefresh() {
        this.componentWillMount();
    }

    _formatDate (strTime) {
        var date = new Date(strTime);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }

    _renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableHighlight
                underlayColor='rgba(36,24,38,0.1)'
                onPress={() => this._onItemClick(rowData,rowID)}
            >
                <View style={{flex:1,padding:12,
                    backgroundColor:'white',
                    borderBottomWidth:StyleSheet.hairlineWidth,
                    borderColor:'#c9c9c9'}}>
                    <Text style = {{fontSize:15,fontWeight:'bold',marginLeft:10}}>{rowData.desc}</Text>
                    <View style = {{flex:1,marginLeft:10,flexDirection:'row',marginTop:8,justifyContent:'space-between'}}>
                        <Text>作者：{rowData.who}</Text>
                        <Text>{this._formatDate(rowData.publishedAt)}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _onItemClick(rowData,rowID) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'DetailArticleCmp',
                component: DetailArticleCmp,
                params: {
                    rowData
                }
            });
        }
    }

    _renderFooter(isFirstLoaded) {
        if(!isFirstLoaded) {
            //不是第一次加载，直接返回
            return;
        }

        if (1) {
            if (Platform.OS === 'android') {
                return (
                    <View style = {styles.progress}>
                        <ProgressBarAndroid />
                    </View>
                );
            } else {
                return (
                    <View style = {styles.progress}></View>
                );
            }
        } else {
            return (
                <View style={styles.progress}>
                    <Text style={{color: 'rgba(0, 0, 0, 0.3)'}}>数据已结加载完了- -|||</Text>
                </View>
            );
        }
    }

    _onEndReached(dispatch,nowRead,category,index){
        console.log("index = " + index);
        if (typeof (nowRead) == 'undefined' || nowRead.isFirstLoaded) {
            return;
        }
        InteractionManager.runAfterInteractions(() => {
            dispatch(fetchArticles(category,nowRead.index + 1,true,nowRead));
        })
    }

    render() {
        const {dispatch,read,category} = this.props;
        let nowRead;
        switch (category) {
            case 'Android':
                nowRead = read[0];
                break;
            case 'iOS': {
                nowRead = read[1];
                break;
            }
            default: {
                nowRead = read[2];
                break;
            }
        }

        let isFirstLoaded = nowRead.articleList.length != 0;

        return (
            <ListView
                enableEmptySections = {true}
                style={{flex:1}}
                renderFooter={this._renderFooter.bind(this,isFirstLoaded)}
                onEndReached={this._onEndReached.bind(this,dispatch,nowRead,category)}
                dataSource={this.dataSource.cloneWithRows(nowRead.articleList)}
                renderRow={this._renderRow.bind(this)}
                initialListSize={10}
                onEndReachedThreshold={10}
                pageSize={nowRead.articleList.length}
                refreshControl={
                    <RefreshControl
                        refreshing = {nowRead.isRefreshing}
                        onRefresh = {this._onRefresh.bind(this)}
                        colors = {['#ff0000','#00ff00','#0000ff','#3ab564']}
                        progressBackgroundColor = '#ffffff'
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    progress:{
        marginVertical: 20,
        paddingBottom: 20,
        alignSelf: 'center'
    },
});