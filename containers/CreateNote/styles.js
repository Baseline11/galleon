'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

exports.default = {
  root: {
    padding: 15
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  formTextarea: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.silver,
    border: 0,
    outline: 0,
    padding: 0,
    height: 'auto',
    resize: 'none',
    flex: '1 0 100%'
  }),
  formSubmit: {
    flexShrink: 1
  },
  actionButton: {
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 1,
    height: 'auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    ':hover': {
      opacity: '.8'
    }
  }
};