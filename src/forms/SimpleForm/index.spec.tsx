import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import SimpleForm from './'

describe('SimpleForm', () => {
  it('Renders initial and triggers onSubmit', async () => {
    const onSubmit = jest.fn()
    render(
      <ChakraProvider theme={theme}>
        <SimpleForm fields={[{ label: 'First Name', name: 'first_name', isRequired: true }]} onSubmit={onSubmit} />
      </ChakraProvider>
    )
    expect(screen.getAllByTestId('protochakra.simpleForm.control').length).toEqual(1)
    expect(screen.getByTestId('protochakra.simpleForm.label').textContent).toContain('First Name')
    const input: HTMLInputElement = screen.getByTestId('protochakra.simpleForm.field')
    const submitButton = screen.getByTestId('protochakra.simpleForm.submit')
    act(() => {
      fireEvent.change(input, { target: { value: 'Trevor' } })
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
  })

  it('Handles isRequired validation', async () => {
    const onSubmit = jest.fn()
    render(
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
    const submitButton = screen.getByTestId('protochakra.simpleForm.submit')
    expect(screen.getAllByTestId('protochakra.simpleForm.control').length).toEqual(2)
    expect(screen.getAllByTestId('protochakra.simpleForm.label')[0].textContent).toContain('First Name')
    act(() => {
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(screen.getAllByTestId('protochakra.simpleForm.error').length).toEqual(2)
    })
    act(() => {
      fireEvent.change(screen.getAllByTestId('protochakra.simpleForm.field')[0], { target: { value: 'Trevor' } })
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(screen.getAllByTestId('protochakra.simpleForm.error').length).toEqual(1)
    })
    act(() => {
      fireEvent.change(screen.getAllByTestId('protochakra.simpleForm.field')[1], { target: { value: 'Philips' } })
      fireEvent.click(submitButton)
    })
    await waitFor(() => {
      expect(screen.queryByTestId('protochakra.simpleForm.error')).not.toBeInTheDocument()
    })
  })
})
