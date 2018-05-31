'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/containers/CreatePassword/PasswordForm/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _laelia = require('laelia');

var _redux = require('redux');

var _lodash = require('lodash');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _validations = require('./validations');

var _validations2 = _interopRequireDefault(_validations);

var _newUser = require('commonRedux/actions/newUser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return {
    passwordForm: state.form.passwordForm,
    initialValues: state.newUser.adminUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      passwordToggleVisibility: _newUser.passwordToggleVisibility
    }, dispatch)
  };
}

var rules = [{ key: 'passwordLength', value: 'At least 12 characters' }, { key: 'passwordLowerCaseChar', value: 'One lower case character' }, { key: 'passwordUpperCaseChar', value: 'One upper case character' }, { key: 'passwordSpecialChar', value: 'One number or symbol character' }];
var rules2 = [{ key: 'passwordMatches', value: 'Password in both fields have to match' }];

var PasswordForm = function (_Component) {
  _inherits(PasswordForm, _Component);

  function PasswordForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PasswordForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PasswordForm.__proto__ || Object.getPrototypeOf(PasswordForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showPassword: {
        password: true,
        confirmPassword: true
      }
    }, _this.renderField = function (_ref2) {
      var input = _ref2.input,
          contentIsHidden = _ref2.contentIsHidden;
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.textInputWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        _react2.default.createElement(_laelia.PasswordInput, {
          isHidden: contentIsHidden,
          handleOnChange: input.onChange,
          handleOnClickIcon: function handleOnClickIcon() {
            return _this.toggleVisibility(input.name);
          },
          inputStyleOverride: { width: '100%' },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PasswordForm, [{
    key: 'toggleVisibility',
    value: function toggleVisibility(inputName) {
      this.setState({
        showPassword: _extends({}, this.state.showPassword, _defineProperty({}, inputName, !this.state.showPassword[inputName]))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          pristine = _props.pristine,
          submitting = _props.submitting,
          handleSubmit = _props.handleSubmit,
          passwordForm = _props.passwordForm;

      var confirmDisabled = function confirmDisabled(rulesSet, ruleToOmit) {
        return !!(0, _lodash.invert)((0, _lodash.omit)(rulesSet, ruleToOmit)).true;
      };

      var formatRulesValidationPassword = function formatRulesValidationPassword(rulesSet) {
        return {
          passwordUpperCaseChar: !rulesSet.passwordUpperCaseChar,
          passwordLowerCaseChar: !rulesSet.passwordLowerCaseChar,
          passwordSpecialChar: !rulesSet.passwordSpecialChar,
          passwordLength: !rulesSet.passwordLength
        };
      };

      var formatRulesValidationConfirmPassword = function formatRulesValidationConfirmPassword(rulesSet) {
        return {
          passwordMatches: !rulesSet.passwordMatches
        };
      };

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        },
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          },
          _react2.default.createElement(
            'label',
            { style: _styles2.default.label, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            _react2.default.createElement(
              'span',
              { style: _styles2.default.labelContent, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              'Create password'
            ),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'password',
              placeholder: 'Enter password!',
              component: this.renderField,
              contentIsHidden: this.state.showPassword.password,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }),
            passwordForm && passwordForm.syncErrors !== 'undefined' && _react2.default.createElement(_laelia.ListRules, {
              rules: rules,
              isVisible: confirmDisabled(passwordForm.syncErrors, [passwordForm.syncErrors.passwordMatches]),
              rulesValidations: formatRulesValidationPassword(passwordForm.syncErrors),
              listRulesStyleOverride: _styles2.default.listRules,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            })
          ),
          _react2.default.createElement(
            'label',
            { style: _styles2.default.label, __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            },
            _react2.default.createElement(
              'span',
              { style: _styles2.default.labelContent, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              'Confirm password'
            ),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'confirmPassword',
              placeholder: 'Confirm password!',
              component: this.renderField,
              contentIsHidden: this.state.showPassword.confirmPassword,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            }),
            passwordForm && passwordForm.syncErrors !== 'undefined' && _react2.default.createElement(_laelia.ListRules, {
              rules: rules2,
              isVisible: confirmDisabled(passwordForm.syncErrors, [passwordForm.syncErrors.passwordMatches]) && confirmDisabled(passwordForm.syncErrors, [passwordForm.syncErrors.passwordUpperCaseChar, passwordForm.syncErrors.passwordLowerCaseChar, passwordForm.syncErrors.passwordSpecialChar, passwordForm.syncErrors.passwordLength]),
              rulesValidations: formatRulesValidationConfirmPassword(passwordForm.syncErrors),
              listRulesStyleOverride: _styles2.default.listRules,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            })
          ),
          passwordForm && passwordForm.syncErrors !== 'undefined' && _react2.default.createElement(
            'div',
            { style: _styles2.default.actionWrapper, __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            _react2.default.createElement(_laelia.ActionButton, {
              text: 'Join Command Center',
              action: handleSubmit,
              disabled: pristine || submitting || confirmDisabled(passwordForm.syncErrors, []),
              styleOverride: _styles2.default.actionButton,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            })
          )
        )
      );
    }
  }]);

  return PasswordForm;
}(_react.Component);

PasswordForm.propTypes = {
  actionCreators: _propTypes2.default.object,
  handleSubmit: _propTypes2.default.func,
  pristine: _propTypes2.default.bool,
  submitting: _propTypes2.default.bool,
  passwordForm: _propTypes2.default.object
};

PasswordForm = (0, _reduxForm.reduxForm)({
  form: 'passwordForm',
  validate: _validations2.default
})(PasswordForm);

PasswordForm = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PasswordForm);

exports.default = PasswordForm;