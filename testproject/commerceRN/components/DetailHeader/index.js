/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import React,{
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import style from './style'
import icons from '../../assets/icons'

/**
 * 内容详页 导航条
 */
export default class DetailHeader extends React.Component
{
    render(){
        return(
            <View style={style.header}>
                <View style={style.inner}>

                    <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                        <View style={[style.btn,style.btn_back]}>
                            <Image style={style.icon} source={{uri:icons.back}}/>
                        </View>
                    </TouchableOpacity>

                    <View style={style.right}>

                        <TouchableOpacity>
                            <View style={[style.btn, style.btn_share]}>
                                <Image style={style.icon} source={{uri:icons.share}} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[style.btn, style.btn_star]}>
                                <Image style={style.icon} source={{uri:icons.star}}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[style.btn, style.btn_comment]}>
                                <Image style={style.icon} source={{uri:icons.comment}}/>
                                <Text style={style.num}>26</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[style.btn, style.btn_digg]}>
                                <Image style={style.icon} source={{uri:icons.thumb_up}}/>
                                <Text style={style.num}>123</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}