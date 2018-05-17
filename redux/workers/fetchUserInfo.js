'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('commonRedux/types');

var _userInfoOverview = require('helpers/mocks/api/userInfoOverview');

var _userInfoOverview2 = _interopRequireDefault(_userInfoOverview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUserInfo);

function fetchUserInfo() {
  var data;
  return regeneratorRuntime.wrap(function fetchUserInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = _userInfoOverview2.default;
          _context.next = 4;
          return (0, _effects.put)({
            type: _types.USER_INFO_FETCH_SUCCESS,
            payload: data
          });

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          _context.next = 10;
          return (0, _effects.put)({ type: _types.USER_INFO_FETCH_FAILURE, error: _context.t0 });

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 6]]);
}

exports.default = fetchUserInfo;