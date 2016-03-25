'use strict'

import React, {
    Text,
    View
    Clipboard,
    Component,
    StyleSheet,
} from 'react-native';

export default class ClipboardDemo extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            content: 'initial content'
        };
      }

    async _setClipboardContent(){
        Clipboard.setString('Hello World');
        try {
            var content = await Clipboard.getString();
            this.setState({content});
        } catch (e) {
            this.setState({content:e.message});
        }
    }

    render() {
        return(
            <View >
                <Text>演示Clipboard 的Setting 和 Getting</Text>

                <Text style={{color:'green',fontSize:16,padding:10}}>剪贴板的内容+ {this.state.content}</Text>

                <Text onPress={this._setClipboardContent() } style={{color:'blue',fontSize:20,padding:10}}> 点击我将内容复制到剪贴板</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 16,
        textAlign: 'center',
        color:'red',
        margin: 13,
    }
});