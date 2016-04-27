'use strict';

import React,{
    Component,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class SearchBar extends Component {
    render() {
        return (
            <View style = {styles.searchBar}>
                <Text style = {{color:'#fff',fontSize:20}}>拉钩</Text>
                <View style = {styles.searchInput}>
                    <Image source = {require('../../image/icon_search.png')} style = {{width:15,height:15}}/>
                    <Text style={{color:'#14BA91',fontSize:13}}>输入职位名或公司名</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#11a984',
        flexDirection: 'row',
        padding:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        borderRadius:15,
        backgroundColor:'#0f9574',
        paddingTop:7,
        paddingBottom:7,
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flex:1
    }
});