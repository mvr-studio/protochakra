import { ChakraProvider, theme } from '@chakra-ui/react'
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen',
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true }
  },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }))
  },
  darkMode: {
    dark: { ...themes.dark, brandImage: 'https://place-hold.it/350x150' },
    light: { ...themes.normal, brandImage: 'https://place-hold.it/350x150' }
  },
  darkMode: {
    current: 'dark'
  }
}

export const decorators = [
  (Story) => {
    return (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    )
  }
]
