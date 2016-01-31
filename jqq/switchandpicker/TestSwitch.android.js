'use strict';

import React,{
    Text,
    View,
    Switch,
    StyleSheet,
} from 'react-native';

export default class TestSwitch extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>Switch Example</Text>
                <Switch
                    style={{marginTop:10,marginBottom:10}}
                    onValueChange={(value) => this.setState({falseSwitchIsOn:value})}
                    value={this.state.falseSwitchIsOn}
                />
                <Switch
                    onValueChange={(value) => this.setState({trueSwitchIsOn:value})}
                    value={this.state.trueSwitchIsOn}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5fcff',
        justifyContent:'center',
        alignItems:'center',
    },
});