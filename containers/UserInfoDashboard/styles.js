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
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: _utils.colors.white,
    height: 260
  }),
  generalInfoContainerStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingTop: 40,
    minHeight: 165,
    minWidth: 180
  },
  dashboardContainerStyle: {
    flex: 4,
    alignSelf: 'flex-start',
    minWidth: 370
  },
  rankingContainerStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingTop: 40,
    minWidth: 144
  },
  generalInfoItemStyle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
    color: _utils.colors.doveGrey,
    paddingBottom: 15
  },
  generalInfoLabelStyles: {
    flex: 1
  },
  generalInfoValueStyle: {
    flex: 1,
    fontWeight: 'bold'
  },
  rankItemContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
    color: _utils.colors.doveGrey,
    paddingBottom: 15,
    justifyContent: 'flex-end'
  },
  rankItemLabelStyles: {
    flex: 1,
    alignSelf: 'center'
  },
  rankItemValueStyle: {
    fontSize: 36,
    color: _utils.colors.pictonBlue,
    justifyContent: 'flex-end'
  },
  rankingItemExtraInfoStyle: {
    fontSize: 12
  },
  profilePictureContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: -50,
    alignItems: 'center'
  },
  dashboardContainerStyleOverride: {
    width: '100%'
  }
};

exports.default = styles;