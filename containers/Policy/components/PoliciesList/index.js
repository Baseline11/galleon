'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/Policy/components/PoliciesList/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = require('react-virtualized');

var _lodash = require('lodash');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PolicyList(_ref) {
  var data = _ref.data;

  var rowHeight = 55;
  var headerHeight = 45;
  var rowGetter = function rowGetter(_ref2) {
    var index = _ref2.index;
    return data[index];
  };
  var defaultCell = function defaultCell(_ref3) {
    var cellData = _ref3.cellData;
    return _react2.default.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      cellData
    );
  };
  var policyKeys = (0, _lodash.keys)((0, _lodash.omit)(data[0], ['tab', 'policy']));

  return _react2.default.createElement(
    'div',
    { style: _styles2.default.tableStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    _react2.default.createElement(
      _reactVirtualized.AutoSizer,
      { disableHeight: true, disableSort: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      function (_ref4) {
        var width = _ref4.width;
        return _react2.default.createElement(
          _reactVirtualized.Table,
          {
            width: width,
            height: data.length * rowHeight + headerHeight,
            headerHeight: headerHeight,
            headerStyle: _styles2.default.headerStyles,
            headerClassName: 'table-header-override',
            sortBy: null,
            sortDirection: null,
            rowHeight: rowHeight,
            rowGetter: rowGetter,
            rowCount: data.length,
            rowStyle: _styles2.default.rowStyles,
            cellRenderer: defaultCell,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          policyKeys.map(function (keyValue) {
            return _react2.default.createElement(_reactVirtualized.Column, {
              label: keyValue,
              dataKey: keyValue,
              width: 251,
              key: keyValue,
              style: _styles2.default.columnStyles,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            });
          })
        );
      }
    )
  );
}

PolicyList.propTypes = {
  data: _propTypes2.default.array,
  sortOptions: _propTypes2.default.object,
  handleOnSort: _propTypes2.default.func,
  cellData: _propTypes2.default.object,
  rowData: _propTypes2.default.object
};

exports.default = PolicyList;