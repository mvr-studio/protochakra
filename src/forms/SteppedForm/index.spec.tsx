import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import SteppedForm from './'

describe('SteppedForm', () => {
  it.skip('Renders initial and triggers onFormSubmit', async () => {
    const onFormSubmit = jest.fn()
    render(
      <ChakraProvider theme={theme}>
        <SteppedForm
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
    act(() => {
      fireEvent.change(screen.getAllByTestId('protochakra.simpleForm.field')[0], { target: { value: 'Johnny' } })
      fireEvent.click(screen.getByTestId('protochakra.simpleForm.submit'))
      fireEvent.change(screen.getAllByTestId('protochakra.simpleForm.field')[0], { target: { value: 'Cash' } })
      fireEvent.click(screen.getByTestId('protochakra.simpleForm.submit'))
    })
    await waitFor(() => {
      expect(onFormSubmit).toHaveBeenCalled()
    })
  })
})
