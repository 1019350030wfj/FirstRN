/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import {StyleSheet} from 'react-native'

const h = 56;

const style = StyleSheet.create({
    header:{
        height:56,
        backgroundColor:'#a5cb13'
    },
    inner:{
        flex:1,
        flexDirection:'row',
    },
    btn:{
        padding: 10,
        height:h,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        //backgroundColor:'rgba(0,255,0,0.2)',
        marginRight:1
    },
    btn_back:{


    },
    icon:{
        width:32,
        height:32,
    },
    right:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    btn_share:{

    },
    btn_star:{

    },
    btn_comment:{

    },
    btn_digg:{

    },
    num:{
        color:'white',
        fontSize:16,
    }
});

export default style;