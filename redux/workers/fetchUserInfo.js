'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('commonRedux/types');

var _userInfoOverview = require('helpers/mocks/api/userInfoOverview');

var _userInfoOverview2 = _interopRequireDefault(_userInfoOverview);

var _userInfoInsurance = require('helpers/mocks/api/userInfoInsurance');

var _userInfoInsurance2 = _interopRequireDefault(_userInfoInsurance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUserInfo);

function fetchUserInfo() {
  var overview, insurance;
  return regeneratorRuntime.wrap(function fetchUserInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          overview = _userInfoOverview2.default;
          insurance = _userInfoInsurance2.default;
          _context.next = 5;
          return (0, _effects.put)({
            type: _types.USER_INFO_FETCH_SUCCESS,
            payload: { overview: overview, insurance: insurance }
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context['catch'](0);
          _context.next = 11;
          return (0, _effects.put)({ type: _types.USER_INFO_FETCH_FAILURE, error: _context.t0 });

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 7]]);
}

exports.default = fetchUserInfo;