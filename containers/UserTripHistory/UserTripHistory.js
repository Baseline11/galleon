'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserTripHistory/UserTripHistory.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import {Pagination} from 'laelia';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Progress = require('material-ui/Progress');

var _TripHistoryList = require('./components/TripHistoryList');

var _TripHistoryList2 = _interopRequireDefault(_TripHistoryList);

var _user = require('../../redux/actions/user');

var _styles = require('../EditUser/styles');

var _styles2 = _interopRequireDefault(_styles);

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
      fetchUserTripHistory: _user.fetchUserTripHistory,
      sortTripHistory: _user.sortTripHistory,
      setLimitTripHistory: _user.setLimitTripHistory,
      setOffsetTripHistory: _user.setOffsetTripHistory
    }, dispatch)
  };
}

var UserTripHistory = function (_Component) {
  _inherits(UserTripHistory, _Component);

  function UserTripHistory() {
    _classCallCheck(this, UserTripHistory);

    return _possibleConstructorReturn(this, (UserTripHistory.__proto__ || Object.getPrototypeOf(UserTripHistory)).apply(this, arguments));
  }

  _createClass(UserTripHistory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchUserTripHistory();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fetching = _props.fetching,
          tripHistory = _props.tripHistory,
          sort = _props.sort,
          actionCreators = _props.actionCreators;


      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        fetching ? _react2.default.createElement(_Progress.CircularProgress, { size: 50, style: _styles2.default.circularProgress, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }) : _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          _react2.default.createElement(_TripHistoryList2.default, {
            data: tripHistory,
            sortOptions: sort,
            handleOnSort: actionCreators.sortTripHistory,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          })
        )
      );
    }
  }]);

  return UserTripHistory;
}(_react.Component);

UserTripHistory.propTypes = {
  actionCreators: _propTypes2.default.object,
  sort: _propTypes2.default.object,
  fetching: _propTypes2.default.bool,
  tripHistory: _propTypes2.default.array
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserTripHistory);