'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/Users/components/UsersList/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualized = require('react-virtualized');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserList(_ref) {
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
  var textLinkCell = function textLinkCell(_ref4) {
    var cellData = _ref4.cellData;
    return _react2.default.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      _react2.default.createElement(
        'a',
        { style: _styles2.default.textLinkCell, href: '/user/view/' + cellData, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        cellData
      )
    );
  };
  var sortData = function sortData(_ref5) {
    var sortBy = _ref5.sortBy,
        sortDirection = _ref5.sortDirection;
    return handleOnSort({ sortBy: sortBy, sortDirection: sortDirection });
  };

  return _react2.default.createElement(
    'div',
    { style: _styles2.default.tableStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    },
    _react2.default.createElement(
      _reactVirtualized.AutoSizer,
      { disableHeight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      function (_ref6) {
        var width = _ref6.width;
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
              lineNumber: 21
            }
          },
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'name',
            dataKey: 'name',
            width: 100,
            style: _styles2.default.columnStyles,
            cellRenderer: textLinkCell,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'created on',
            dataKey: 'created',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'ltp on',
            dataKey: 'ltp',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'last trip',
            dataKey: 'lastTrip',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'last login',
            dataKey: 'lastLogin',
            width: 250,
            flexGrow: 1,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'score',
            dataKey: 'score',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'discount',
            dataKey: 'discount',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'language',
            dataKey: 'language',
            width: 100,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          })
        );
      }
    )
  );
}

UserList.propTypes = {
  data: _propTypes2.default.array,
  sortOptions: _propTypes2.default.object,
  handleOnSort: _propTypes2.default.func,
  cellData: _propTypes2.default.object,
  rowData: _propTypes2.default.object
};

exports.default = UserList;