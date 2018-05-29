'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserProfile/UserProfile.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _laelia = require('laelia');

var _UserInfoDashboard = require('../UserInfoDashboard');

var _UserInfoDashboard2 = _interopRequireDefault(_UserInfoDashboard);

var _UserInfoOverview = require('../UserInfoOverview');

var _UserInfoOverview2 = _interopRequireDefault(_UserInfoOverview);

var _UserTripHistory = require('../UserTripHistory');

var _UserTripHistory2 = _interopRequireDefault(_UserTripHistory);

var _UserCommunications = require('../UserCommunications');

var _UserCommunications2 = _interopRequireDefault(_UserCommunications);

var _UserNotes = require('../UserNotes');

var _UserNotes2 = _interopRequireDefault(_UserNotes);

var _Policies = require('../Policies');

var _Policies2 = _interopRequireDefault(_Policies);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _userProfileTabs = require('utils/config/userProfileTabs');

var _userProfileTabs2 = _interopRequireDefault(_userProfileTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfile = function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserProfile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedTab: 'overview'
    }, _this.handleChangeTab = function (tab) {
      return _this.setState({ selectedTab: tab });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserProfile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selectedTab = this.state.selectedTab;


      return _react2.default.createElement(
        'div',
        { style: _styles2.default.contentWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.headerWrapper, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.headerInnerWrapper, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            _react2.default.createElement(_UserInfoDashboard2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.tabsWrapper, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          _react2.default.createElement(_laelia.Tabs, {
            tabs: _userProfileTabs2.default,
            selectedTab: selectedTab,
            handleOnClick: function handleOnClick(tab) {
              return _this2.handleChangeTab(tab);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.tabContentWrapper, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          selectedTab === 'overview' && _react2.default.createElement(
            'div',
            { style: _styles2.default.infoOverviewContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(_UserInfoOverview2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            })
          ),
          selectedTab === 'tripHistory' && _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(_UserTripHistory2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            })
          ),
          selectedTab === 'communications' && _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            _react2.default.createElement(_UserCommunications2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            })
          ),
          selectedTab === 'policies' && _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            _react2.default.createElement(_Policies2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            })
          ),
          selectedTab === 'notes' && _react2.default.createElement(
            'div',
            { style: _styles2.default.notesContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            _react2.default.createElement(_UserNotes2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            })
          )
        )
      );
    }
  }]);

  return UserProfile;
}(_react.Component);

exports.default = UserProfile;