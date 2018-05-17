'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

exports.default = {
  label: _extends({}, _utils.fonts.baseText, {
    textAlign: 'left',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 0 30px'
  }),
  labelContent: {
    flex: '0 1 100%',
    margin: '0 0 15px'
  },
  textInputWrapper: {
    width: '100%'
  },
  inputText: _extends({}, _utils.common.baseTextInput, {
    width: '100%',
    padding: 10
  }),
  texInputDisabled: _extends({}, _utils.common.disabledTextInput),
  errorLabel: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.fadedRed,
    padding: 5
  }),
  actionWrapper: {
    width: '100%'
  },
  actionButton: _extends({}, _utils.fonts.baseText, {
    fontSize: 18,
    lineHeight: 1,
    color: _utils.colors.white,
    background: _utils.colors.pictonBlue,
    height: 'auto',
    padding: '15px 20px',
    textAlign: 'center',
    width: '100%',
    ':hover': {
      opacity: '.8'
    },
    ':disabled': {
      background: _utils.colors.dustyGray
    }
  }),
  linkWrapper: {
    margin: '10px 0 0'
  },
  link: {
    color: _utils.colors.pictonBlue
  },
  listRules: {
    width: '100%',
    margin: '10px 0 0'
  }
};