import React from 'react'
import { ChakraProvider, theme, Button } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import CallToAction from './'

describe('CallToAction', () => {
  it('Renders initial', () => {
    render(
      <ChakraProvider theme={theme}>
        <CallToAction heading="Example Title">
          <Button>Example Button</Button>
        </CallToAction>
      </ChakraProvider>
    )
    expect(screen.getByTestId('protochakra.cta').textContent).toContain('Example Title')
    expect(screen.getByTestId('protochakra.cta').textContent).toContain('Example Button')
  })
})
