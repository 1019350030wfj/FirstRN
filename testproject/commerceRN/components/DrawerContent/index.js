/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import React, {
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native'

import style from './style'
import icons from '../../assets/icons'

/**
 * 侧滑菜单显示内容
 */
export default class DrawerContent extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }
    componentWillReceiveProps(props){
        let { menuItems, currentMenuId } = props;
        let list = [];
        //循环数据生成数组格式 并添加 active 判断
        for(var i in menuItems){
            var active = menuItems[i]['id']==currentMenuId ? true : false;
            list.push(Object.assign({},menuItems[i],{active:active}));
        }
        this.setState({dataSource: this.state.dataSource.cloneWithRows(list)});
    }
    render(){
        return(
            <View style={style.container}>
                <View style={style.inner}>

                    {this.listTop()}
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        style={style.listView}
                    />

                </View>
            </View>
        )
    }
    listTop(){
        return (
            <View style={style.top}>

                <View style={style.headw}>
                    <View style={style.headimgw}>
                        <Image style={style.headimg}/>
                    </View>
                    <Text style={style.username}>MeanOfWind</Text>
                </View>

            </View>
        )
    }
    renderRow(item){

        return (
            <TouchableOpacity onPress={this.menuItemPress.bind(this,item.id) }>
                <View style={item.active?[style.li, style.active]:style.li}>
                    <View style={style.lititlew}>
                        <Text style={style.lititle}>{item.title}</Text>
                    </View>
                    <View style={style.libtn}>
                        <Image style={style.liicon} source={{uri:icons.go_right}}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    menuItemPress(menuId){
        this.props.closeDrawer();
        this.props.setCurrentMenuId(menuId);
    }
}