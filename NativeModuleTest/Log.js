'use strict';

var React = require('react-native');

var {
	NativeModules,
} = React;

var JLog = NativeModules.JLog;

var Log = {
	SHORT:JLog.KEY_SHORT,
	LONG:JLog.KEY_LONG,

	d: function(tag: string,msg:string,callback:Function):void {
		JLog.log(tag,msg,callback);
	}
};

module.exports = Log;