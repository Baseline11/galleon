'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('./fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  baseTextInput: _extends({}, _fonts2.default.baseText, {
    border: '1px solid ' + _colors2.default.quillGray,
    background: _colors2.default.lightGrey,
    fontSize: 12,
    outline: 0
  }),
  disabledTextInput: {
    opacity: '.55',
    color: _colors2.default.scorpion,
    cursor: 'not-allowed'
  }
};