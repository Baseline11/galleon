'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortPolicy = exports.fetchUserPolicies = exports.setOffsetTripHistory = exports.setLimitTripHistory = exports.sortTripHistory = exports.fetchUserTripHistory = exports.fetchUserNotes = exports.saveNote = exports.sortCommunications = exports.fetchUserCommunications = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _lodash = require('lodash');

var _types = require('commonRedux/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = exports.initialState = {
  communications: [],
  tripHistory: [],
  policies: [],
  notes: [],
  sort: {
    sortBy: 'date',
    sortDirection: 'ASC'
  },
  pager: {
    limit: 20,
    offset: 0
  },
  errors: [],
  fetching: false,
  fetched: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.COMMUNICATIONS_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.COMMUNICATIONS_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    communications: action.payload,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.COMMUNICATIONS_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: action.payload,
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.COMMUNICATIONS_SORT, function (state, action) {
  return _extends({}, state, {
    communications: (0, _lodash.orderBy)(state.communications, [action.payload.sortBy], [action.payload.sortDirection.toLowerCase()]),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _defineProperty(_cases, _types.NOTES_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.NOTES_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    notes: action.payload,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.NOTES_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: [].concat(_toConsumableArray(action.payload)),
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    tripHistory: action.payload,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: action.payload,
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_SORT, function (state, action) {
  return _extends({}, state, {
    tripHistory: (0, _lodash.orderBy)(state.tripHistory, [action.payload.sortBy], [action.payload.sortDirection.toLowerCase()]),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _defineProperty(_cases, _types.POLICY_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.POLICY_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    policies: action.payload,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.POLICY_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: action.payload,
    fetching: false,
    fetched: false
  });
}), _defineProperty(_cases, _types.POLICY_SORT, function (state, action) {
  return _extends({}, state, {
    policies: (0, _lodash.orderBy)(state.policies),
    sort: {
      sortBy: action.payload.sortBy,
      sortDirection: action.payload.sortDirection
    }
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_SET_LIMIT, function (state, action) {
  return _extends({}, state, {
    pager: _extends({}, state.pager, {
      limit: parseInt(action.payload, 10)
    })
  });
}), _defineProperty(_cases, _types.TRIPHISTORY_SET_OFFSET, function (state, action) {
  return _extends({}, state, {
    pager: _extends({}, state.pager, {
      offset: parseInt(action.payload, 10)
    })
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var fetchUserCommunications = exports.fetchUserCommunications = reducer.createAction(_types.COMMUNICATIONS_FETCH);
var sortCommunications = exports.sortCommunications = reducer.createAction(_types.COMMUNICATIONS_SORT);
var saveNote = exports.saveNote = reducer.createAction(_types.SAVE_USER_NOTE);
var fetchUserNotes = exports.fetchUserNotes = reducer.createAction(_types.NOTES_FETCH);

var fetchUserTripHistory = exports.fetchUserTripHistory = reducer.createAction(_types.TRIPHISTORY_FETCH);
var sortTripHistory = exports.sortTripHistory = reducer.createAction(_types.TRIPHISTORY_SORT);
var setLimitTripHistory = exports.setLimitTripHistory = reducer.createAction(_types.TRIPHISTORY_SET_LIMIT);
var setOffsetTripHistory = exports.setOffsetTripHistory = reducer.createAction(_types.TRIPHISTORY_SET_OFFSET);

var fetchUserPolicies = exports.fetchUserPolicies = reducer.createAction(_types.POLICY_FETCH);
var sortPolicy = exports.sortPolicy = reducer.createAction(_types.POLICY_SORT);

exports.default = reducer.bindReducer();