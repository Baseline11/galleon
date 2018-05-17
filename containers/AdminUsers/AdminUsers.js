'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/AdminUsers/AdminUsers.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _laelia = require('laelia');

var _actions = require('./actions');

var _UserList = require('./components/UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _SearchResultTitle = require('./components/SearchResultTitle');

var _SearchResultTitle2 = _interopRequireDefault(_SearchResultTitle);

var _AddUserButton = require('./components/AddUserButton');

var _AddUserButton2 = _interopRequireDefault(_AddUserButton);

var _userRoles = require('utils/config/userRoles');

var _userRoles2 = _interopRequireDefault(_userRoles);

var _filterCollectionByKey = require('helpers/filterCollectionByKey');

var _filterCollectionByKey2 = _interopRequireDefault(_filterCollectionByKey);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return _extends({}, state.adminUsers);
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      fetchAdminUsers: _actions.fetchAdminUsers,
      sortAdminUsers: _actions.sortAdminUsers,
      filterAdminUsers: _actions.filterAdminUsers,
      updateAdminUserStatus: _actions.updateAdminUserStatus,
      reinviteAdminUser: _actions.reinviteAdminUser
    }, dispatch)
  };
}

var AdminUsers = function (_Component) {
  _inherits(AdminUsers, _Component);

  function AdminUsers() {
    _classCallCheck(this, AdminUsers);

    return _possibleConstructorReturn(this, (AdminUsers.__proto__ || Object.getPrototypeOf(AdminUsers)).apply(this, arguments));
  }

  _createClass(AdminUsers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchAdminUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          adminUsers = _props.adminUsers,
          sort = _props.sort,
          filter = _props.filter,
          actionCreators = _props.actionCreators;


      var roleFilterValues = [{ label: 'All', value: '' }].concat(_toConsumableArray(_userRoles2.default.map(function (role) {
        return { label: role.nickname, value: role.id };
      })));

      var statusFilterValues = [{ label: 'Active', value: '1' }, { label: 'Invited', value: '2' }, { label: 'Expired', value: '3' }, { label: 'Canceled', value: '4' }, { label: 'Suspended', value: '5' }];

      var filteredAdminUserList = void 0;
      filteredAdminUserList = filter.filterByRole ? adminUsers.filter(function (item) {
        return item.roles.find(function (role) {
          return role.id === filter.filterByRole;
        });
      }) : adminUsers;
      filteredAdminUserList = (0, _filterCollectionByKey2.default)(filteredAdminUserList, 'status', filter.filterByStatus);

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        },
        _react2.default.createElement(_SearchResultTitle2.default, { data: adminUsers.length, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }),
        _react2.default.createElement(_AddUserButton2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.filterWrapper, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          },
          _react2.default.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            'User role',
            _react2.default.createElement(_laelia.Select, {
              name: 'filterByRole',
              options: roleFilterValues,
              defaultValue: filter.filterByRole,
              handleOnChange: function handleOnChange(e) {
                return _this2.props.actionCreators.filterAdminUsers({
                  filterBy: 'filterByRole',
                  filterValue: e.target.value
                });
              },
              wrapperStyleOverride: _styles2.default.filterSelect,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            })
          ),
          _react2.default.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            },
            'Status',
            _react2.default.createElement(_laelia.Select, {
              name: 'filterByStatus',
              options: statusFilterValues,
              defaultValue: filter.filterByStatus,
              handleOnChange: function handleOnChange(e) {
                return _this2.props.actionCreators.filterAdminUsers({
                  filterBy: 'filterByStatus',
                  filterValue: e.target.value
                });
              },
              wrapperStyleOverride: _styles2.default.filterSelect,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            })
          )
        ),
        _react2.default.createElement(_UserList2.default, {
          data: filteredAdminUserList,
          sortOptions: sort,
          updateStatusAction: actionCreators.updateAdminUserStatus,
          reinviteUserAction: actionCreators.reinviteAdminUser,
          handleOnSort: actionCreators.sortAdminUsers,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        })
      );
    }
  }]);

  return AdminUsers;
}(_react.Component);

AdminUsers.propTypes = {
  actionCreators: _propTypes2.default.object,
  sort: _propTypes2.default.object,
  filter: _propTypes2.default.object,
  adminUsers: _propTypes2.default.array
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminUsers);