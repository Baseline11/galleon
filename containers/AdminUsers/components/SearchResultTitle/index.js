'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/AdminUsers/components/SearchResultTitle/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _laelia = require('laelia');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchResultTitle(_ref) {
  var data = _ref.data;

  var BaseComponent = function BaseComponent() {
    return _react2.default.createElement(
      'h1',
      { style: _styles2.default.baseTitleStyles, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'System Users'
    );
  };
  var resultValue = data > 0 ? data + ' Results' : 'No Result';

  /* eslint-disable-next-line new-cap */
  var WrappedComponent = (0, _laelia.SearchResultNumber)(BaseComponent, resultValue);

  return _react2.default.createElement(WrappedComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  });
}

SearchResultTitle.propTypes = {
  data: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

exports.default = SearchResultTitle;