import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

import SteppedForm from './'

export default {
  title: 'Components/SteppedForm',
  component: SteppedForm
} as ComponentMeta<typeof SteppedForm>

const Template: ComponentStory<typeof SteppedForm> = (args) => (
  <Box padding="2rem">
    <SteppedForm {...args} />
  </Box>
)

export const Basic = Template.bind({})
Basic.args = {
  steps: [
    {
      name: 'Personal Details',
      description: 'Some personal details',
      fields: [
        { label: 'First Name', name: 'first_name', isRequired: true },
        { label: 'Last Name', name: 'last_name', isRequired: true }
      ]
    },
    {
      name: 'Account Details',
      fields: [
        { label: 'Email', name: 'email', type: 'email', isRequired: true },
        { label: 'Password', name: 'password', type: 'password', isRequired: true }
      ]
    },
    {
      name: 'Agreements',
      fields: [
        { label: 'Terms of Service', name: 'terms', placeholder: 'I agree to...', type: 'checkbox', isRequired: true }
      ]
    }
  ],
  onFormSubmit: (data) => console.dir(data)
}
