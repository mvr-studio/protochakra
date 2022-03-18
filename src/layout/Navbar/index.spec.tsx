import React from 'react'
import { ChakraProvider, theme, Button } from '@chakra-ui/react'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import Navbar from './'

describe('Navbar', () => {
  it('Renders initial and expands', async () => {
    render(
      <ChakraProvider theme={theme}>
        <Navbar branding="MVR">
          <Button data-testid="test.hidden">Dashboard</Button>
        </Navbar>
      </ChakraProvider>
    )
    expect(screen.getByTestId('protochakra.navbar.branding').textContent).toContain('MVR')
    act(() => {
      fireEvent.click(screen.getByTestId('protochakra.navbar.toggle'))
    })
    await waitFor(() => {
      expect(screen.queryByTestId('test.hidden')).toBeInTheDocument()
    })
  })
})
