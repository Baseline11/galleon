'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('utils');

exports.default = {
  errorsContainer: {
    width: 'inherit',
    paddingBottom: 15,
    fontSize: 14,
    color: _utils.colors.fadedRed,
    transition: 'opacity .3s ease-out',
    opacity: 0,
    height: 0,
    overflow: 'hidden'
  },
  errorsContainerShow: {
    opacity: 1,
    height: 'auto'
  },
  errorsContainerHide: {
    opacity: 0,
    height: 0,
    overflow: 'hidden'
  }
};