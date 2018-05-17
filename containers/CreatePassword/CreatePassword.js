'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/CreatePassword/CreatePassword.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _PasswordForm = require('./PasswordForm');

var _PasswordForm2 = _interopRequireDefault(_PasswordForm);

var _newUser = require('commonRedux/actions/newUser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return _extends({}, state.newPassword);
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      savePassword: _newUser.savePassword,
      setUserInfo: _newUser.setUserInfo
    }, dispatch)
  };
}

var CreatePassword = function (_Component) {
  _inherits(CreatePassword, _Component);

  function CreatePassword() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreatePassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreatePassword.__proto__ || Object.getPrototypeOf(CreatePassword)).call.apply(_ref, [this].concat(args))), _this), _this.handleSaveEdit = function (values) {
      return _this.props.actionCreators.savePassword(values.password);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreatePassword, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.setUserInfo({
        userID: this.props.userID,
        token: this.props.token,
        email: this.props.email
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        _react2.default.createElement(_PasswordForm2.default, { onSubmit: this.handleSaveEdit, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        })
      );
    }
  }]);

  return CreatePassword;
}(_react.Component);

CreatePassword.propTypes = {
  actionCreators: _propTypes2.default.object,
  userID: _propTypes2.default.number,
  token: _propTypes2.default.string,
  email: _propTypes2.default.string,
  saved: _propTypes2.default.bool
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreatePassword);