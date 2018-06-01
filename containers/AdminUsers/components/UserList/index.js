'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/containers/AdminUsers/components/UserList/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _reactVirtualized = require('react-virtualized');

var _laelia = require('laelia');

var _getAdminActionFromUserStatus = require('helpers/getAdminActionFromUserStatus');

var _getAdminActionFromUserStatus2 = _interopRequireDefault(_getAdminActionFromUserStatus);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserList(_ref) {
  var data = _ref.data,
      sortOptions = _ref.sortOptions,
      handleOnSort = _ref.handleOnSort,
      updateStatusAction = _ref.updateStatusAction,
      reinviteUserAction = _ref.reinviteUserAction;

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

  var actionCell = function actionCell(_ref4) {
    var rowData = _ref4.rowData;

    var actionsParams = {
      userId: rowData.id,
      statusId: rowData.status,
      activateAction: function activateAction() {
        return updateStatusAction({ userId: rowData.id, statusId: 1 });
      },
      cancelAction: function cancelAction() {
        return updateStatusAction({ userId: rowData.id, statusId: 4 });
      },
      suspendAction: function suspendAction() {
        return updateStatusAction({ userId: rowData.id, statusId: 5 });
      },
      reinviteAction: function reinviteAction() {
        return reinviteUserAction({ userId: rowData.id });
      }
    };

    return _react2.default.createElement(_laelia.ActionMenu, {
      actions: (0, _getAdminActionFromUserStatus2.default)(actionsParams),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  };

  var rolesCell = function rolesCell(_ref5) {
    var cellData = _ref5.cellData;
    return _react2.default.createElement(_laelia.CheckBox, {
      checked: !!cellData,
      disabled: true,
      handleOnChange: _lodash.noop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    });
  };
  var nameCell = function nameCell(_ref6) {
    var cellData = _ref6.cellData,
        rowData = _ref6.rowData;
    return _react2.default.createElement(
      'a',
      { href: '/admin_users/edit/' + rowData.id, style: _styles2.default.linkStyles, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      },
      cellData
    );
  };
  var rowHeight = 75;
  var headerHeight = 55;

  var sortData = function sortData(_ref7) {
    var sortBy = _ref7.sortBy,
        sortDirection = _ref7.sortDirection;
    return handleOnSort({ sortBy: sortBy, sortDirection: sortDirection });
  };

  return _react2.default.createElement(
    'div',
    { style: _styles2.default.tableStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    },
    _react2.default.createElement(
      _reactVirtualized.AutoSizer,
      { disableHeight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      },
      function (_ref8) {
        var width = _ref8.width;
        return _react2.default.createElement(
          _reactVirtualized.Table,
          {
            width: width,
            height: data.length * rowHeight + headerHeight,
            sort: sortData,
            sortBy: sortOptions.sortBy,
            sortDirection: sortOptions.sortDirection,
            rowHeight: rowHeight,
            rowGetter: rowGetter,
            rowCount: data.length,
            rowStyle: _styles2.default.rowStyles,
            rowClassName: 'action-style-override',
            headerHeight: headerHeight,
            headerStyle: _styles2.default.headerStyles,
            headerClassName: 'table-header-override',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Name',
            dataKey: 'name',
            width: 200,
            flexGrow: 1,
            flexShrink: 1,
            cellRenderer: nameCell,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Email',
            dataKey: 'email',
            width: 250,
            flexGrow: 1,
            flexShrink: 1,
            cellRenderer: defaultCell,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Created',
            dataKey: 'created',
            width: 150,
            flexGrow: 1,
            flexShrink: 1,
            cellRenderer: defaultCell,
            style: _styles2.default.columnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Action',
            dataKey: 'action',
            cellRenderer: actionCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            className: 'action-style-override',
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Admin',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref9) {
              var rowData = _ref9.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '3'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Billing',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref10) {
              var rowData = _ref10.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '6'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Scoring',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref11) {
              var rowData = _ref11.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '4'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Marketing',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref12) {
              var rowData = _ref12.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '7'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'CSR',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref13) {
              var rowData = _ref13.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '5'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Logistics',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref14) {
              var rowData = _ref14.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '8'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          }),
          _react2.default.createElement(_reactVirtualized.Column, {
            label: 'Executive',
            dataKey: 'roles',
            cellDataGetter: function cellDataGetter(_ref15) {
              var rowData = _ref15.rowData;
              return rowData.roles[(0, _lodash.findIndex)(rowData.roles, ['id', '9'])];
            },
            cellRenderer: rolesCell,
            disableSort: true,
            width: 100,
            flexGrow: 1,
            flexShrink: 1,
            style: _styles2.default.actionColumnStyles,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
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
  updateStatusAction: _propTypes2.default.func,
  reinviteUserAction: _propTypes2.default.func,
  cellData: _propTypes2.default.object,
  rowData: _propTypes2.default.object
};

exports.default = UserList;