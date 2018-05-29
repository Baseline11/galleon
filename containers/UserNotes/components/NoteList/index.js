'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserNotes/components/NoteList/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _laelia = require('laelia');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoteList(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    'div',
    { style: _styles2.default.noteListWrapper, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    data.map(function (note, index) {
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.noteWrapper, key: 'user-note-' + index, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        _react2.default.createElement(_laelia.Note, { data: note, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      );
    })
  );
}

NoteList.propTypes = {
  data: _propTypes2.default.array
};

exports.default = NoteList;