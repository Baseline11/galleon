'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

var styles = {
  dashboardContainerStyle: _extends({}, _utils.fonts.baseText, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  statisticsContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: 475
  },
  statisticsItemStyle: {
    color: 'red',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  statisticsValueStyle: {
    fontSize: 28,
    color: _utils.colors.pictonBlue,
    alignSelf: 'center'
  },
  statisticsLabelStyles: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.dustyGray,
    alignSelf: 'center'
  }),
  titleStyle: {
    color: _utils.colors.tundora,
    fontSize: 34,
    fontWeight: 400
  },
  profilePictureOverride: {
    backgroundColor: 'transparent'
  },
  counterIconStyleOverride: {
    position: 'absolute',
    border: '3px solid ' + _utils.colors.white,
    bottom: -5,
    right: 8
  },
  counterIconStyle: {
    width: 100,
    height: 100,
    fontSize: 44
  }
};

exports.default = styles;