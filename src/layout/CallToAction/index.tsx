import React from 'react'
import { Flex, BoxProps, Box, Heading, Text, Container } from '@chakra-ui/react'

type CallToActionProps = {
  heading: string
  description?: string
  children: React.ReactNode
  maxWidth?: BoxProps['maxWidth']
} & BoxProps

const CallToAction = ({ heading, description, children, maxWidth, ...containerProps }: CallToActionProps) => {
  return (
    <Box paddingY="2rem" data-testid="protochakra.cta" {...containerProps}>
      <Container maxWidth={maxWidth || 'container.xl'}>
        <Flex justify="space-between" align="center">
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
      </Container>
    </Box>
  )
}

export default CallToAction
