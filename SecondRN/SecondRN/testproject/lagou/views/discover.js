'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Platform,
    Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import DiscoverCell from './discover/discover-cell';
import DiscoverDetail from './discover/discover-detail';
import DiscoverData from './discover/discover-data';

let BANNER_IMGS = [
    require('../image/job1.jpg'),
    require('../image/job2.jpg'),
    require('../image/job3.jpg'),
    require('../image/job4.jpg')
];

let _renderPagination = function(index, total, context) {
    return (
        <View style={styles.pagination_wrapper}>
            <Text style = {styles.count}>
                <Text>
                    {Math.floor(index + 1)}
                </Text>
                /{total}
            </Text>
        </View>
    );
}

export default class Discover extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            listSource: new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1 !== r2
            }).cloneWithRows(this._genRows({})),

            pagerSource: new ViewPager.DataSource({pageHasChanged:(p1,p2) => p1 !== p2})
            .cloneWithPages(BANNER_IMGS)
        };

          //必须绑定，否则onPress报错
          this._renderRow = this._renderRow.bind(this);
      }

    _genRows():Array<string> {
        return DiscoverData;
    }

    _selectDiscover(discover:Object) {
        const {navigator} = this.props;
        console.log("_selectDiscover = " + navigator);
        if (navigator) {
            navigator.push({
                title: discover.title,
                component:DiscoverDetail,
                params:{discover:discover}
            });
        }
    }

    _renderRow(discoverData) {
        console.log("data = " + discoverData)
        return (
            <DiscoverCell onSelect = {() => this._selectDiscover(discoverData)} discoverData = {discoverData}/>
        );
    }

    _renderPage(data) {
        return (
            <Image source = {data} style = {styles.page}/>
        );
    }

    render() {
        let resultList =
            <ListView
                dataSource={this.state.listSource}
                renderRow={this._renderRow}
                style = {styles.listView}
            />;
        return(
            <ScrollView style={styles.container}>
                <ViewPager
                    style={{height:130}}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                    dataSource={this.state.pagerSource}/>
                {resultList}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: Platform.OS === 'android' ? 0 : 20,
        flex: 1,
        backgroundColor: '#EEE'
    },
    pagination_wrapper: {
        position: 'absolute',
        bottom: 20,
        right: 10
    },
    listView: {
        marginTop: 20,
        paddingBottom: 64,
        backgroundColor: '#FFF'
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    swipeText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 120,
        marginLeft: 10,
        width: null,
        lineHeight: 24,
        fontWeight: 'bold'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'cover'
    },
    user: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    count: {
        width: 30,
        height: 30,
        borderRadius: 15,
        textAlign: 'center',
        lineHeight: 23,
        backgroundColor: '#FFF',
        opacity: 0.9
    }
});