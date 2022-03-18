import React from 'react'
import { ChakraProvider, theme, Box } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import Hero from '.'

describe('Hero', () => {
  it('Renders initial', () => {
    render(
      <ChakraProvider theme={theme}>
        <Hero heading="Heading example" content="Content example" Addons={() => <div>Test</div>}>
          Media text
        </Hero>
      </ChakraProvider>
    )
    expect(screen.getByTestId('protochakra.hero.heading').textContent).toContain('Heading example')
    expect(screen.getByTestId('protochakra.hero.content').textContent).toContain('Content example')
    expect(screen.getByTestId('protochakra.hero.addons').textContent).toContain('Test')
  })
})
