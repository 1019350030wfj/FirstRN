/**
 * Created by Jayden on 2016/2/5.
 * Email: 1570713698@qq.com
 */
import React, {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import Carousel from 'react-native-carousel'
import Dimensions from 'Dimensions'
import style from './style'
import DetailView from '../../containers/DetailView'

/**
 * 轮播图
 */
export default class MainCarousel extends React.Component {
    // 构造
      constructor(props) {
        super(props);
      }

    render() {
        return (
            <Carousel
                width={Dimensions.get('window').width}
                hideIndicators={false} // Set to true to hide the indicators
                indicatorColor="#FFFFFF" // Active indicator color
                indicatorSize={20} // Indicator bullet size
                indicatorSpace={15} // space between each indicator
                inactiveIndicatorColor="#999999" // Inactive indicator color
                indicatorAtBottom={true} // Set to false to show the indicators at the top
                indicatorOffset={0} // Indicator relative position from top or bottom
                //onPageChange={callback} // Called when the active page changes

                animate={true} // Enable carousel autoplay
                delay={5000} // Set Animation delay between slides
                loop={true} // Allow infinite looped animation. Depends on Prop {...animate} set to true.
                style={{height:300}}
            >
                {this.props.items.map((item) => {
                    return (
                        <TouchableOpacity
                            key={'cart_'+item.id}
                            onPress={()=>this.props.navigator.push({href:item.href,component:DetailView})}
                        >
                            <View style={style.container} key={'car_'+item.id}>
                                <Image style={style.image} key={'car_'+item.id}/>
                                <Text style={style.txt}>{item.title}</Text>
                            </View>

                        </TouchableOpacity>
                    );
                })}

            </Carousel>
        );
    }
}
