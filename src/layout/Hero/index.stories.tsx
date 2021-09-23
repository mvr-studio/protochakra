import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Image } from '@chakra-ui/react'

import Hero from '.'

export default {
  title: 'Layout/Hero',
  component: Hero,
  argTypes: {
    maxWidth: { control: 'select', options: ['container.sm', 'container.md', 'container.lg', 'container.xl'] }
  }
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Basic = Template.bind({})
Basic.args = {
  heading: 'Prototype fast with Chakra',
  content: 'Use our Low Code & opinionated Chakra UI components to speed up the easy tasks.',
  Addons: () => <Button size="lg">Documentation</Button>,
  children: <Image src="/cyborg-107.png" maxHeight="20rem" />
}
