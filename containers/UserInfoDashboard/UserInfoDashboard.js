'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserInfoDashboard/UserInfoDashboard.js';

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

var _userInfo = require('commonRedux/actions//userInfo');

var _UserDashboard = require('../UserDashboard');

var _UserDashboard2 = _interopRequireDefault(_UserDashboard);

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

var UserInfoDashboard = function (_Component) {
  _inherits(UserInfoDashboard, _Component);

  function UserInfoDashboard() {
    _classCallCheck(this, UserInfoDashboard);

    return _possibleConstructorReturn(this, (UserInfoDashboard.__proto__ || Object.getPrototypeOf(UserInfoDashboard)).apply(this, arguments));
  }

  _createClass(UserInfoDashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchUserInfo();
    }
  }, {
    key: 'renderGeneralInformation',
    value: function renderGeneralInformation(items) {
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.generalInfoItemsContainerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        items.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { style: _styles2.default.generalInfoItemStyle, key: 'generalInfo-' + index, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            _react2.default.createElement(
              'div',
              { style: _styles2.default.generalInfoLabelStyles, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              item.label
            ),
            _react2.default.createElement(
              'div',
              { style: _styles2.default.generalInfoValueStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              item.value
            )
          );
        })
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item, extraInfo) {
      var extraInfoContent = extraInfo ? _react2.default.createElement(
        'span',
        { style: _styles2.default.rankingItemExtraInfoStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        '(',
        extraInfo.value,
        ')'
      ) : '';

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.rankItemContainerStyle, key: 'generalInfo-' + item.label, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.rankItemLabelStyles, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          item.label,
          ' ',
          extraInfoContent
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.rankItemValueStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          item.value
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dashboard = _props.dashboard,
          containerStyleOverride = _props.containerStyleOverride;

      var itemsGeneralInformation = (0, _lodash.filter)(dashboard, ['type', 'general']);
      var itemsStatistics = (0, _lodash.filter)(dashboard, ['type', 'statistics']);
      var coinBalance = (0, _lodash.filter)(dashboard, ['label', 'Coin Balance'])[0];
      var estimatedDiscount = (0, _lodash.filter)(dashboard, ['label', 'Estimated Discount'])[0];
      var rank = (0, _lodash.filter)(dashboard, ['label', 'Rank'])[0];
      var rankTime = (0, _lodash.filter)(dashboard, ['label', 'Rank remaining time'])[0];
      var profileImage = (0, _lodash.filter)(dashboard, ['type', 'image'])[0];
      var userName = (0, _lodash.filter)(dashboard, ['label', 'Name'])[0];

      return _react2.default.createElement(
        'div',
        { style: [_styles2.default.containerStyle, containerStyleOverride], __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.generalInfoContainerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          itemsGeneralInformation && this.renderGeneralInformation(itemsGeneralInformation)
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.dashboardContainerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.profilePictureContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            profileImage && _react2.default.createElement(_UserDashboard2.default, {
              profileImage: profileImage,
              title: userName,
              statistics: itemsStatistics,
              rank: rank,
              containerStyleOverride: _styles2.default.dashboardContainerStyleOverride,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.rankingContainerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          coinBalance && this.renderItem(coinBalance),
          estimatedDiscount && this.renderItem(estimatedDiscount),
          rank && this.renderItem(rank, rankTime)
        )
      );
    }
  }]);

  return UserInfoDashboard;
}(_react.Component);

UserInfoDashboard.propTypes = {
  actionCreators: _propTypes2.default.object,
  dashboard: _propTypes2.default.array,
  containerStyleOverride: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(UserInfoDashboard));