import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import Card from './'

describe('Card', () => {
  it('Renders initial', () => {
    render(
      <ChakraProvider theme={theme}>
        <Card>Test</Card>
      </ChakraProvider>
    )
    expect(screen.getByTestId('protochakra.card').textContent).toContain('Test')
  })
})
