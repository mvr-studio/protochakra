import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import { Box } from '@chakra-ui/react'
import Hidden from './'

describe('Footer', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <Hidden above="md">Hidden above MD</Hidden>
        <Hidden below="md">Hidden below MD</Hidden>
      </ChakraProvider>
    )
  })
})
