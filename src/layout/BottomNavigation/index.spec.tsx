import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import BottomNavigation from './'

describe('BottomNavigation', () => {
  it('Renders initial', () => {
    render(
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
    expect(screen.getByTestId('protochakra.bottomNavigation').textContent).toContain('Home')
  })
})
