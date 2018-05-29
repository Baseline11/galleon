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
  profilePictureContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 0 30px'
  },
  profilePictureWrapper: {
    width: 100
  },
  actionWrapper: {
    paddingLeft: 20
  },
  actionButton: {
    padding: 15,
    height: 50,
    background: _utils.colors.gray,
    ':hover': {
      background: _utils.colors.pictonBlue
    }
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'wrap',
    alignContent: 'stretch'
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