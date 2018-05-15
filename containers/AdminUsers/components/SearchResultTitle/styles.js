'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

exports.default = {
  baseTitleStyles: _extends({}, _utils.fonts.title, {
    lineHeight: '45px',
    display: 'inline-block',
    paddingRight: 10,
    marginRight: 10,
    borderRight: '1px solid ' + _utils.colors.quillGray,
    fontSize: 36,
    marginBottom: 25,
    fontWeight: 500
  })
};