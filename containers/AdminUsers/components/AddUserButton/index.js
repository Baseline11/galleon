'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/AdminUsers/components/AddUserButton/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _laelia = require('laelia');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddUserButton() {
  return _react2.default.createElement(_laelia.LinkToUrl, { url: '/admin_users/add', text: 'New User', styleOverride: _styles2.default.secondaryStyles, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  });
}

exports.default = AddUserButton;