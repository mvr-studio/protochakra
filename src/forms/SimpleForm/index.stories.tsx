import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

import SimpleForm from './'

export default {
  title: 'Forms/SimpleForm',
  component: SimpleForm
} as ComponentMeta<typeof SimpleForm>

const Template: ComponentStory<typeof SimpleForm> = (args) => (
  <Box paddingX="2rem">
    <SimpleForm {...args} />
  </Box>
)

export const BasicForm = Template.bind({})
BasicForm.args = {
  fields: [
    { label: 'Name', name: 'first_name', isRequired: true },
    { label: 'Email Address', name: 'email', type: 'email', isRequired: true, placeholder: 'your@email.com' },
    { label: 'Message', name: 'message', type: 'textarea', isRequired: true, helperText: 'Max 255 characters' },
    {
      label: 'Preferred Contact Way',
      name: 'preferred_contact',
      type: 'select',
      selectOptions: [
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' }
      ]
    },
    {
      name: 'marketing_agreement',
      placeholder: 'I agree to...',
      type: 'checkbox',
      isRequired: true
    }
  ],
  onSubmit: (data) => console.dir(data),
  customErrorMessages: {
    required: 'This field is required.'
  }
}

export const CustomButtonProps = Template.bind({})
CustomButtonProps.args = {
  fields: [{ label: 'First Name', name: 'first_name', isRequired: true }],
  onSubmit: (data) => console.dir(data),
  buttonProps: {
    colorScheme: 'blue'
  }
}
