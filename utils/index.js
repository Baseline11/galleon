'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./styles/colors');

Object.defineProperty(exports, 'colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _fonts = require('./styles/fonts');

Object.defineProperty(exports, 'fonts', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fonts).default;
  }
});

var _common = require('./styles/common');

Object.defineProperty(exports, 'common', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_common).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }