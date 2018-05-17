'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordToggleVisibility = exports.setUserInfo = exports.savePassword = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _types = require('commonRedux/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  adminUser: {
    userID: '',
    email: '',
    token: '',
    showPassword: {
      password: true,
      confirmPassword: true
    },
    password: {
      password: '',
      confirmPassword: ''
    }
  },
  errors: [],
  saving: false,
  saved: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.PASSWORD_SAVE, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      password: {
        password: action.payload.password,
        confirmPassword: action.payload.password
      }
    }),
    saving: true
  });
}), _defineProperty(_cases, _types.PASSWORD_SAVE_SUCCESS, function (state) {
  return _extends({}, state, {
    saved: true
  });
}), _defineProperty(_cases, _types.PASSWORD_SAVE_FAILURE, function (state) {
  return _extends({}, state, {
    saving: false,
    saved: false
  });
}), _defineProperty(_cases, _types.PASSWORD_TOGGLE_VISIBILITY, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      showPassword: _extends({}, state.adminUser.showPassword, _defineProperty({}, action.payload, !state.adminUser.showPassword[action.payload]))
    })
  });
}), _defineProperty(_cases, _types.PASSWORD_SET_USER_INFO, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      userID: action.payload.userID,
      email: action.payload.email,
      token: action.payload.token
    })
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var savePassword = exports.savePassword = reducer.createAction(_types.PASSWORD_SAVE);
var setUserInfo = exports.setUserInfo = reducer.createAction(_types.PASSWORD_SET_USER_INFO);
var passwordToggleVisibility = exports.passwordToggleVisibility = reducer.createAction(_types.PASSWORD_TOGGLE_VISIBILITY);

exports.default = reducer.bindReducer();