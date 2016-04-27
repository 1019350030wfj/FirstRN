'use strict';

import React,{
    Component,
    Platform,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
} from 'react-native';

import JobCell from './job-cell';
import JobData from './job-data';
import JobDetail from './job-detail';
import SearchBar from './search-bar';

let _listHeader = function (index,total,context) {
    return (
        <View style = {styles.headerBody}>
            <Image style = {{width:52,height:50}} source = {require('../../image/icon_find_ok.png')}/>
            <View style = {{paddingLeft:20}}>
                <Text style = {{fontSize:18}}>可<Text style = {{color:'#11A984'}}>直接沟通</Text>的职位推荐</Text>
                <Text style={{marginTop:15,fontSize:13,color:'#999'}} >来和老板直接聊offer</Text>
            </View>
        </View>
    );
}

export default class Home extends Component {
    // 构造函数可以没有参数
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            listSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
                .cloneWithRows(this._genRows({}))
        };
          //必须绑定，否则onPress报错
          this._renderRow = this._renderRow.bind(this);
      }

    _renderRow(jobData) {
        return (
            <JobCell onSelect = {() => this._selectJob(jobData)} jobData = {jobData}/>
        );
    }

    _selectJob(job:Object) {
        let {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'JobDetail',
                component:JobDetail,
                params:{job:job}
            });
        }
    }

    _genRows(): Array<string> {
        return JobData;
    }

    render() {
        let resultList = <ListView
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.listSource}
            renderRow={this._renderRow}
            renderHeader={_listHeader}
            />

        return (
            <View style = {styles.container}>
                <SearchBar />
                {resultList}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerBody: {
        padding:20,
        backgroundColor:'#fff',
        marginBottom:15,
        flexDirection:'row'
    },
    container: {
        top:Platform.OS === 'android' ? 0 : 20,
        flex:1,
        backgroundColor:'#eee',
        paddingBottom:10
    }
});