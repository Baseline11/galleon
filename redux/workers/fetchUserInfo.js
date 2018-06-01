'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('../types');

var _userInfoOverview = require('../../helpers/mocks/api/userInfoOverview');

var _userInfoOverview2 = _interopRequireDefault(_userInfoOverview);

var _userInfoDashboard = require('../../helpers/mocks/api/userInfoDashboard');

var _userInfoDashboard2 = _interopRequireDefault(_userInfoDashboard);

var _userInfoInsurance = require('../../helpers/mocks/api/userInfoInsurance');

var _userInfoInsurance2 = _interopRequireDefault(_userInfoInsurance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUserInfo);

function fetchUserInfo() {
  var overview, dashboard, insurance;
  return regeneratorRuntime.wrap(function fetchUserInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          overview = _userInfoOverview2.default;
          dashboard = _userInfoDashboard2.default;
          insurance = _userInfoInsurance2.default;
          _context.next = 6;
          return (0, _effects.put)({
            type: _types.USER_INFO_FETCH_SUCCESS,
            payload: { overview: overview, dashboard: dashboard, insurance: insurance }
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)({ type: _types.USER_INFO_FETCH_FAILURE, error: _context.t0 });

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

exports.default = fetchUserInfo;