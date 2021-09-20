import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import SimpleForm from './'

describe('SimpleForm', () => {
  it('Renders initial and triggers onSubmit', () => {
    const onSubmit = cy.spy()
    mount(
      <ChakraProvider theme={theme}>
        <SimpleForm fields={[{ label: 'First Name', name: 'first_name', isRequired: true }]} onSubmit={onSubmit} />
      </ChakraProvider>
    )
    cy.findAllByTestId('protochakra.simpleForm.control').its('length').should('eq', 1)
    cy.findAllByTestId('protochakra.simpleForm.label').eq(0).contains('First Name')
    cy.findAllByTestId('protochakra.simpleForm.field').eq(0).clear().type('Trevor')
    cy.findByTestId('protochakra.simpleForm.submit')
      .click()
      .then(() => {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        // eslint-disable-next-line jest/valid-expect
        expect(onSubmit).to.be.called
      })
  })

  it('Handles isRequired validation', () => {
    const onSubmit = cy.spy()
    mount(
      <ChakraProvider theme={theme}>
        <SimpleForm
          fields={[
            { label: 'First Name', name: 'first_name', isRequired: true },
            { label: 'Last Name', name: 'last_name', isRequired: true }
          ]}
          onSubmit={onSubmit}
        />
      </ChakraProvider>
    )
    cy.findAllByTestId('protochakra.simpleForm.control').its('length').should('eq', 2)
    cy.findAllByTestId('protochakra.simpleForm.label').eq(0).contains('First Name')
    cy.findByTestId('protochakra.simpleForm.submit').click()
    cy.findAllByTestId('protochakra.simpleForm.error').its('length').should('eq', 2)
    cy.findAllByTestId('protochakra.simpleForm.field').eq(0).clear().type('Trevor')
    cy.findByTestId('protochakra.simpleForm.submit').click()
    cy.findAllByTestId('protochakra.simpleForm.error').its('length').should('eq', 1)
    cy.findAllByTestId('protochakra.simpleForm.field').eq(1).clear().type('Philips')
    cy.findByTestId('protochakra.simpleForm.submit').click()
    cy.findByTestId('protochakra.simpleForm.error').should('not.exist')
  })
})
