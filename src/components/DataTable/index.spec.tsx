import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import DataTable from './'

describe('DataTable', () => {
  it('Renders initial', () => {
    mount(
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
    cy.findByTestId('protochakra.dataTable').contains('From')
    cy.findByTestId('protochakra.dataTable').contains('0.2')
  })
})
