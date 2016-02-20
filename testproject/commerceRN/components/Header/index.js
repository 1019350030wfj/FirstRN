/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */

import React, {
    View,
    Text,
    Imagek,
    Component,
    TouchableOpacity
} from 'react-native'

import icons from "../../assets/icons"
import styles from "../../assets/styles"
import style from "./style"

export default class Header extends Component {
    render() {
        return (
            <View style={[style.header]}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => this.props.openDrawer()}>
                        <View style={[style.btn,style.btn_menu]}>
                            <Image style={style.btn_icon} source={{uri:icons.three_line_menu}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={style.menu_txt}>
                        <Text style={style.headerText}>
                            {this.props.menuItems[this.props.currentMenuId]['title']}
                        </Text>
                    </View>
                    <View style={style.right}>
                        <View style={[style.btn_menu, style.ar]}>
                            <Image style={style.btn_icon} source={{uri:icons.bell}}/>
                        </View>
                        <View style={[style.btn_menu, style.ar]}>
                            <Image style={style.btn_icon} source={{uri:icons.three_circle_menu}}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
