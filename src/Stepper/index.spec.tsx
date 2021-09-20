import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import Stepper from './'

const TEST_STEPS = ['Personal Details', 'Agreements', 'Confirmation']

describe('Stepper', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Stepper steps={TEST_STEPS} currentStep={0} />
      </ChakraProvider>
    )
    cy.findAllByTestId('protochakra.step').its('length').should('eq', 3)

    cy.findAllByTestId('protochakra.step').eq(0).contains('Personal Details')
    cy.findAllByTestId('protochakra.step').eq(1).contains('Agreements')
    cy.findAllByTestId('protochakra.step').eq(2).contains('Confirmation')

    cy.findAllByTestId('protochakra.step').eq(0).invoke('attr', 'data-is-active').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(1).invoke('attr', 'data-is-active').should('eq', 'false')
    cy.findAllByTestId('protochakra.step').eq(2).invoke('attr', 'data-is-active').should('eq', 'false')

    cy.findAllByTestId('protochakra.step').eq(0).invoke('attr', 'data-is-current').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(1).invoke('attr', 'data-is-current').should('eq', 'false')
    cy.findAllByTestId('protochakra.step').eq(2).invoke('attr', 'data-is-current').should('eq', 'false')
  })

  it('Renders second step', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Stepper steps={TEST_STEPS} currentStep={1} />
      </ChakraProvider>
    )
    cy.findAllByTestId('protochakra.step').eq(0).invoke('attr', 'data-is-active').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(1).invoke('attr', 'data-is-active').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(2).invoke('attr', 'data-is-active').should('eq', 'false')

    cy.findAllByTestId('protochakra.step').eq(0).invoke('attr', 'data-is-current').should('eq', 'false')
    cy.findAllByTestId('protochakra.step').eq(1).invoke('attr', 'data-is-current').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(2).invoke('attr', 'data-is-current').should('eq', 'false')
  })

  it('Renders third step', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Stepper steps={TEST_STEPS} currentStep={2} />
      </ChakraProvider>
    )
    cy.findAllByTestId('protochakra.step').eq(0).invoke('attr', 'data-is-active').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(1).invoke('attr', 'data-is-active').should('eq', 'true')
    cy.findAllByTestId('protochakra.step').eq(2).invoke('attr', 'data-is-active').should('eq', 'true')

    cy.findAllByTestId('protochakra.step').eq(0).invoke('attr', 'data-is-current').should('eq', 'false')
    cy.findAllByTestId('protochakra.step').eq(1).invoke('attr', 'data-is-current').should('eq', 'false')
    cy.findAllByTestId('protochakra.step').eq(2).invoke('attr', 'data-is-current').should('eq', 'true')
  })
})
