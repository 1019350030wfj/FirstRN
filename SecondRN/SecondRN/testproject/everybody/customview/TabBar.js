'use strict';

import React,{
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Component,
    Text,
    PropTypes,
} from 'react-native';

import Colors from '../components/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabBar extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.selectedTabIcons = [];
        this.unselectedTabIcons = [];
      }

    static propTypes = {
        goToPage: PropTypes.func,
        activeTab:PropTypes.number,
        tabs:PropTypes.array
    };

    componentDidMount() {
        this.setAnimationValue({value: this.props.activeTab});
    }

    renderTabOption(name,page) {
        let isTabActive = this.props.activeTab === page;
        const color = isTabActive ? Colors.blue : Colors.textGray;
        const tabName = name.tabName;
        const iconName = name.iconName;

        return (
            <TouchableOpacity
                key={tabName}
                onPress={() => this.props.goToPage(page)}
                style={styles.tab}>
                <View
                    ref={(icon) => { this.selectedTabIcons[page] = icon }}
                    style={styles.tabItem}
                >
                    <Icon name={iconName} color={color} size={20}/>
                    <Text style={[styles.icon, {color: color}]}>
                        {tabName}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    setAnimationValue({value}) {
        this.unselectedTabIcons.forEach((icon, i) => {
            var iconRef = icon;

            if (!icon.setNativeProps && icon !== null) {
                iconRef = icon.refs.icon_image
            }

            if (value - i >= 0 && value - i <= 1) {
                iconRef.setNativeProps({opacity: value - i});
            }
            if (i - value >= 0 &&  i - value <= 1) {
                iconRef.setNativeProps({opacity: i - value});
            }
        });
    }

    render() {
        return (
            <View>
                <View style = {styles.tabs}>
                    {this.props.tabs.map((tab,i) => this.renderTabOption(tab,i))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    tabItem: {
        flexDirection:'column',
        alignItems:'center'
    },
    tabs: {
        height:49,
        flexDirection:'row',
        paddingTop:5,
        borderTopWidth:0.5,
        borderTopColor:Colors.backGray
    },
});