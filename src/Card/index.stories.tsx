import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card, { CARD_DEFAULTS } from './'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    shadowOffsetX: { control: 'text', defaultValue: String(CARD_DEFAULTS.shadowOffsetX) },
    shadowOffsetY: { control: 'text', defaultValue: CARD_DEFAULTS.shadowOffsetY },
    blurRadius: { control: 'text', defaultValue: CARD_DEFAULTS.blurRadius },
    spreadRadius: { control: 'text', defaultValue: String(CARD_DEFAULTS.spreadRadius) },
    shadowColor: { control: 'color', defaultValue: CARD_DEFAULTS.shadowColor },
    shadowAlpha: { control: 'number', defaultValue: CARD_DEFAULTS.shadowAlpha },
    borderRadius: { control: 'text', defaultValue: CARD_DEFAULTS.borderRadius },
    padding: { control: 'text', defaultValue: CARD_DEFAULTS.padding },
    border: { control: 'text', defaultValue: CARD_DEFAULTS.border }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card margin="2rem" {...args}>
    Test
  </Card>
)

export const Basic = Template.bind({})
Basic.args = {}
