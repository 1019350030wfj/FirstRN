'use strict';


var { requireNativeComponent,PropTypes  } = require('react-native');


var iface = {
  name: 'WebView',
  propTypes: {
    url: PropTypes.string,
  },
};

module.exports = requireNativeComponent('JaydenWebview', iface);