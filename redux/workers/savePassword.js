'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('../types');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(savePassword);

function savePassword() {
  return regeneratorRuntime.wrap(function savePassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)({ type: _types.PASSWORD_SAVE_SUCCESS });

        case 3:
          _context.next = 5;
          return (0, _effects.put)({
            type: _types.APP_MESSAGE_SHOW,
            payload: {
              type: 'success',
              message: 'Password changed'
            }
          });

        case 5:
          _context.next = 13;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context['catch'](0);
          _context.next = 11;
          return (0, _effects.put)({ type: _types.PASSWORD_SAVE_FAILURE, error: _context.t0 });

        case 11:
          _context.next = 13;
          return (0, _effects.put)({
            type: _types.APP_MESSAGE_SHOW,
            payload: {
              type: 'error',
              message: 'Something is wrong'
            }
          });

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 7]]);
}

exports.default = savePassword;