import React from 'react'
import { ChakraProvider, theme, Box } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import Hidden from './'

describe('Hidden', () => {
  it('Renders initial', () => {
    render(
      <ChakraProvider theme={theme}>
        <Box data-testid="spec.visible">
          <Hidden above="md">Visible Above MD</Hidden>
        </Box>
        <Box data-testid="spec.hidden">
          <Hidden below="lg">Visible Below LG</Hidden>
        </Box>
      </ChakraProvider>
    )
    expect(screen.getByTestId('spec.visible').textContent).toContain('Visible')
  })
})
