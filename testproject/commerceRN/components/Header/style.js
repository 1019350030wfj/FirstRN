/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import {
    StyleSheet
} from 'react-native'

const h = 56;

const style = StyleSheet.create({
   header: {
       height:h,
       backgroundColor:'#a5cb13',
       flexDirection:'row',
       alignItems: 'center'
   } ,
    btn: {
        height:h,
        width:h,
        justifyContent:'center',
        alignItems:'center'
    },
    btn_menu: {

    },
    btn_icon: {
        width:32,
        height:32
    },
    menu_txt: {
        height:h,
        justifyContent:'center'
    },
    headerText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600'
    },
    right: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    ar: {
        height:h,
        width:h,
        justifyContent: 'center',
        alignItems: 'center'
    }
});