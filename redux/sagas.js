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

var _fetchUserCommunications = require('./workers/fetchUserCommunications');

var _fetchUserCommunications2 = _interopRequireDefault(_fetchUserCommunications);

var _savePassword = require('./workers/savePassword');

var _savePassword2 = _interopRequireDefault(_savePassword);

var _fetchUserInfo = require('./workers/fetchUserInfo');

var _fetchUserInfo2 = _interopRequireDefault(_fetchUserInfo);

var _fetchUserTripHistory = require('./workers/fetchUserTripHistory');

var _fetchUserTripHistory2 = _interopRequireDefault(_fetchUserTripHistory);

var _saveNote = require('./workers/saveNote');

var _saveNote2 = _interopRequireDefault(_saveNote);

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
          return (0, _effects.takeLatest)(_types.COMMUNICATIONS_FETCH, _fetchUserCommunications2.default);

        case 8:
          _context.next = 10;
          return (0, _effects.takeLatest)(_types.PASSWORD_SAVE, _savePassword2.default);

        case 10:
          _context.next = 12;
          return (0, _effects.takeLatest)(_types.USER_INFO_FETCH, _fetchUserInfo2.default);

        case 12:
          _context.next = 14;
          return (0, _effects.takeLatest)(_types.TRIPHISTORY_FETCH, _fetchUserTripHistory2.default);

        case 14:
          _context.next = 16;
          return (0, _effects.takeLatest)(_types.SAVE_USER_NOTE, _saveNote2.default);

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

exports.default = mySaga;