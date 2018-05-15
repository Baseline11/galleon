'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('commonRedux/types');

var _fetchAdminUsers = require('./workers/fetchAdminUsers');

var _fetchAdminUsers2 = _interopRequireDefault(_fetchAdminUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(mySaga);

function mySaga() {
  return regeneratorRuntime.wrap(function mySaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeLatest)(_types.ADMINUSERS_FETCH, _fetchAdminUsers2.default);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

exports.default = mySaga;