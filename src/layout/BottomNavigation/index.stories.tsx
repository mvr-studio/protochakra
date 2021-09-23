import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RiHome2Line, RiRoadsterLine, RiFileCopy2Line, RiUser3Line } from 'react-icons/ri'

import BottomNavigation from './'

export default {
  title: 'Layout/Bottom Navigation',
  component: BottomNavigation
} as ComponentMeta<typeof BottomNavigation>

const Template: ComponentStory<typeof BottomNavigation> = (args) => <BottomNavigation {...args} />

export const Basic = Template.bind({})
Basic.args = {
  tabs: [
    {
      label: 'Home',
      Icon: RiHome2Line
    },
    {
      label: 'My Vehicles',
      Icon: RiRoadsterLine
    },
    {
      label: 'Invoices',
      Icon: RiFileCopy2Line
    },
    {
      label: 'Profile',
      Icon: RiUser3Line
    }
  ],
  onChange: (pathname) => console.log('CHANGE_PATH', pathname),
  containerProps: {
    position: 'sticky',
    bottom: 0
  }
}

export const StylingApplied = Template.bind({})
StylingApplied.args = {
  tabs: [
    {
      label: 'Home',
      Icon: RiHome2Line
    },
    {
      label: 'My Vehicles',
      Icon: RiRoadsterLine
    },
    {
      label: 'Invoices',
      Icon: RiFileCopy2Line
    },
    {
      label: 'Profile',
      Icon: RiUser3Line
    }
  ],
  onChange: (pathname) => console.log('CHANGE_PATH', pathname),
  containerProps: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: 'purple.600'
  },
  tabProps: {
    color: 'white'
  }
}
