import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import Hero from '.'

describe('Hero', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Hero heading="Heading example" content="Content example" Addons={() => <div>Test</div>}>
          Media text
        </Hero>
      </ChakraProvider>
    )
    cy.findByTestId('protochakra.hero.heading').should('exist')
    cy.findByTestId('protochakra.hero.content').should('exist')
    cy.findByTestId('protochakra.hero.addons').should('exist')
  })
})
