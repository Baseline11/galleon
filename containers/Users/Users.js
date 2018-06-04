'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/Users/Users.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Progress = require('material-ui/Progress');

var _UsersList = require('./components/UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _users = require('../../redux/actions/users');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return _extends({}, state.users);
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      fetchUsers: _users.fetchUsers,
      sortUsers: _users.sortUsers
    }, dispatch)
  };
}

var Users = function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fetching = _props.fetching,
          users = _props.users,
          sort = _props.sort,
          actionCreators = _props.actionCreators;


      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        fetching ? _react2.default.createElement(_Progress.CircularProgress, { size: 50, style: _styles2.default.circularProgress, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }) : _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          _react2.default.createElement(
            'h2',
            { style: _styles2.default.usersTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            'Users'
          ),
          _react2.default.createElement(_UsersList2.default, {
            data: users,
            sortOptions: sort,
            handleOnSort: actionCreators.sortUsers,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        )
      );
    }
  }]);

  return Users;
}(_react.Component);

Users.propTypes = {
  actionCreators: _propTypes2.default.object,
  sort: _propTypes2.default.object,
  fetching: _propTypes2.default.bool,
  users: _propTypes2.default.array
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Users);