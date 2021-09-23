import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import BottomNavigation from './'

describe('BottomNavigation', () => {
  it('Renders initial', () => {
    mount(
      <ChakraProvider theme={theme}>
        <BottomNavigation
          tabs={[
            {
              label: 'Home',
              pathname: '/home'
            }
          ]}
          onChange={(pathname) => {
            console.log(pathname)
          }}
        />
      </ChakraProvider>
    )
    cy.findByTestId('protochakra.bottomNavigation').contains('Home')
  })
})
