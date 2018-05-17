'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _adminUser = require('./actions/adminUser');

var _adminUser2 = _interopRequireDefault(_adminUser);

var _actions = require('containers/AdminUsers/actions');

var _actions2 = _interopRequireDefault(_actions);

var _newUser = require('./actions/newUser');

var _newUser2 = _interopRequireDefault(_newUser);

var _application = require('./actions/application');

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  adminUser: _adminUser2.default,
  adminUsers: _actions2.default,
  newUser: _newUser2.default,
  application: _application2.default
});