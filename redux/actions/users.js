'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortUsers = exports.fetchUsers = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('../../helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _lodash = require('lodash');

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  users: [],
  errors: [],
  sort: {
    sortBy: 'date',
    sortDirection: 'ASC'
  },
  fetching: false,
  fetched: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.USERS_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.USERS_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    users: action.payload,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.USERS_FETCH_FAILURE, function (state) {
  return _extends({}, state, {
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.USERS_SORT, function (state, action) {
  return _extends({}, state, {
    users: (0, _lodash.orderBy)(state.users, [action.payload.sortBy], [action.payload.sortDirection.toLowerCase()]),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var fetchUsers = exports.fetchUsers = reducer.createAction(_types.USERS_FETCH);
var sortUsers = exports.sortUsers = reducer.createAction(_types.USERS_SORT);

exports.default = reducer.bindReducer();