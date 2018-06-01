'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unselectUserRole = exports.selectUserRole = exports.deactivateAdminRole = exports.activateAdminRole = exports.fetchInvitationText = exports.saveAdminUser = exports.fetchAdminUser = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _reducer = require('../../helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _types = require('../types');

var _userRoles = require('utils/config/userRoles');

var _userRoles2 = _interopRequireDefault(_userRoles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = exports.initialState = {
  adminUser: {
    firstName: '',
    lastName: '',
    email: '',
    emailContent: '',
    roles: [],
    bypassDirty: false
  },
  errors: [],
  fetching: false,
  fetched: false,
  fetchingInvitationText: false,
  fetchedInvitationText: false,
  saving: false,
  saved: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.ACTIVATE_ADMIN_ROLE, function (state) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      roles: _userRoles2.default,
      bypassDirty: true
    })
  });
}), _defineProperty(_cases, _types.DEACTIVATE_ADMIN_ROLE, function (state) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      roles: [].concat(_toConsumableArray((0, _lodash.reject)(state.adminUser.roles, ['id', '3']))),
      bypassDirty: true
    })
  });
}), _defineProperty(_cases, _types.SELECT_USER_ROLE, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      roles: [].concat(_toConsumableArray(state.adminUser.roles), [(0, _lodash.find)(_userRoles2.default, ['id', action.payload.id])]),
      bypassDirty: true
    })
  });
}), _defineProperty(_cases, _types.UNSELECT_USER_ROLE, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      roles: [].concat(_toConsumableArray((0, _lodash.reject)(state.adminUser.roles, ['id', action.payload.id]))),
      bypassDirty: true
    })
  });
}), _defineProperty(_cases, _types.ADMINUSER_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.ADMINUSER_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, action.payload[0]),
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.ADMINUSER_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: [].concat(_toConsumableArray(action.errors)),
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.ADMINUSER_SAVE, function (state) {
  return _extends({}, state, {
    saving: true
  });
}), _defineProperty(_cases, _types.ADMINUSER_SAVE_SUCCESS, function (state) {
  return _extends({}, state, {
    saved: true
  });
}), _defineProperty(_cases, _types.ADMINUSER_SAVE_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: action.error,
    saving: false,
    saved: false
  });
}), _defineProperty(_cases, _types.ADMINUSER_FETCH_INVITATION_TEXT, function (state) {
  return _extends({}, state, {
    fetchingInvitationText: true
  });
}), _defineProperty(_cases, _types.ADMINUSER_FETCH_INVITATION_TEXT_SUCCESS, function (state, action) {
  return _extends({}, state, {
    adminUser: _extends({}, state.adminUser, {
      emailContent: action.payload
    }),
    fetchedInvitationText: true
  });
}), _defineProperty(_cases, _types.ADMINUSER_FETCH_INVITATION_TEXT_FAILURE, function (state) {
  return _extends({}, state, {
    fetchingInvitationText: false,
    fetchedInvitationText: false
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var fetchAdminUser = exports.fetchAdminUser = reducer.createAction(_types.ADMINUSER_FETCH);
var saveAdminUser = exports.saveAdminUser = reducer.createAction(_types.ADMINUSER_SAVE);
var fetchInvitationText = exports.fetchInvitationText = reducer.createAction(_types.ADMINUSER_FETCH_INVITATION_TEXT);
var activateAdminRole = exports.activateAdminRole = reducer.createAction(_types.ACTIVATE_ADMIN_ROLE);
var deactivateAdminRole = exports.deactivateAdminRole = reducer.createAction(_types.DEACTIVATE_ADMIN_ROLE);
var selectUserRole = exports.selectUserRole = reducer.createAction(_types.SELECT_USER_ROLE);
var unselectUserRole = exports.unselectUserRole = reducer.createAction(_types.UNSELECT_USER_ROLE);

exports.default = reducer.bindReducer();