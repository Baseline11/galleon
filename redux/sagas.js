'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('commonRedux/types');

var _fetchNavigationItems = require('./workers/fetchNavigationItems');

var _fetchNavigationItems2 = _interopRequireDefault(_fetchNavigationItems);

var _fetchAdminUser = require('./workers/fetchAdminUser');

var _fetchAdminUser2 = _interopRequireDefault(_fetchAdminUser);

var _fetchAdminUsers = require('./workers/fetchAdminUsers');

var _fetchAdminUsers2 = _interopRequireDefault(_fetchAdminUsers);

var _savePassword = require('./workers/savePassword');

var _savePassword2 = _interopRequireDefault(_savePassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(mySaga);

function mySaga() {
  return regeneratorRuntime.wrap(function mySaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeLatest)(_types.NAVIGATION_FETCH, _fetchNavigationItems2.default);

        case 2:
          _context.next = 4;
          return (0, _effects.takeLatest)(_types.ADMINUSER_FETCH, _fetchAdminUser2.default);

        case 4:
          _context.next = 6;
          return (0, _effects.takeLatest)(_types.ADMINUSERS_FETCH, _fetchAdminUsers2.default);

        case 6:
          _context.next = 8;
          return (0, _effects.takeLatest)(_types.PASSWORD_SAVE, _savePassword2.default);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

exports.default = mySaga;