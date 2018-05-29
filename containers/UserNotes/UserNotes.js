'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserNotes/UserNotes.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Progress = require('material-ui/Progress');

var _CreateNote = require('../CreateNote');

var _CreateNote2 = _interopRequireDefault(_CreateNote);

var _NoteList = require('./components/NoteList');

var _NoteList2 = _interopRequireDefault(_NoteList);

var _user = require('commonRedux/actions/user');

var _styles = require('./styles');

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
      fetchUserNotes: _user.fetchUserNotes
    }, dispatch)
  };
}

var UserNotes = function (_Component) {
  _inherits(UserNotes, _Component);

  function UserNotes() {
    _classCallCheck(this, UserNotes);

    return _possibleConstructorReturn(this, (UserNotes.__proto__ || Object.getPrototypeOf(UserNotes)).apply(this, arguments));
  }

  _createClass(UserNotes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.actionCreators.fetchUserNotes();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          fetching = _props.fetching,
          notes = _props.notes;


      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        fetching ? _react2.default.createElement(_Progress.CircularProgress, { size: 50, style: _styles2.default.circularProgress, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }) : _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          _react2.default.createElement(_CreateNote2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }),
          _react2.default.createElement(_NoteList2.default, { data: notes, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        )
      );
    }
  }]);

  return UserNotes;
}(_react.Component);

UserNotes.propTypes = {
  actionCreators: _propTypes2.default.object,
  fetching: _propTypes2.default.bool,
  notes: _propTypes2.default.array
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserNotes);