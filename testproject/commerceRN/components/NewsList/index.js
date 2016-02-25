/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import React,{
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native'
import style from './style'
import DetailView from '../../containers/DetailView'


/**
 * 资讯列表
 */
export default class NewsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentWillReceiveProps(props) {
        this.setState({dataSource: this.state.dataSource.cloneWithRows(props.newsList.list)});
    }

    render() {
        if (this.props.newsList.list.length == 0) {
            return this.renderLoadingView()
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={style.listView}
            />
        );
    }

    renderRow(item, i) {
        return (
            <TouchableOpacity onPress={this._onPress.bind(this,item.href)}>
                <View style={style.container} key={'list'+ i}>
                    <Image style={style.thumb} source={{uri:item.img}}/>
                    <View style={style.rightCon}>
                        <Text style={style.title}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _onPress(href) {
        this.props.navigator.push({href: href, component: DetailView});
    }

    renderLoadingView() {
        return (
            <View style={[style.container,{
                justifyContent:'center',backgroundColor:'#f2f2f2'
                }]}>
                <Text style={{ color:'#999',marginTop:10,}}>
                    数据加载中...
                </Text>
            </View>
        )
    }
}