'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _adminUser = require('./actions/adminUser');

var _adminUser2 = _interopRequireDefault(_adminUser);

var _adminUsers = require('./actions/adminUsers');

var _adminUsers2 = _interopRequireDefault(_adminUsers);

var _newUser = require('./actions/newUser');

var _newUser2 = _interopRequireDefault(_newUser);

var _user = require('./actions/user');

var _user2 = _interopRequireDefault(_user);

var _application = require('./actions/application');

var _application2 = _interopRequireDefault(_application);

var _userInfo = require('./actions/userInfo');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _users = require('./actions/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  adminUser: _adminUser2.default,
  adminUsers: _adminUsers2.default,
  newUser: _newUser2.default,
  user: _user2.default,
  application: _application2.default,
  userInfo: _userInfo2.default,
  users: _users2.default
});