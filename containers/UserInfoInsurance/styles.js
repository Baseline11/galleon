'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

var styles = {
  containerStyle: _extends({}, _utils.fonts.baseText, {
    width: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    padding: '15px 20px'
  }),
  titleStyle: {
    fontSize: 22,
    color: _utils.colors.doveGrey,
    padding: '25px 20px',
    backgroundColor: _utils.colors.alto,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  insurerInfoContainer: {
    flex: 1
  },
  carInfoContainer: {
    flex: 1
  },
  insurerItemContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  insurerLabelStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: _utils.colors.doveGrey
  },
  insurerValueStyle: {
    fontSize: 16,
    paddingBottom: 30,
    color: _utils.colors.doveGrey
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: _utils.colors.doveGrey,
    textTransform: 'Uppercase'
  },
  itemInfoContainer: {
    paddingBottom: 22,
    flex: '1 0 50%'
  },
  textInputStyle: {
    width: 'inherit'
  }
};

exports.default = styles;