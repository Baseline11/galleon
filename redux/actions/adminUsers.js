'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reinviteAdminUser = exports.updateAdminUserStatus = exports.filterAdminUsers = exports.sortAdminUsers = exports.fetchAdminUsers = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('../../helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _lodash = require('lodash');

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  adminUsers: [],
  errors: [],
  sort: {
    sortBy: 'index',
    sortDirection: 'ASC'
  },
  filter: {
    filterByRole: '',
    filterByStatus: '1'
  },
  fetching: false,
  fetched: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.ADMINUSERS_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.ADMINUSERS_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    adminUsers: action.payload,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.ADMINUSERS_FETCH_FAILURE, function (state) {
  return _extends({}, state, {
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.ADMINUSERS_SORT, function (state, action) {
  return _extends({}, state, {
    adminUsers: (0, _lodash.orderBy)(state.adminUsers, [action.payload.sortBy], [action.payload.sortDirection.toLowerCase()]),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _defineProperty(_cases, _types.ADMINUSERS_UPDATE_FILTER, function (state, action) {
  return _extends({}, state, {
    filter: _extends({}, state.filter, _defineProperty({}, action.payload.filterBy, action.payload.filterValue))
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var fetchAdminUsers = exports.fetchAdminUsers = reducer.createAction(_types.ADMINUSERS_FETCH);
var sortAdminUsers = exports.sortAdminUsers = reducer.createAction(_types.ADMINUSERS_SORT);
var filterAdminUsers = exports.filterAdminUsers = reducer.createAction(_types.ADMINUSERS_UPDATE_FILTER);

var updateAdminUserStatus = exports.updateAdminUserStatus = reducer.createAction(_types.ADMINUSER_UPDATE_STATUS);
var reinviteAdminUser = exports.reinviteAdminUser = reducer.createAction(_types.ADMINUSER_REINVITE);

exports.default = reducer.bindReducer();