/**
 * Created by Jayden on 2016/2/4.
 * Email: 1570713698@qq.com
 */

'use strict'

import {
    Navigator,
} from 'react-native'

import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux/native'
import APPView from './containers/AppView'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

export default class Root extends React.Component {
    render() {
        <Provider store={store}>
            {
                () => <Navigator
                    initialRoute={{name:'首页',index:0,component:APPView}}
                    renderScene={(route,navigator) => {
                            const Component = route.component
                            return <Component route={route} navigator={navigator}/>
                        }
                    }
                    />
            }
        </Provider>
    }
}