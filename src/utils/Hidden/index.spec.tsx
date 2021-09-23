import React from 'react'
import { ChakraProvider, theme, Box } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import Hidden from './'

describe('Hidden', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Box data-testid="spec.visible">
          <Hidden above="md">Visible Above MD</Hidden>
        </Box>
        <Box data-testid="spec.hidden">
          <Hidden below="lg">Visible Below LG</Hidden>
        </Box>
      </ChakraProvider>
    )
    cy.findByTestId('spec.visible').should('be.visible')
    cy.findByTestId('spec.visible').contains('Visible')
    cy.findByTestId('spec.hidden').should('not.be.visible')
  })
})
