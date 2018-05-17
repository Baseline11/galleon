'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('utils');

exports.default = {
  contentWrapper: {
    background: _utils.colors.white,
    padding: 40,
    maxWidth: 765,
    margin: '0 auto'
  },
  formWrapper: {
    display: 'flex',
    margin: '0 auto'
  },
  labelWrapper: {
    display: 'block',
    marginBottom: 20
  },
  label: _extends({}, _utils.fonts.baseText, {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start'
  }),
  labelTextarea: {
    alignItems: 'flex-start'
  },
  labelContent: {
    textAlign: 'right',
    width: 145
  },
  labelContentTextarea: {
    margin: '10px 0 0'
  },
  textInputWrapper: {
    width: 250,
    marginLeft: 20,
    paddingBottom: 30
  },
  textareaWrapper: {
    width: 520
  },
  inputText: _extends({}, _utils.common.baseTextInput, {
    width: 'inherit',
    boxSizing: 'border-box',
    padding: 10
  }),
  texInputDisabled: _extends({}, _utils.common.disabledTextInput),
  textarea: {
    height: 150
  },
  errorLabel: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.fadedRed,
    padding: 5
  }),
  rolesWrapper: {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-start'
  },
  checkbox: {
    label: _extends({}, _utils.fonts.baseText, {
      textAlign: 'center',
      flex: '0 1 100%',
      textTransform: 'capitalize',
      margin: '0 15px 0 0'
    }),
    labelInviteAnother: {
      flex: '0 1 auto',
      display: 'inherit',
      maxWidth: 'none',
      lineHeight: '22px',
      margin: '15px 80px 0 0'
    },
    checkboxContainer: {
      backgroundColor: _utils.colors.white,
      borderRadius: 3,
      border: '1px solid ' + _utils.colors.gray,
      cursor: 'pointer',
      position: 'relative',
      height: 20,
      width: 20,
      margin: '10px auto 0',
      boxSizing: 'content-box'
    },
    checkboxContainerInvite: {
      display: 'inline-block',
      verticalAlign: 'text-bottom',
      margin: '0 10px 0 0'
    },
    checkboxContainerChecked: {
      backgroundColor: _utils.colors.pictonBlue,
      border: '1px solid ' + _utils.colors.pictonBlue
    },
    checkboxContainerDisabled: {
      cursor: 'not-allowed',
      backgroundColor: _utils.colors.lightGrey,
      border: '1px solid ' + _utils.colors.lightGrey
    },
    checkboxStyle: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      width: 'inherit',
      height: 'inherit',
      zIndex: 2,
      margin: 0,
      top: 0,
      left: 0
    },
    checkboxStyleDisabled: {
      display: 'none'
    },
    spanCheckbox: {
      left: 6,
      top: 2,
      width: 5,
      height: 10,
      borderColor: _utils.colors.white,
      borderStyle: 'solid',
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)',
      position: 'absolute',
      zIndex: 1,
      boxSizing: 'content-box'
    },
    spanCheckboxChecked: {
      borderColor: _utils.colors.white
    },
    spanCheckboxDisabled: {
      borderColor: _utils.colors.silver,
      zIndex: 2
    }
  },
  actionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  actionWrapperFirst: {
    marginTop: 40
  },
  actionButton: {
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 1,
    height: 'auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    background: _utils.colors.fadedRed,
    ':hover': {
      opacity: '.8'
    }
  },
  disabledActionButton: {
    background: _utils.colors.dustyGray
  },
  firstButton: {
    marginRight: 15,
    background: _utils.colors.pictonBlue,
    ':disabled': {
      background: _utils.colors.dustyGray
    }
  },
  circularProgress: {
    color: _utils.colors.pictonBlue,
    display: 'block',
    margin: '0 auto'
  }
};