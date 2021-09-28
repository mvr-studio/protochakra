import React from 'react'
import { Flex, BoxProps, Box, Heading, Text } from '@chakra-ui/react'

type CallToActionProps = {
  heading: string
  description?: string
  children: React.ReactNode
} & BoxProps

const CallToAction = ({ heading, description, children, ...containerProps }: CallToActionProps) => {
  return (
    <Flex justify="space-between" align="center" data-testid="protochakra.cta" {...containerProps}>
      <Box>
        <Heading size="lg" data-testid="protochakra.cta.heading">
          {heading}
        </Heading>
        {description && (
          <Text marginTop="1rem" data-testid="protochakra.cta.description">
            {description}
          </Text>
        )}
      </Box>
      <Box data-testid="protochakra.cta.addons">{children}</Box>
    </Flex>
  )
}

export default CallToAction