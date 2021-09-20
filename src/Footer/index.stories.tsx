import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text, Stack, Link, HStack, Icon, Image } from '@chakra-ui/react'
import { RiFacebookCircleLine, RiInstagramLine, RiLinkedinBoxLine, RiYoutubeLine } from 'react-icons/ri'

import Footer from './'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    maxWidth: { control: 'select', options: ['container.sm', 'container.md', 'container.lg', 'container.xl'] }
  }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Basic = Template.bind({})
Basic.args = {
  copyrightOwner: 'MVR Studio',
  children: (
    <>
      <div>
        <Image src="/mvr-logo.svg" />
        <Stack marginTop="1.25rem">
          <Text>team@yourcompany.com</Text>
          <Text>+00 123123123</Text>
          <Text>Your Location 1</Text>
          <Text>61-703 Poznan, Poland</Text>
        </Stack>
      </div>
      <Stack>
        <Text fontSize="1.25rem" fontWeight={600}>
          Company
        </Text>
        <Link>About Us</Link>
        <Link>Case Studies</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </Stack>
      <Stack>
        <Text fontSize="1.25rem" fontWeight={600}>
          Blog
        </Text>
        <Link>Technology</Link>
        <Link>Marketing</Link>
        <Link>Sales</Link>
        <Link>Design</Link>
      </Stack>
      <div>
        <HStack gridGap="1rem">
          <Icon as={RiFacebookCircleLine} boxSize="1.5rem" />
          <Icon as={RiInstagramLine} boxSize="1.5rem" />
          <Icon as={RiLinkedinBoxLine} boxSize="1.5rem" />
          <Icon as={RiYoutubeLine} boxSize="1.5rem" />
        </HStack>
        <Stack marginTop="0.75rem">
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
        </Stack>
      </div>
    </>
  )
}
