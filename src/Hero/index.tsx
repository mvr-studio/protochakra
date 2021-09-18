import React from 'react'
import { Box, Container, SimpleGrid, Heading, Center, Text, Stack } from '@chakra-ui/react'

type FooterProps = {
  maxWidth?: string
  heading?: string
  content?: string
  Addons?: React.ReactNode
  children?: React.ReactNode
}

const Hero = ({ maxWidth, heading, content, Addons, children, ...containerProps }: FooterProps) => {
  return (
    <Box marginTop="2rem" {...containerProps}>
      <Container maxWidth={maxWidth || 'container.xl'}>
        <SimpleGrid columns={[1, 1, 2]} gridGap="2rem">
          <Center flexDirection="column" alignItems="flex-start">
            <Heading size="lg">{heading}</Heading>
            <Text lineHeight="1.75" marginTop="1rem">
              {content}
            </Text>
            {Addons && (
              <Box marginTop="1rem">
                <Addons />
              </Box>
            )}
          </Center>
          <Center display={['none', 'none', 'flex']}>{children}</Center>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Hero
