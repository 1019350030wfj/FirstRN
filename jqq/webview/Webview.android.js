'use strict';

import React, {
    View,
    Component,
    WebView,
    Text,
    StyleSheet,
} from 'react-native';

var DEFAULT_URL = 'http://www.lcode.org';

export default class WebViewDemo extends Component{
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{height:40}}>简单的网页显示</Text>

                <WebView style={styles.webview_style}
                    url={DEFAULT_URL}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                >

                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webview_style:{
        backgroundColor:'#00ff00',
    }
});