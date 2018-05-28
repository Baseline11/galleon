'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

exports.default = {
  headerStyles: _extends({}, _utils.fonts.baseText, {
    fontSize: 12,
    background: _utils.colors.dustyGray,
    color: _utils.colors.white,
    margin: 0,
    padding: '15px 10px',
    textAlign: 'left',
    position: 'relative'
  }),
  tableStyles: {
    background: _utils.colors.white,
    outline: 0
  },
  rowStyles: {
    borderBottom: '1px solid ' + _utils.colors.lightGrey
  },
  columnStyles: _extends({}, _utils.fonts.baseText, {
    fontSize: 12,
    margin: 0,
    padding: '0 10px',
    color: _utils.colors.mineShaft
  })
};