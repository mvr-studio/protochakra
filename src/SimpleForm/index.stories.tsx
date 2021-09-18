import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SimpleForm from 'SimpleForm'

export default {
  title: 'Components/SimpleForm',
  component: SimpleForm
} as ComponentMeta<typeof SimpleForm>

const Template: ComponentStory<typeof SimpleForm> = (args) => <SimpleForm {...args} />

export const ContactFormExample = Template.bind({})
ContactFormExample.args = {
  fields: [
    { label: 'First Name', name: 'first_name', isRequired: true },
    { label: 'Last Name', name: 'last_name', isRequired: true },
    { label: 'Email Address', name: 'email', type: 'email', isRequired: true, placeholder: 'your@email.com' },
    { label: 'Phone Number', name: 'phone', type: 'tel' },
    { label: 'Message', name: 'message', type: 'textarea', isRequired: true },
    {
      label: 'Preferred Contact',
      name: 'preferred_contact',
      type: 'select',
      selectOptions: [{ label: 'Email', value: 'email' }]
    }
  ],
  onSubmit: (data) => console.dir(data),
  customErrorMessages: {
    required: 'This field is required.'
  }
}
