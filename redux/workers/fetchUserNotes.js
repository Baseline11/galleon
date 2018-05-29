'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('commonRedux/types');

var _userNotes = require('helpers/mocks/api/userNotes');

var _userNotes2 = _interopRequireDefault(_userNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUserNotes);

function fetchUserNotes() {
  return regeneratorRuntime.wrap(function fetchUserNotes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)({
            type: _types.NOTES_FETCH_SUCCESS,
            payload: _userNotes2.default
          });

        case 3:
          _context.next = 9;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context['catch'](0);
          _context.next = 9;
          return (0, _effects.put)({ type: _types.NOTES_FETCH_FAILURE, payload: _context.t0 });

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 5]]);
}

exports.default = fetchUserNotes;