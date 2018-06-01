'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/EditUser/EditUser.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Progress = require('material-ui/Progress');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _EditForm = require('./EditForm');

var _EditForm2 = _interopRequireDefault(_EditForm);

var _adminUser = require('../../redux/actions/adminUser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return _extends({}, state.adminUser);
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      fetchAdminUser: _adminUser.fetchAdminUser,
      activateAdminRole: _adminUser.activateAdminRole,
      saveAdminUser: _adminUser.saveAdminUser
    }, dispatch)
  };
}

var EditUser = function (_Component) {
  _inherits(EditUser, _Component);

  function EditUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditUser.__proto__ || Object.getPrototypeOf(EditUser)).call.apply(_ref, [this].concat(args))), _this), _this.handleSaveEdit = function () {
      return _this.props.actionCreators.saveAdminUser('editUser');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditUser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchAdminUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var fetching = this.props.fetching;


      return _react2.default.createElement(
        'div',
        { style: _styles2.default.contentWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        fetching ? _react2.default.createElement(_Progress.CircularProgress, { size: 50, style: _styles2.default.circularProgress, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }) : _react2.default.createElement(_EditForm2.default, { onSubmit: this.handleSaveEdit, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        })
      );
    }
  }]);

  return EditUser;
}(_react.Component);

EditUser.propTypes = {
  adminUser: _propTypes2.default.object,
  fetching: _propTypes2.default.bool,
  actionCreators: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditUser);