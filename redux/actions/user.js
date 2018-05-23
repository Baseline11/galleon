'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sorTripHistory = exports.fetchUserTripHistory = exports.saveNote = exports.sortCommunications = exports.fetchUserCommunications = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _lodash = require('lodash');

var _types = require('commonRedux/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  communications: [],
  tripHistory: [],
  sort: {
    sortBy: 'date',
    sortDirection: 'ASC'
  },
  errors: [],
  fetching: false,
  fetched: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.COMMUNICATIONS_FETCH, function (state) {
  return _extends({}, state);
}), _defineProperty(_cases, _types.COMMUNICATIONS_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    communications: action.payload
  });
}), _defineProperty(_cases, _types.COMMUNICATIONS_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: action.payload
  });
}), _defineProperty(_cases, _types.COMMUNICATIONS_SORT, function (state, action) {
  return _extends({}, state, {
    communications: (0, _lodash.orderBy)(state.communications, [action.payload.sortBy], [action.payload.sortDirection.toLowerCase()]),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_FETCH, function (state) {
  return _extends({}, state);
}), _defineProperty(_cases, _types.TRIPHISTORY_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    tripHistory: action.payload
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: action.payload
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_SORT, function (state, action) {
  return _extends({}, state, {
    tripHistory: (0, _lodash.orderBy)(state.tripHistory, [action.payload.sortBy], [action.payload.sortDirection.toLowerCase()]),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var fetchUserCommunications = exports.fetchUserCommunications = reducer.createAction(_types.COMMUNICATIONS_FETCH);
var sortCommunications = exports.sortCommunications = reducer.createAction(_types.COMMUNICATIONS_SORT);
var saveNote = exports.saveNote = reducer.createAction(_types.SAVE_USER_NOTE);

var fetchUserTripHistory = exports.fetchUserTripHistory = reducer.createAction(_types.TRIPHISTORY_FETCH);
var sorTripHistory = exports.sorTripHistory = reducer.createAction(_types.TRIPHISTORY_SORT);

exports.default = reducer.bindReducer();