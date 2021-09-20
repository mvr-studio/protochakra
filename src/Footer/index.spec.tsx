import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import { Box } from '@chakra-ui/react'
import Footer from './'

describe('Footer', () => {
  it('Renders initial with copyrights owner', () => {
    const currentYear = new Date().getFullYear()
    mount(
      <ChakraProvider theme={theme}>
        <Footer copyrightOwner="MVR Studio">
          <Box>Test</Box>
        </Footer>
      </ChakraProvider>
    )
    cy.findByTestId('protochakra.footer.copyrightOwner').contains(`© ${currentYear} MVR Studio`)
  })
})
