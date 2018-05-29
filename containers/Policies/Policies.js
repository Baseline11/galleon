'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/Policies/Policies.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Progress = require('material-ui/Progress');

var _lodash = require('lodash');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _user = require('commonRedux/actions/user');

var _Policy = require('../Policy');

var _Policy2 = _interopRequireDefault(_Policy);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _SvgIcon = require('components/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _utils = require('utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return _extends({}, state.user);
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      fetchUserPolicies: _user.fetchUserPolicies,
      sortPolicy: _user.sortPolicy
    }, dispatch)
  };
}

var Policies = function (_Component) {
  _inherits(Policies, _Component);

  function Policies() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Policies);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Policies.__proto__ || Object.getPrototypeOf(Policies)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activePolicy: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Policies, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchUserPolicies();
    }
  }, {
    key: 'renderPolicy',
    value: function renderPolicy(policy) {
      if (this.state.activePolicy === policy) {
        this.setState({ activePolicy: 0 });
      } else {
        this.setState({ activePolicy: policy });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          policies = _props.policies,
          fetching = _props.fetching,
          wrapperStyleOverride = _props.wrapperStyleOverride;

      var policiesItems = (0, _lodash.uniq)((0, _lodash.map)(policies, 'policy'));

      return _react2.default.createElement(
        'div',
        { style: [_styles2.default.containerStyle, wrapperStyleOverride], __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        fetching ? _react2.default.createElement(_Progress.CircularProgress, { size: 50, style: _styles2.default.circularProgress, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }) : _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          policiesItems.map(function (policy) {
            return _react2.default.createElement(
              'div',
              { key: policy, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              _react2.default.createElement(
                'div',
                { style: _styles2.default.policyContainer, onClick: function onClick() {
                    return _this2.renderPolicy(policy);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                _react2.default.createElement(
                  'span',
                  { style: _styles2.default.svgIconStyle, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  _react2.default.createElement(_SvgIcon2.default, {
                    icon: _this2.state.activePolicy === policy ? 'minusIcon' : 'plusIcon',
                    width: 25,
                    height: 25,
                    fill: _utils.colors.dustyGray,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  })
                ),
                'Policy ' + policy
              ),
              _react2.default.createElement(
                'div',
                { style: [_styles2.default.policyInfoContainer, _this2.state.activePolicy === policy && _styles2.default.showPolicyInfoContainer],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                },
                _react2.default.createElement(_Policy2.default, { policies: policies, policy: policy, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                })
              )
            );
          })
        )
      );
    }
  }]);

  return Policies;
}(_react.Component);

Policies.propTypes = {
  actionCreators: _propTypes2.default.object,
  sort: _propTypes2.default.object,
  fetching: _propTypes2.default.bool,
  policies: _propTypes2.default.array,
  wrapperStyleOverride: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Policies));