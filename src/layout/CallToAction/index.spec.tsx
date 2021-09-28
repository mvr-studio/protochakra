import React from 'react'
import { ChakraProvider, theme, Button } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import CallToAction from './'

describe('CallToAction', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <CallToAction heading="Example Title">
          <Button>Example Button</Button>
        </CallToAction>
      </ChakraProvider>
    )
    cy.findByTestId('protochakra.cta').contains('Example Title')
    cy.findByTestId('protochakra.cta').contains('Example Button')
  })
})
