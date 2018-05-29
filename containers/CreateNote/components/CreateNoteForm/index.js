'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/CreateNote/components/CreateNoteForm/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

var _laelia = require('laelia');

var _styles = require('../../styles.js');

var _styles2 = _interopRequireDefault(_styles);

var _validations = require('./validations');

var _validations2 = _interopRequireDefault(_validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable-next-line react/prefer-stateless-function */
var CreateNoteForm = function (_Component) {
  _inherits(CreateNoteForm, _Component);

  function CreateNoteForm() {
    _classCallCheck(this, CreateNoteForm);

    return _possibleConstructorReturn(this, (CreateNoteForm.__proto__ || Object.getPrototypeOf(CreateNoteForm)).apply(this, arguments));
  }

  _createClass(CreateNoteForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          dirty = _props.dirty;


      return _react2.default.createElement(
        'form',
        { style: _styles2.default.formWrapper, onSubmit: handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        _react2.default.createElement(_reduxForm.Field, {
          style: _styles2.default.formTextarea,
          name: 'note',
          component: 'textarea',
          placeholder: 'Take a note...',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        dirty && _react2.default.createElement(_laelia.ActionButton, {
          text: 'Invite',
          action: function action() {
            return handleSubmit();
          },
          styleOverride: _styles2.default.actionButton,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        })
      );
    }
  }]);

  return CreateNoteForm;
}(_react.Component);

CreateNoteForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  dirty: _propTypes2.default.bool
};

CreateNoteForm = (0, _reduxForm.reduxForm)({
  form: 'createNoteForm',
  validate: _validations2.default
})(CreateNoteForm);

exports.default = CreateNoteForm;