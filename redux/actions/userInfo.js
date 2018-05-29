'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserProfilePicture = exports.fetchUserInfo = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _types = require('commonRedux/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = exports.initialState = {
  overview: [],
  dashboard: [],
  insurance: [],
  fetching: false,
  fetched: false
};

var cases = (_cases = {}, _defineProperty(_cases, _types.USER_INFO_FETCH, function (state) {
  return _extends({}, state, {
    fetching: true
  });
}), _defineProperty(_cases, _types.USER_DELETE_PICTURE, function (state) {
  return _extends({}, state);
}), _defineProperty(_cases, _types.USER_INFO_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    overview: action.payload.overview,
    dashboard: action.payload.dashboard,
    insurance: action.payload.insurance,
    fetching: false,
    fetched: true
  });
}), _defineProperty(_cases, _types.USER_INFO_FETCH_FAILURE, function (state, action) {
  return _extends({}, state, {
    errors: [].concat(_toConsumableArray(action.errors)),
    fetching: false,
    fetched: false
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var fetchUserInfo = exports.fetchUserInfo = reducer.createAction(_types.USER_INFO_FETCH);
var deleteUserProfilePicture = exports.deleteUserProfilePicture = reducer.createAction(_types.USER_DELETE_PICTURE);

exports.default = reducer.bindReducer();