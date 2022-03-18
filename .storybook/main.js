module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  features: { emotionAlias: false },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    })
    return config
  },
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg')
    return options
  }
}
