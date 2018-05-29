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
  },
  policyContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 2,
    height: 100,
    backgroundColor: _utils.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    color: _utils.colors.dustyGray,
    paddingLeft: 50,
    cursor: 'pointer'
  },
  policyInfoContainer: {
    padding: '40px 50px',
    backgroundColor: _utils.colors.alto,
    display: 'none',
    opacity: 0,
    height: 0,
    transition: 'all 1s ease-in-out'
  },
  showPolicyInfoContainer: {
    height: '100%',
    display: 'block',
    opacity: 1
  },
  svgIconStyle: {
    display: 'flex',
    paddingTop: 5,
    paddingRight: 10
  }
};

exports.default = styles;