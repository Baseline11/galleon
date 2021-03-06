'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserInfoInsurance/UserInfoInsurance.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _lodash = require('lodash');

var _laelia = require('laelia');

var _userInfo = require('../../redux/actions/userInfo');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return _extends({}, state.userInfo);
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      fetchUserInfo: _userInfo.fetchUserInfo
    }, dispatch)
  };
}

var UserInfoOverview = function (_Component) {
  _inherits(UserInfoOverview, _Component);

  function UserInfoOverview() {
    _classCallCheck(this, UserInfoOverview);

    return _possibleConstructorReturn(this, (UserInfoOverview.__proto__ || Object.getPrototypeOf(UserInfoOverview)).apply(this, arguments));
  }

  _createClass(UserInfoOverview, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchUserInfo();
    }
  }, {
    key: 'renderInsurerInfor',
    value: function renderInsurerInfor(items) {
      return items.map(function (item) {
        return _react2.default.createElement(
          'div',
          { key: item.label, style: _styles2.default.insererItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.insurerLabelStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            item.label
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.insurerValueStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            item.value
          )
        );
      });
    }
  }, {
    key: 'renderItems',
    value: function renderItems(items) {
      return items.map(function (item) {
        return _react2.default.createElement(
          'div',
          { key: item.label, style: _styles2.default.itemInfoContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.labelStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            item.label
          ),
          _react2.default.createElement(_laelia.TextInput, { wrapperStyleOverride: _styles2.default.textInputStyle, defaultValue: item.value, disabled: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          insurance = _props.insurance,
          containerStyleOverride = _props.containerStyleOverride;

      var insurerInfo = (0, _lodash.filter)(insurance, ['type', 'insurer']);
      var carInfo = (0, _lodash.filter)(insurance, ['type', 'carInfo']);

      return _react2.default.createElement(
        'div',
        { style: containerStyleOverride, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.titleStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          'Current insurer entered by user'
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.containerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.insurerInfoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            insurerInfo && this.renderInsurerInfor(insurerInfo)
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.carInfoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            carInfo && this.renderItems(carInfo)
          )
        )
      );
    }
  }]);

  return UserInfoOverview;
}(_react.Component);

UserInfoOverview.propTypes = {
  actionCreators: _propTypes2.default.object,
  containerStyleOverride: _propTypes2.default.object,
  insurance: _propTypes2.default.array
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(UserInfoOverview));