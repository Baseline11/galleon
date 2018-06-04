'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

exports.default = {
  circularProgress: {
    color: _utils.colors.pictonBlue,
    display: 'block',
    margin: '0 auto'
  },
  usersTitle: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.tundora,
    fontSize: 28,
    fontWeight: 400
  })
};