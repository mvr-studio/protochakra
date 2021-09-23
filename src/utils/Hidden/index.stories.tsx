import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Card from '../../components/Card'

import Hidden from '.'

export default {
  title: 'Utils/Hidden',
  component: Hidden
} as ComponentMeta<typeof Hidden>

const Template: ComponentStory<typeof Hidden> = () => (
  <SimpleGrid columns={3} gridGap="1rem" margin="2rem">
    <Hidden above="sm">
      <Card>Hidden above SM</Card>
    </Hidden>
    <Hidden above="md">
      <Card>Hidden above MD</Card>
    </Hidden>
    <Hidden above="lg">
      <Card>Hidden above LG</Card>
    </Hidden>
    <Hidden above="xl">
      <Card>Hidden above XL</Card>
    </Hidden>
    <Hidden below="md">
      <Card>Hidden below MD</Card>
    </Hidden>
    <Hidden below="lg">
      <Card>Hidden below LG</Card>
    </Hidden>
    <Hidden below="xl">
      <Card>Hidden below XL</Card>
    </Hidden>
    <Hidden below="2xl">
      <Card>Hidden below 2XL</Card>
    </Hidden>
    <Hidden below="md" above="md">
      <Card>Only visible on MD</Card>
    </Hidden>
  </SimpleGrid>
)

export const Basic = Template.bind({})
Basic.args = {}
