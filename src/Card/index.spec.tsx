import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import Card from './'

describe('Card', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Card>Test</Card>
      </ChakraProvider>
    )
    cy.findByTestId('protochakra.card').contains('Test')
  })
})
