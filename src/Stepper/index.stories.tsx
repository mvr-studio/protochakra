import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

import Stepper from './'

export default {
  title: 'Components/Stepper',
  component: Stepper
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Box padding="1rem">
    <Stepper {...args} />
  </Box>
)

export const Basic = Template.bind({})
Basic.args = {
  steps: ['Personal Details', 'Agreements', 'Confirmation'],
  currentStep: 1
}
