'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/Navigation/Navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _laelia = require('laelia');

var _application = require('../../redux/actions/application');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mapStateToProps(state) {
  return {
    isNavOpen: state.application.isNavOpen,
    navigationItems: state.application.navigationItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: (0, _redux.bindActionCreators)({
      fetchNavigationItems: _application.fetchNavigationItems,
      openNavigation: _application.openNavigation,
      closeNavigation: _application.closeNavigation
    }, dispatch)
  };
}

var NavigationWrapper = function (_Component) {
  _inherits(NavigationWrapper, _Component);

  function NavigationWrapper() {
    _classCallCheck(this, NavigationWrapper);

    return _possibleConstructorReturn(this, (NavigationWrapper.__proto__ || Object.getPrototypeOf(NavigationWrapper)).apply(this, arguments));
  }

  _createClass(NavigationWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchNavigationItems();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          navigationItems = _props.navigationItems,
          activePage = _props.activePage,
          logoUrl = _props.logoUrl,
          isNavOpen = _props.isNavOpen,
          actionCreators = _props.actionCreators;


      return _react2.default.createElement(
        _react.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        _react2.default.createElement(_laelia.Navigation, {
          data: navigationItems,
          activePage: activePage,
          logoUrl: logoUrl,
          isCollapsed: !isNavOpen,
          handleOnClose: function handleOnClose() {
            return actionCreators.closeNavigation();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }),
        _react2.default.createElement(_laelia.NavigationCollapsed, {
          data: navigationItems,
          activePage: activePage,
          handleOnClick: function handleOnClick() {
            return actionCreators.openNavigation();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        })
      );
    }
  }]);

  return NavigationWrapper;
}(_react.Component);

NavigationWrapper.propTypes = {
  navigationItems: _propTypes2.default.array.isRequired,
  isNavOpen: _propTypes2.default.bool,
  activePage: _propTypes2.default.object,
  logoUrl: _propTypes2.default.string,
  actionCreators: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavigationWrapper);