'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/UserTripHistory/components/TripHistoryList/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = require('react-virtualized');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TripHistoryList(_ref) {
  var data = _ref.data,
      sortOptions = _ref.sortOptions,
      handleOnSort = _ref.handleOnSort;

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
          lineNumber: 11
        }
      },
      cellData
    );
  };
  var sortData = function sortData(_ref4) {
    var sortBy = _ref4.sortBy,
        sortDirection = _ref4.sortDirection;
    return handleOnSort({ sortBy: sortBy, sortDirection: sortDirection });
  };

  return _react2.default.createElement(
    'div',
    { style: _styles2.default.tableStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    _react2.default.createElement(
      _reactVirtualized.AutoSizer,
      { disableHeight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      function (_ref5) {
        var width = _ref5.width;
        return _react2.default.createElement(
          _reactVirtualized.Table,
          {
            width: width,
            height: data.length * rowHeight + headerHeight,
            sort: sortData,
            sortBy: sortOptions.sortBy,
            sortDirection: sortOptions.sortDirection,
            headerHeight: headerHeight,
            headerStyle: _styles2.default.headerStyles,
            headerClassName: 'table-header-override',
            rowHeight: rowHeight,
            rowGetter: rowGetter,
            rowCount: data.length,
            rowStyle: _styles2.default.rowStyles,
            cellRenderer: defaultCell,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Date',
            dataKey: 'date',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Distance',
            dataKey: 'distance',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Duration',
            dataKey: 'duration',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'From',
            dataKey: 'from',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'To',
            dataKey: 'to',
            width: 250,
            flexGrow: 1,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Type',
            dataKey: 'type',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Score',
            dataKey: 'score',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          })
        );
      }
    )
  );
}

TripHistoryList.propTypes = {
  data: _propTypes2.default.array,
  sortOptions: _propTypes2.default.object,
  handleOnSort: _propTypes2.default.func,
  cellData: _propTypes2.default.object,
  rowData: _propTypes2.default.object
};

exports.default = TripHistoryList;