'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('utils');

exports.default = {
  headerStyles: {
    background: _utils.colors.dustyGray,
    color: _utils.colors.white,
    margin: 0,
    padding: '20px 10px',
    height: 'auto',
    textAlign: 'left',
    position: 'relative',
    fontFamily: _utils.fonts.regularText.fontFamily,
    fontSize: 12
  },
  tableStyles: {
    background: _utils.colors.white,
    border: '1px solid ' + _utils.colors.lightGrey
  },
  rowStyles: {
    borderBottom: '1px solid ' + _utils.colors.lightGrey
  },
  columnStyles: {
    margin: 0,
    padding: '0 10px',
    color: _utils.colors.mineShaft,
    fontSize: 12,
    fontFamily: _utils.fonts.regularText.fontFamily
  },
  actionColumnStyles: {
    margin: 0,
    padding: '0 10px',
    overflow: 'unset'
  },
  checkboxContainerEnabledStyles: {
    cursor: 'none',
    boxSizing: 'content-box'
  },
  checkboxEnabledStyles: {
    cursor: 'none',
    boxSizing: 'content-box'
  },
  checkboxContainerDisabledStyles: {
    background: _utils.colors.quillGray,
    cursor: 'none',
    boxSizing: 'content-box'
  },
  checkboxDisabledStyles: {
    display: 'none',
    cursor: 'none',
    boxSizing: 'content-box'
  },
  actionButtonStyles: {
    background: _utils.colors.dustyGray,
    ':hover': {
      background: _utils.colors.pictonBlue
    }
  },
  linkStyles: {
    color: _utils.colors.cornflowerBlue,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};