import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy, HeaderGroup, Row } from 'react-table'

type Data = Record<string, string | number | boolean>
type ColumnData = Data & { accessor: string }

interface DataTableProps {
  data: Data[]
  columns: ColumnData[]
}

const DataTable = ({ data, columns }: DataTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

  return (
    <Table data-testid="protochakra.dataTable" {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup: HeaderGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())} isNumeric={column.isNumeric}>
                {column.render('Header')}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row: Row) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default DataTable
