'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../../utils/styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../utils/styles/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  linkStyles: {
    textDecoration: 'none',
    color: 'inherit'
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 13,
    color: _colors2.default.doveGrey,
    fontFamily: _fonts2.default.baseText.fontFamily
  },
  titleStyles: {
    textAlign: 'center',
    fontSize: 25,
    color: _colors2.default.tundora,
    fontFamily: _fonts2.default.baseText.fontFamily
  },
  svgImageStyle: {
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 35
  }
};

exports.default = styles;