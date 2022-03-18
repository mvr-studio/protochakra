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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
var DataTable = function (_a) {
    var data = _a.data, columns = _a.columns;
    var _b = useTable({ columns: columns, data: data }, useSortBy), getTableProps = _b.getTableProps, getTableBodyProps = _b.getTableBodyProps, headerGroups = _b.headerGroups, rows = _b.rows, prepareRow = _b.prepareRow;
    return (_jsxs(Table, __assign({ "data-testid": "protochakra.dataTable" }, getTableProps(), { children: [_jsx(Thead, { children: headerGroups.map(function (headerGroup) { return (_jsx(Tr, __assign({}, headerGroup.getHeaderGroupProps(), { children: headerGroup.headers.map(function (column) { return (_jsxs(Th, __assign({}, column.getHeaderProps(column.getSortByToggleProps()), { isNumeric: column.isNumeric }, { children: [column.render('Header'), _jsx(chakra.span, __assign({ pl: "4" }, { children: column.isSorted ? (column.isSortedDesc ? (_jsx(TriangleDownIcon, { "aria-label": "sorted descending" })) : (_jsx(TriangleUpIcon, { "aria-label": "sorted ascending" }))) : null }))] }))); }) }))); }) }), _jsx(Tbody, __assign({}, getTableBodyProps(), { children: rows.map(function (row) {
                    prepareRow(row);
                    return (_jsx(Tr, __assign({}, row.getRowProps(), { children: row.cells.map(function (cell) { return (_jsx(Td, __assign({}, cell.getCellProps(), { isNumeric: cell.column.isNumeric }, { children: cell.render('Cell') }))); }) })));
                }) }))] })));
};
export default DataTable;
