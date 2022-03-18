import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import DataTable from './'

describe('DataTable', () => {
  it('Renders initial', () => {
    render(
      <ChakraProvider theme={theme}>
        <DataTable
          columns={[
            { Header: 'From', accessor: 'from' },
            { Header: 'To', accessor: 'to' }
          ]}
          data={[
            { from: 0.1, to: 0.2 },
            { from: 0.2, to: 0.3 }
          ]}
        />
      </ChakraProvider>
    )
    expect(screen.getByTestId('protochakra.dataTable').textContent).toContain('From')
    expect(screen.getByTestId('protochakra.dataTable').textContent).toContain('0.2')
  })
})
