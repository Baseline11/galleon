'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = require('redux-saga/effects');

var _types = require('commonRedux/types');

var _formatAdminUsers = require('helpers/formatAdminUsers');

var _formatAdminUsers2 = _interopRequireDefault(_formatAdminUsers);

var _adminUser = require('helpers/mocks/api/adminUser');

var _adminUser2 = _interopRequireDefault(_adminUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchAdminUser);

function fetchAdminUser() {
  var data;
  return regeneratorRuntime.wrap(function fetchAdminUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          data = _adminUser2.default;
          _context.next = 4;
          return (0, _effects.put)({
            type: _types.ADMINUSER_FETCH_SUCCESS,
            payload: (0, _formatAdminUsers2.default)([data])
          });

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          _context.next = 10;
          return (0, _effects.put)({ type: _types.ADMINUSER_FETCH_FAILURE, error: _context.t0 });

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 6]]);
}

exports.default = fetchAdminUser;