'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/Policy/Policy.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Progress = require('material-ui/Progress');

var _lodash = require('lodash');

var _laelia = require('laelia');

var _PoliciesList = require('./components/PoliciesList');

var _PoliciesList2 = _interopRequireDefault(_PoliciesList);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Policy = function (_Component) {
  _inherits(Policy, _Component);

  function Policy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Policy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Policy.__proto__ || Object.getPrototypeOf(Policy)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activePolicy: (0, _lodash.uniq)((0, _lodash.map)((0, _lodash.filter)(_this.props.policies, ['policy', _this.props.policy]), 'tab'))[0],
      tabs: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Policy, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tabs = (0, _lodash.uniq)((0, _lodash.map)((0, _lodash.filter)(this.props.policies, ['policy', this.props.policy]), 'tab'));
      var tabItems = [];
      tabs.forEach(function (tab) {
        tabItems.push({ value: tab, label: tab });
      });

      if (!this.state.tabs.length) {
        /* eslint-disable react/no-did-mount-set-state */
        this.setState({ tabs: tabItems });
      }
    }
  }, {
    key: 'renderPolicy',
    value: function renderPolicy(tabs) {
      var _this2 = this;

      var policies = this.props.policies;


      return tabs.map(function (item, idx) {
        var items = (0, _lodash.filter)((0, _lodash.filter)(policies, ['policy', _this2.props.policy]), ['tab', item.value]);

        if (_this2.state.activePolicy === item.value) {
          return _react2.default.createElement(_PoliciesList2.default, {
            data: items,
            key: 'tabL-' + idx,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          });
        }

        return false;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          fetching = _props.fetching,
          wrapperStyleOverride = _props.wrapperStyleOverride;


      return _react2.default.createElement(
        'div',
        { style: [_styles2.default.containerStyle, wrapperStyleOverride], __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        fetching ? _react2.default.createElement(_Progress.CircularProgress, { size: 50, style: _styles2.default.circularProgress, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }) : _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          _react2.default.createElement(_laelia.Tabs, {
            tabs: this.state.tabs,
            type: 'secondaryStyle',
            handleOnClick: function handleOnClick(tab) {
              return _this3.setState({ activePolicy: tab });
            },
            selectedTab: this.state.activePolicy,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }),
          this.state.tabs && this.renderPolicy(this.state.tabs)
        )
      );
    }
  }]);

  return Policy;
}(_react.Component);

Policy.propTypes = {
  actionCreators: _propTypes2.default.object,
  fetching: _propTypes2.default.bool,
  policies: _propTypes2.default.array,
  wrapperStyleOverride: _propTypes2.default.object,
  policy: _propTypes2.default.number
};

exports.default = Policy;