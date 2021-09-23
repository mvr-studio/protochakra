import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import { Button } from '@chakra-ui/react'
import Navbar from './'

describe('Navbar', () => {
  it('Renders initial and expands', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Navbar branding="MVR">
          <Button data-testid="test.hidden">Dashboard</Button>
        </Navbar>
      </ChakraProvider>
    )
    cy.findByTestId('protochakra.navbar.branding').should('exist')
    cy.findByTestId('protochakra.navbar.toggle').click()
    cy.findByTestId('test.hidden').should('exist')
  })
})
