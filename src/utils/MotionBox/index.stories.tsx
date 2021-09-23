import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MotionBox from '.'

export default {
  title: 'Utils/MotionBox',
  component: MotionBox
} as ComponentMeta<typeof MotionBox>

const Template: ComponentStory<typeof MotionBox> = (args) => <MotionBox padding="2rem" {...args} />

export const Basic = Template.bind({})
Basic.args = {
  initial: { x: -16, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 2 } },
  children: 'Sample Text'
}
