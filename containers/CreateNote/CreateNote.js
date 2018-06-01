'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/CreateNote/CreateNote.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _materialUi = require('material-ui');

var _styles = require('material-ui/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _CreateNoteForm = require('./components/CreateNoteForm');

var _CreateNoteForm2 = _interopRequireDefault(_CreateNoteForm);

var _user = require('../../redux/actions/user');

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
      saveNote: _user.saveNote
    }, dispatch)
  };
}

var CreateNote = function (_Component) {
  _inherits(CreateNote, _Component);

  function CreateNote() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateNote);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateNote.__proto__ || Object.getPrototypeOf(CreateNote)).call.apply(_ref, [this].concat(args))), _this), _this.handleSaveNote = function () {
      return _this.props.actionCreators.saveNote();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateNote, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        _materialUi.Paper,
        { className: classes.root, elevation: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        _react2.default.createElement(_CreateNoteForm2.default, { onSubmit: this.handleSaveNote, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        })
      );
    }
  }]);

  return CreateNote;
}(_react.Component);

CreateNote.propTypes = {
  actionCreators: _propTypes2.default.object,
  classes: _propTypes2.default.object
};

CreateNote = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateNote);

exports.default = (0, _styles.withStyles)(_styles3.default)(CreateNote);