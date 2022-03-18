"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
var react_table_1 = require("react-table");
var DataTable = function (_a) {
    var data = _a.data, columns = _a.columns;
    var _b = (0, react_table_1.useTable)({ columns: columns, data: data }, react_table_1.useSortBy), getTableProps = _b.getTableProps, getTableBodyProps = _b.getTableBodyProps, headerGroups = _b.headerGroups, rows = _b.rows, prepareRow = _b.prepareRow;
    return ((0, jsx_runtime_1.jsxs)(react_1.Table, __assign({ "data-testid": "protochakra.dataTable" }, getTableProps(), { children: [(0, jsx_runtime_1.jsx)(react_1.Thead, { children: headerGroups.map(function (headerGroup) { return ((0, jsx_runtime_1.jsx)(react_1.Tr, __assign({}, headerGroup.getHeaderGroupProps(), { children: headerGroup.headers.map(function (column) { return ((0, jsx_runtime_1.jsxs)(react_1.Th, __assign({}, column.getHeaderProps(column.getSortByToggleProps()), { isNumeric: column.isNumeric }, { children: [column.render('Header'), (0, jsx_runtime_1.jsx)(react_1.chakra.span, __assign({ pl: "4" }, { children: column.isSorted ? (column.isSortedDesc ? ((0, jsx_runtime_1.jsx)(icons_1.TriangleDownIcon, { "aria-label": "sorted descending" })) : ((0, jsx_runtime_1.jsx)(icons_1.TriangleUpIcon, { "aria-label": "sorted ascending" }))) : null }))] }))); }) }))); }) }), (0, jsx_runtime_1.jsx)(react_1.Tbody, __assign({}, getTableBodyProps(), { children: rows.map(function (row) {
                    prepareRow(row);
                    return ((0, jsx_runtime_1.jsx)(react_1.Tr, __assign({}, row.getRowProps(), { children: row.cells.map(function (cell) { return ((0, jsx_runtime_1.jsx)(react_1.Td, __assign({}, cell.getCellProps(), { isNumeric: cell.column.isNumeric }, { children: cell.render('Cell') }))); }) })));
                }) }))] })));
};
exports.default = DataTable;
