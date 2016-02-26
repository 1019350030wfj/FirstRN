/**
 * Created by Jayden on 2016/2/25.
 * Email: 1570713698@qq.com
 */
'use strict'

import {
    View,
    Text,
    TouchableHighlight,
    Component
} from 'react-native'


export default class TouchableHighlightDemo extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>
                    TouchableHighlight Demo
                </Text>
                <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor="rgb(210,230,255)"
                    style={{borderRadius:8,padding:6,marginTop:5}}
                >
                    <Text style={{fontSize: 17}}>
                        点击我
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
