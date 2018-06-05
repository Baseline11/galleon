'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserDashboard/UserDashboard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _laelia = require('laelia');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserDashboard = function (_Component) {
  _inherits(UserDashboard, _Component);

  function UserDashboard() {
    _classCallCheck(this, UserDashboard);

    return _possibleConstructorReturn(this, (UserDashboard.__proto__ || Object.getPrototypeOf(UserDashboard)).apply(this, arguments));
  }

  _createClass(UserDashboard, [{
    key: 'rendeProfileContainer',
    value: function rendeProfileContainer(image, text, counter, containerStyleOverride, counterIconStyleOverride) {
      var styleContainer = containerStyleOverride || _styles2.default.profilePictureOverride;
      var counterStyleContainer = counterIconStyleOverride || _styles2.default.counterIconStyleOverride;

      return _react2.default.createElement(_laelia.ProfilePictureContainer, {
        image: image.value,
        counter: counter.value,
        text: text.charAt(0),
        containerStyleOverride: styleContainer,
        counterIconStyleOverride: counterStyleContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    }
  }, {
    key: 'rendeProfileImage',
    value: function rendeProfileImage(image, text, containerStyleOverride, imageStyleOverride) {
      var styleContainer = containerStyleOverride || _styles2.default.profilePictureOverride;

      return _react2.default.createElement(_laelia.ProfilePicture, {
        image: image.value,
        text: text.charAt(0),
        containerStyleOverride: styleContainer,
        imageStyleOverride: imageStyleOverride,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      });
    }
  }, {
    key: 'renderCounter',
    value: function renderCounter(counter, containerStyleOverride) {
      var styleContainer = containerStyleOverride || _styles2.default.counterIconStyle;

      return _react2.default.createElement(_laelia.CounterIcon, {
        counter: counter.value,
        containerStyleOverride: styleContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      });
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(text) {
      return _react2.default.createElement(
        'h2',
        { style: _styles2.default.titleStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        text
      );
    }
  }, {
    key: 'renderRankings',
    value: function renderRankings(items) {
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.statisticsContainerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        items.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { style: _styles2.default.statisticsItemStyle, key: 'statisticsInfo-' + index, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            _react2.default.createElement(
              'div',
              { style: _styles2.default.statisticsValueStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              item.value
            ),
            _react2.default.createElement(
              'div',
              { style: _styles2.default.statisticsLabelStyles, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              item.label
            )
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          profileImage = _props.profileImage,
          title = _props.title,
          statistics = _props.statistics,
          rank = _props.rank,
          containerStyleOverride = _props.containerStyleOverride,
          profilePictureOverride = _props.profilePictureOverride,
          counterIconStyleOverride = _props.counterIconStyleOverride,
          type = _props.type;


      var typeContainer = type || 'profileContainer';

      return _react2.default.createElement(
        'div',
        { style: [_styles2.default.dashboardContainerStyle, containerStyleOverride], __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        typeContainer === 'profileContainer' && this.rendeProfileContainer(profileImage, title.value, rank, profilePictureOverride, counterIconStyleOverride),
        typeContainer === 'profileImage' && this.rendeProfileImage(profileImage, title.value, profilePictureOverride, counterIconStyleOverride),
        typeContainer === 'counter' && this.renderCounter(rank, profilePictureOverride),
        title && this.renderTitle(title.value),
        statistics && this.renderRankings(statistics)
      );
    }
  }]);

  return UserDashboard;
}(_react.Component);

UserDashboard.propTypes = {
  profileImage: _propTypes2.default.object,
  type: _propTypes2.default.string,
  rank: _propTypes2.default.object,
  statistics: _propTypes2.default.array,
  title: _propTypes2.default.object,
  containerStyleOverride: _propTypes2.default.object,
  profilePictureOverride: _propTypes2.default.object,
  counterIconStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(UserDashboard);