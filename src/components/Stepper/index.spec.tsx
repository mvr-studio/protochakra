import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import Stepper from './'

const TEST_STEPS = ['Personal Details', 'Agreements', 'Confirmation']

describe('Stepper', () => {
  it('Renders initial', () => {
    render(
      <ChakraProvider theme={theme}>
        <Stepper steps={TEST_STEPS} currentStep={0} />
      </ChakraProvider>
    )
    expect(screen.getAllByTestId('protochakra.step').length).toEqual(3)

    expect(screen.getAllByTestId('protochakra.step')[0].textContent).toContain('Personal Details')
    expect(screen.getAllByTestId('protochakra.step')[1].textContent).toContain('Agreements')
    expect(screen.getAllByTestId('protochakra.step')[2].textContent).toContain('Confirmation')

    expect(screen.getAllByTestId('protochakra.step')[0].getAttribute('data-is-active')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[1].getAttribute('data-is-active')).toEqual('false')
    expect(screen.getAllByTestId('protochakra.step')[2].getAttribute('data-is-active')).toEqual('false')

    expect(screen.getAllByTestId('protochakra.step')[0].getAttribute('data-is-current')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[1].getAttribute('data-is-current')).toEqual('false')
    expect(screen.getAllByTestId('protochakra.step')[2].getAttribute('data-is-current')).toEqual('false')
  })

  it('Renders second step', () => {
    render(
      <ChakraProvider theme={theme}>
        <Stepper steps={TEST_STEPS} currentStep={1} />
      </ChakraProvider>
    )

    expect(screen.getAllByTestId('protochakra.step')[0].getAttribute('data-is-active')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[1].getAttribute('data-is-active')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[2].getAttribute('data-is-active')).toEqual('false')

    expect(screen.getAllByTestId('protochakra.step')[0].getAttribute('data-is-current')).toEqual('false')
    expect(screen.getAllByTestId('protochakra.step')[1].getAttribute('data-is-current')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[2].getAttribute('data-is-current')).toEqual('false')
  })

  it('Renders third step', () => {
    render(
      <ChakraProvider theme={theme}>
        <Stepper steps={TEST_STEPS} currentStep={2} />
      </ChakraProvider>
    )

    expect(screen.getAllByTestId('protochakra.step')[0].getAttribute('data-is-active')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[1].getAttribute('data-is-active')).toEqual('true')
    expect(screen.getAllByTestId('protochakra.step')[2].getAttribute('data-is-active')).toEqual('true')

    expect(screen.getAllByTestId('protochakra.step')[0].getAttribute('data-is-current')).toEqual('false')
    expect(screen.getAllByTestId('protochakra.step')[1].getAttribute('data-is-current')).toEqual('false')
    expect(screen.getAllByTestId('protochakra.step')[2].getAttribute('data-is-current')).toEqual('true')
  })
})
