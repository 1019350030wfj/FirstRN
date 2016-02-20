/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import {StyleSheet} from 'react-native'
import Dimensions from 'Dimensions'

const w = Dimensions.get('window');
const offset = 50

const style = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.7)',
        height:w.height,
        marginTop:20
    },
    inner:{
        width:w.width-offset,
        height:w.height,
        backgroundColor:'white'
    },
    top:{
        height:100,
        backgroundColor:'#a5cb13'
    },
    headw:{
        height:40,
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    headimgw:{
        height:40,
        width:40,
        borderRadius:20,
        overflow:'hidden',
        backgroundColor:'#ccc',
    },
    headimg:{
        width:40,
        height:40,
    },
    username:{
        color:'white',
        fontSize:16,
        marginLeft:10
    },
    li:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20,
    },
    active:{
        backgroundColor:'#e5e5e5'
    },
    lititlew:{
        height:50,
        width:w.width-offset-20-100,
        //backgroundColor:'rgba(0,255,0,0.2)',
        marginTop:1,
        justifyContent:'center',
    },
    lititle:{
        fontSize:16,
        color:'#333',
    },
    libtn:{
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'rgba(0,255,0,0.2)',
    },
    liicon:{
        width:23,
        height:23
    }
});

export default style;