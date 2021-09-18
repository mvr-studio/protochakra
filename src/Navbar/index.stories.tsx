import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link, Button, Image } from '@chakra-ui/react'

import Navbar from 'Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    maxWidth: { control: 'select', options: ['container.sm', 'container.md', 'container.lg', 'container.xl'] }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const WithTextBranding = Template.bind({})
WithTextBranding.args = {
  branding: 'MVR',
  children: (
    <>
      <Link>About Us</Link>
      <Link>Blog</Link>
      <Link>Contact</Link>
      <Button colorScheme="blue">Dashboard</Button>
    </>
  )
}

export const WithImageBranding = Template.bind({})
WithImageBranding.args = {
  branding: <Image src="/mvr-logo.svg" />,
  children: (
    <>
      <Link>About Us</Link>
      <Link>Blog</Link>
      <Link>Contact</Link>
      <Button colorScheme="blue">Dashboard</Button>
    </>
  )
}
