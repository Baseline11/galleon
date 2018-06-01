'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNavigationItems = exports.hideAppMessage = exports.closeNavigation = exports.openNavigation = exports.initialState = undefined;

var _cases;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('../../helpers/redux/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  isNavOpen: false,
  navigationItems: [],
  appMessage: {
    type: '',
    message: '',
    isVisible: false
  }
};

var cases = (_cases = {}, _defineProperty(_cases, _types.NAVIGATION_OPEN, function (state) {
  return _extends({}, state, {
    isNavOpen: true
  });
}), _defineProperty(_cases, _types.NAVIGATION_CLOSE, function (state) {
  return _extends({}, state, {
    isNavOpen: false
  });
}), _defineProperty(_cases, _types.APP_MESSAGE_SHOW, function (state, action) {
  return _extends({}, state, {
    appMessage: {
      type: action.payload.type,
      message: action.payload.message,
      isVisible: true
    }
  });
}), _defineProperty(_cases, _types.APP_MESSAGE_HIDE, function (state) {
  return _extends({}, state, {
    appMessage: {
      type: '',
      message: '',
      isVisible: false
    }
  });
}), _defineProperty(_cases, _types.NAVIGATION_FETCH, function (state) {
  return _extends({}, state);
}), _defineProperty(_cases, _types.NAVIGATION_FETCH_SUCCESS, function (state, action) {
  return _extends({}, state, {
    navigationItems: action.payload
  });
}), _cases);

var reducer = new _reducer2.default(initialState, cases);

var openNavigation = exports.openNavigation = reducer.createAction(_types.NAVIGATION_OPEN);
var closeNavigation = exports.closeNavigation = reducer.createAction(_types.NAVIGATION_CLOSE);
var hideAppMessage = exports.hideAppMessage = reducer.createAction(_types.APP_MESSAGE_HIDE);
var fetchNavigationItems = exports.fetchNavigationItems = reducer.createAction(_types.NAVIGATION_FETCH);

exports.default = reducer.bindReducer();