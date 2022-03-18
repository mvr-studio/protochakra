import React from 'react'
import { ChakraProvider, theme, Box } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import Footer from './'

describe('Footer', () => {
  it('Renders initial with copyrights owner', () => {
    const currentYear = new Date().getFullYear()
    render(
      <ChakraProvider theme={theme}>
        <Footer copyrightOwner="MVR Studio">
          <Box>Test</Box>
        </Footer>
      </ChakraProvider>
    )
    expect(screen.getByTestId('protochakra.footer.copyrightOwner').textContent).toContain(`© ${currentYear} MVR Studio`)
  })
})
