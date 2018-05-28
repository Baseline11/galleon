'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

var styles = {
  containerStyle: _extends({}, _utils.fonts.baseText, {
    width: 'inherit'
  }),
  circularProgress: {
    color: _utils.colors.pictonBlue,
    display: 'block',
    margin: '0 auto'
  }
};

exports.default = styles;