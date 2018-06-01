'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/AddUser/components/AddForm/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _lodash = require('lodash');

var _laelia = require('laelia');

var _adminUser = require('../../../../redux/actions/adminUser');

var _userRoles = require('utils/config/userRoles');

var _userRoles2 = _interopRequireDefault(_userRoles);

var _styles = require('../../styles.js');

var _styles2 = _interopRequireDefault(_styles);

var _validations = require('./validations');

var _validations2 = _interopRequireDefault(_validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return {
    initialValues: _extends({}, state.adminUser.adminUser),
    addUserForm: _extends({}, state.form.addUser)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      activateAdminRole: _adminUser.activateAdminRole,
      deactivateAdminRole: _adminUser.deactivateAdminRole,
      selectUserRole: _adminUser.selectUserRole,
      unselectUserRole: _adminUser.unselectUserRole
    }, dispatch)
  };
}

var AddForm = function (_Component) {
  _inherits(AddForm, _Component);

  function AddForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddForm.__proto__ || Object.getPrototypeOf(AddForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inviteAnother: false
    }, _this.handleToggleInviteAnother = function () {
      return _this.setState({ inviteAnother: !_this.state.inviteAnother });
    }, _this.renderField = function (_ref2) {
      var input = _ref2.input,
          placeholder = _ref2.placeholder,
          type = _ref2.type,
          disabled = _ref2.disabled,
          _ref2$meta = _ref2.meta,
          touched = _ref2$meta.touched,
          error = _ref2$meta.error;

      var combineStyles = function combineStyles(isDisabled) {
        var combinedStyles = _extends({}, _styles2.default.inputText);

        if (isDisabled) {
          combinedStyles = _extends({}, combinedStyles, _styles2.default.texInputDisabled);
        }

        return combinedStyles;
      };

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.textInputWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        _react2.default.createElement('input', _extends({}, input, { disabled: disabled, placeholder: placeholder, type: type, style: combineStyles(disabled), __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        })),
        touched && error && _react2.default.createElement(
          'span',
          { style: _styles2.default.errorLabel, __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          error
        )
      );
    }, _this.renderTextarea = function (_ref3) {
      var input = _ref3.input,
          placeholder = _ref3.placeholder,
          disabled = _ref3.disabled,
          _ref3$meta = _ref3.meta,
          touched = _ref3$meta.touched,
          error = _ref3$meta.error;

      var combineStyles = function combineStyles(isDisabled) {
        var combinedStyles = _extends({}, _styles2.default.inputText);

        if (isDisabled) {
          combinedStyles = _extends({}, combinedStyles, _styles2.default.texInputDisabled);
        }

        return combinedStyles;
      };

      return _react2.default.createElement(
        'div',
        { style: _extends({}, _styles2.default.textInputWrapper, _styles2.default.textareaWrapper), __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        },
        _react2.default.createElement('textarea', _extends({}, input, { disabled: disabled, placeholder: placeholder, style: combineStyles(disabled), __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        })),
        touched && error && _react2.default.createElement(
          'span',
          { style: _styles2.default.errorLabel, __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          error
        )
      );
    }, _this.renderCheckbox = function (_ref4) {
      var input = _ref4.input,
          id = _ref4.id,
          disabled = _ref4.disabled,
          handleActivateAdmin = _ref4.handleActivateAdmin,
          handleDeactivateAdmin = _ref4.handleDeactivateAdmin,
          handleSelectSingleRole = _ref4.handleSelectSingleRole,
          handleUnselectSingleRole = _ref4.handleUnselectSingleRole;

      var selected = (0, _lodash.findIndex)(_this.props.initialValues.roles, ['id', id]) > -1 ? id : false;
      var combineBoxStyles = function combineBoxStyles(isChecked, isDisabled) {
        var combinedBoxStyles = _extends({}, _styles2.default.checkbox.checkboxContainer);

        if (isChecked) {
          combinedBoxStyles = _extends({}, combinedBoxStyles, _styles2.default.checkbox.checkboxContainerChecked);
        }

        if (isDisabled) {
          combinedBoxStyles = _extends({}, combinedBoxStyles, _styles2.default.checkbox.checkboxContainerDisabled);
        }

        return combinedBoxStyles;
      };

      var combineCheckmarkStyles = function combineCheckmarkStyles(isChecked, isDisabled) {
        var combinedCheckmarkStyles = _extends({}, _styles2.default.checkbox.spanCheckbox);

        if (isChecked) {
          combinedCheckmarkStyles = _extends({}, combinedCheckmarkStyles, _styles2.default.checkbox.spanCheckboxChecked);
        }

        if (isDisabled) {
          combinedCheckmarkStyles = _extends({}, combinedCheckmarkStyles, _styles2.default.checkbox.spanCheckboxDisabled);
        }

        return combinedCheckmarkStyles;
      };

      var handleAdminOnChange = function handleAdminOnChange(isChecked) {
        if (!isChecked) {
          handleActivateAdmin();
        } else {
          handleDeactivateAdmin();
        }
      };

      var handleSingleRoleOnChange = function handleSingleRoleOnChange(e, isChecked) {
        handleDeactivateAdmin();

        if (isChecked) {
          handleUnselectSingleRole({ id: e.target.id, name: e.target.name, value: e.target.value });
        } else {
          handleSelectSingleRole({ id: e.target.id, name: e.target.name, value: e.target.value });
        }
      };

      return _react2.default.createElement(
        'div',
        { style: combineBoxStyles(selected, disabled), __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        },
        input.name === 'roles.admin' && _react2.default.createElement('input', _extends({}, input, {
          type: 'checkbox',
          id: id,
          checked: (0, _lodash.findIndex)(_this.props.initialValues.roles, ['id', id]) > -1 ? id : false,
          disabled: disabled,
          onChange: function onChange() {
            return handleAdminOnChange(selected);
          },
          style: _styles2.default.checkbox.checkboxStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        })),
        input.name !== 'roles.admin' && _react2.default.createElement('input', _extends({}, input, {
          type: 'checkbox',
          id: id,
          checked: (0, _lodash.findIndex)(_this.props.initialValues.roles, ['id', id]) > -1 ? id : false,
          disabled: disabled,
          onChange: function onChange(e) {
            return handleSingleRoleOnChange(e, selected);
          },
          style: _styles2.default.checkbox.checkboxStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        })),
        _react2.default.createElement('span', { style: combineCheckmarkStyles(selected, disabled), __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddForm, [{
    key: 'onSubmitHandler',
    value: function onSubmitHandler(e) {
      e.preventDefault();
      this.props.handleSubmit();
      this.props.reset();

      if (!this.state.inviteAnother) {
        window.location = '/admin_users';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          pristine = _props.pristine,
          submitting = _props.submitting,
          invalid = _props.invalid,
          addUserForm = _props.addUserForm;


      var combineBoxStyles = function combineBoxStyles(isChecked, isDisabled) {
        var combinedBoxStyles = _extends({}, _styles2.default.checkbox.checkboxContainer, _styles2.default.checkbox.checkboxContainerInvite);

        if (isChecked) {
          combinedBoxStyles = _extends({}, combinedBoxStyles, _styles2.default.checkbox.checkboxContainerChecked);
        }

        if (isDisabled) {
          combinedBoxStyles = _extends({}, combinedBoxStyles, _styles2.default.checkbox.checkboxContainerDisabled);
        }

        return combinedBoxStyles;
      };

      var combineCheckmarkStyles = function combineCheckmarkStyles(isChecked, isDisabled) {
        var combinedCheckmarkStyles = _extends({}, _styles2.default.checkbox.spanCheckbox);

        if (isChecked) {
          combinedCheckmarkStyles = _extends({}, combinedCheckmarkStyles, _styles2.default.checkbox.spanCheckboxChecked);
        }

        if (isDisabled) {
          combinedCheckmarkStyles = _extends({}, combinedCheckmarkStyles, _styles2.default.checkbox.spanCheckboxDisabled);
        }

        return combinedCheckmarkStyles;
      };

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.formWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          }
        },
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmitHandler(e);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            }
          },
          _react2.default.createElement(
            'div',
            { style: _extends({}, _styles2.default.labelWrapper, _styles2.default.labelWrapperFirst), __source: {
                fileName: _jsxFileName,
                lineNumber: 222
              }
            },
            _react2.default.createElement(
              'label',
              { style: _styles2.default.label, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 223
                }
              },
              _react2.default.createElement(
                'span',
                { style: _styles2.default.labelContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                  }
                },
                'email'
              ),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'email',
                type: 'email',
                placeholder: 'Email address',
                component: this.renderField,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 225
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.labelWrapper, __source: {
                fileName: _jsxFileName,
                lineNumber: 234
              }
            },
            _react2.default.createElement(
              'label',
              { style: _styles2.default.label, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 235
                }
              },
              _react2.default.createElement(
                'span',
                { style: _styles2.default.labelContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                  }
                },
                'name'
              ),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'firstName',
                type: 'text',
                placeholder: 'First name',
                component: this.renderField,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 237
                }
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'lastName',
                type: 'text',
                placeholder: 'Last name',
                component: this.renderField,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 243
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.labelWrapper, __source: {
                fileName: _jsxFileName,
                lineNumber: 252
              }
            },
            _react2.default.createElement(
              'label',
              { style: _extends({}, _styles2.default.label, _styles2.default.labelTextarea), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 253
                }
              },
              _react2.default.createElement(
                'span',
                { style: _extends({}, _styles2.default.labelContent, _styles2.default.labelContentTextarea), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                  }
                },
                'Welcome Email Text'
              ),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'emailContent',
                placeholder: 'Welcome Email Text',
                component: this.renderTextarea,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 255
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.labelWrapper, __source: {
                fileName: _jsxFileName,
                lineNumber: 263
              }
            },
            _react2.default.createElement(
              'div',
              { style: _styles2.default.rolesWrapper, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 264
                }
              },
              _userRoles2.default.map(function (role) {
                return _react2.default.createElement(
                  'label',
                  { key: 'role-' + role.id, style: _styles2.default.checkbox.label, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 266
                    }
                  },
                  role.nickname,
                  _react2.default.createElement(_reduxForm.Field, {
                    name: 'roles.' + role.nickname,
                    id: '' + role.id,
                    type: 'checkbox',
                    component: _this2.renderCheckbox,
                    handleActivateAdmin: function handleActivateAdmin() {
                      return _this2.props.actionCreators.activateAdminRole();
                    },
                    handleDeactivateAdmin: function handleDeactivateAdmin() {
                      return _this2.props.actionCreators.deactivateAdminRole();
                    },
                    handleSelectSingleRole: function handleSelectSingleRole(name, value) {
                      return _this2.props.actionCreators.selectUserRole(name, value);
                    },
                    handleUnselectSingleRole: function handleUnselectSingleRole(name, value) {
                      return _this2.props.actionCreators.unselectUserRole(name, value);
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 268
                    }
                  })
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _extends({}, _styles2.default.actionWrapper, _styles2.default.actionWrapperFirst), __source: {
                fileName: _jsxFileName,
                lineNumber: 283
              }
            },
            _react2.default.createElement(_laelia.ActionButton, {
              text: 'Invite',
              action: function action(e) {
                return _this2.onSubmitHandler(e);
              },
              disabled: pristine || submitting || invalid || Boolean(addUserForm.syncErrors),
              styleOverride: _extends({}, _styles2.default.actionButton, _styles2.default.firstButton),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 284
              }
            }),
            _react2.default.createElement(_laelia.NavigationButton, { url: '/admin_users', text: 'Cancel', styleOverride: _styles2.default.actionButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 290
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.actionWrapper, __source: {
                fileName: _jsxFileName,
                lineNumber: 293
              }
            },
            _react2.default.createElement(
              'label',
              { style: _extends({}, _styles2.default.checkbox.label, _styles2.default.checkbox.labelInviteAnother), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 294
                }
              },
              _react2.default.createElement(
                'div',
                {
                  style: combineBoxStyles(this.state.inviteAnother, false),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                  }
                },
                _react2.default.createElement('input', {
                  type: 'checkbox',
                  id: 'inviteAnother',
                  checked: this.state.inviteAnother,
                  onClick: this.handleToggleInviteAnother,
                  style: _styles2.default.checkbox.checkboxStyle,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                  }
                }),
                _react2.default.createElement('span', {
                  style: combineCheckmarkStyles(this.state.inviteAnother, false),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                  }
                })
              ),
              'Invite another'
            )
          )
        )
      );
    }
  }]);

  return AddForm;
}(_react.Component);

AddForm.propTypes = {
  addUserForm: _propTypes2.default.object,
  handleSubmit: _propTypes2.default.func,
  reset: _propTypes2.default.func,
  initialValues: _propTypes2.default.object,
  pristine: _propTypes2.default.bool,
  submitting: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  actionCreators: _propTypes2.default.object
};

AddForm = (0, _reduxForm.reduxForm)({
  form: 'addUser',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true,
  pure: false,
  rerenderOnEveryChange: true,
  validate: _validations2.default
})(AddForm);

AddForm = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddForm);

exports.default = AddForm;