'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Text,
	View,
	PanResponder,
} = React;

var styles = require('./PanStyle');

var PanDemo = React.createClass({

	_panResponder: {},
	_previousLeft: 0,
	_previousTop: 0,
	_circleStyles: {},
	circle: null,

	getInitialState: function() {
		return {
			numberActiveTouches: 0,
			moveX: 0,
			moveY: 0,
			x0: 0,
			y0: 0,
			dx: 0,
			dy: 0,
			vx: 0,
			vy: 0,
		};
	},

	componentWillMount: function() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: this._handlerStartShouldSetPanResponder,
			onMoveShouldSetPanResponder: this._handlerMoveShouldSetPanResponder,
			onPanResponderGrant: this._handlerPanResponderGrant,
			onPanResponderMove: this._handlerPanResponderMove,
			onPanResponderRelease: this._handlerPanResponderEnd,
			onPanResponderTerminate: this._handlerPanResponderEnd,
		});
		this._previousLeft = 20;
		this._previousTop = 84;
		this._circleStyles = {
			style: {
				top: this._previousTop,
				left: this._previousLeft,
			}
		};
	},

	componentDidMount: function() {
		this._updatePosition();
	},

	render: function() {
		return (
			<View style={styles.container}>
				<View
					ref = {(circle) => {this.circle = circle}}
					style={styles.circle}
					{...this._panResponder.panHandlers} />

					<Text>
						 {this.state.numberActiveTouches} touches,
				          dx: {this.state.dx},
				          dy: {this.state.dy},
				          vx: {this.state.vx},
				          vy: {this.state.vy}
					</Text>
			</View>
		);
	},

	_highlight: function() {
		this.circle && this.circle.setNativeProps({
			style: {
				backgroundColor: 'green',
			}
		});
	},

	_unHighlight: function() {
		this.circle && this.circle.setNativeProps({
			style: {
				backgroundColor: 'blue',
			}
		});
	},

	_updatePosition: function() {
		this.circle && this.circle.setNativeProps(this._circleStyles);
	},

	_handlerStartShouldSetPanResponder: function(e: Object,gestureState: Object): boolean {
		return true;
	},

	_handlerMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
		return true;
	},

	_handlerPanResponderGrant: function(e: Object, gestureState: Object) {
		this._highlight();
	},

	_handlerPanResponderMove: function(e:Object,gestureState: Object) {
		this.setState({
			moveX: gestureState.moveX,
			moveY: gestureState.moveY,
			x0:gestureState.x0,
			y0:gestureState.y0,
			dx:gestureState.dx,
			dy:gestureState.dy,
			vx:gestureState.vx,
			vy:gestureState.vy,
			numberActiveTouches:gestureState.numberActiveTouches
		});

		this._circleStyles.style.left = this._previousLeft + gestureState.dx;
		this._circleStyles.style.top = this._previousTop + gestureState.dy;
		this._updatePosition();
	},

	_handlerPanResponderEnd: function(e:Object,gestureState: Object) {
		this._unHighlight();
		this._previousLeft += gestureState.dx;
		this._previousTop += gestureState.dy;
	},
});

module.exports = PanDemo;