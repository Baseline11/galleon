'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('../types');

var _userTripHistory = require('../../helpers/mocks/api/userTripHistory');

var _userTripHistory2 = _interopRequireDefault(_userTripHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUserTripHistory);

function fetchUserTripHistory() {
  var data;
  return regeneratorRuntime.wrap(function fetchUserTripHistory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = _userTripHistory2.default;
          _context.next = 4;
          return (0, _effects.put)({
            type: _types.TRIPHISTORY_FETCH_SUCCESS,
            payload: data
          });

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          _context.next = 10;
          return (0, _effects.put)({ type: _types.TRIPHISTORY_FETCH_FAILURE, payload: _context.t0 });

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 6]]);
}

exports.default = fetchUserTripHistory;