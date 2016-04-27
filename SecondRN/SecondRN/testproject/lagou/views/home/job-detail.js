'use strict';

import React,{
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class JobDetail extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            job:null,
        };
          console.log("constructor");
      }

    componentWillMount() {
        console.log("willMount");
        if (React.Platform.OS === 'Android') {
            React.BackAndroid.addEventListener('hardwareBackPress',() => this._pressButton());
        }
    }

    componentWillUnMount() {
        console.log("WillUnMount");
        if (React.Platfrom.OS === 'Android') {
            React.BackAndroid.removeEventListener('hardwareBackPress',() => this._pressButton());
        }
    }

    _pressButton() {
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    render() {
        console.log("render");

        let {job} = this.props;
        return (
            <View style = {{flex:1}}>
                <View
                    style = {styles.titleBar}
                >
                    <TouchableOpacity>
                        <Image source = {require('../../image/icon_back.png')} style = {{width:30,height:30}}/>
                    </TouchableOpacity>
                    <Text style = {{fontSize:17,flex:1,textAlign:'center',marginRight:30}}>职位详情</Text>
                </View>
                <View style = {{padding:15,flexDirection:'row'}}>
                    <Text style={{flex:1}}>{job.title}</Text>
                    <Text style={{color:'red'}}>{job.salary}</Text>
                </View>
                <View style = {{padding:15}}>
                    <Text style = {{marginTop:8,marginBottom:8}}>{job.company}</Text>
                    <Text style = {{color:'#999'}}>{job.info}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleBar: {
        backgroundColor:'#11a984',
        padding:10,
        height:52,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});