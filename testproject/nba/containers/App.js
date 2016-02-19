'use strict';

import React, {
	Component,
	View,
	StyleSheet,
	PropTypes
} from 'react-native';

import {connect} from 'react-redux/native';
import {bindActionCreators} from 'redux';

import applicationActions from '../actions/application'
import gameActions from '../actions/game'

import Game from './Game'

export default class App extends Component {
	// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
		tab: null
	};
  }

	//在任意时刻，组件的props都可以通过父组件来更改
	componentWillReceiveProps(props) {
		const {application} = props
		this.setState({
			tab:application.tab
		})
	}

	render() {
		const {tab} = this.state
		const {game,gameActions} = this.props

		return(
			<View style={styles.container}>
				｛tab === 'game' &&
					<Game {...game} actions = {gameActions}/>
				｝
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1
	}
})

App.propTypes = {
	game: PropTypes.object,
	gameActions:PropTypes.object
}

export default connect(state => {
	return {
		application: state.application,
		game: {
			live: state.live,
			over: state.over,
			unstart: state.unstart,
			standing: state.standing,
			application:state.application
		}
	}
}, dispatch => {
	return {
		gameActions: bindActionCreators(Object.assign({},applicationActions,gameActions),dispatch)
	}
})(App)