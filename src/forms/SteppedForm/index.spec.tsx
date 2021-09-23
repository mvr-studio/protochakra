import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import SimpleForm from './'

describe('SteppedForm', () => {
  it('Renders initial and triggers onFormSubmit', () => {
    const onFormSubmit = cy.spy()
    mount(
      <ChakraProvider theme={theme}>
        <SimpleForm
          steps={[
            {
              name: 'First',
              description: 'Text',
              fields: [{ label: 'First Name', name: 'first_name', isRequired: true }]
            },
            {
              name: 'Second',
              description: 'Text',
              fields: [{ label: 'Last Name', name: 'last_name', isRequired: true }]
            }
          ]}
          onFormSubmit={onFormSubmit}
        />
      </ChakraProvider>
    )
    cy.findAllByTestId('protochakra.simpleForm.field').eq(0).clear().type('Johnny')
    cy.findByTestId('protochakra.simpleForm.submit').click()
    cy.findAllByTestId('protochakra.simpleForm.field').eq(0).clear().type('Cash')
    cy.findByTestId('protochakra.simpleForm.submit')
      .click()
      .then(() => {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        // eslint-disable-next-line jest/valid-expect
        expect(onFormSubmit).to.be.called
      })
  })
})
