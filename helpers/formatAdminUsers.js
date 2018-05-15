'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _userRoles = require('utils/config/userRoles');

var _userRoles2 = _interopRequireDefault(_userRoles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (response) {
  var formattedResponse = [];
  var formatRoles = function formatRoles(roles) {
    return roles.map(function (role) {
      return (0, _lodash.find)(_userRoles2.default, ['id', role]);
    });
  };
  var removeBaselineRoles = function removeBaselineRoles(roles) {
    var role1Index = roles.indexOf('1');
    var role2Index = roles.indexOf('2');

    if (role1Index !== -1) {
      roles.splice(role1Index, 1);
    }

    if (role2Index !== -1) {
      roles.splice(role2Index, 1);
    }

    return roles;
  };

  response.map(function (obj) {
    return formattedResponse.push({
      id: obj.AdminUser.id,
      name: obj.AdminUser.first_name + ' ' + obj.AdminUser.last_name,
      firstName: obj.AdminUser.first_name,
      lastName: obj.AdminUser.last_name,
      email: obj.AdminUser.email,
      created: obj.AdminUser.created,
      roles: formatRoles(removeBaselineRoles(obj.Group)),
      status: obj.AdminUser.user_status_id
    });
  });

  return formattedResponse;
};