import React from 'react'
import { Box, Container, SimpleGrid, Heading, Center, Text, BoxProps } from '@chakra-ui/react'

type HeroProps = {
  maxWidth?: BoxProps['maxWidth']
  heading?: string
  content?: string
  Addons?: React.ElementType
  children?: React.ReactNode
} & BoxProps

const Hero = ({ maxWidth, heading, content, Addons, children, ...containerProps }: HeroProps) => {
  return (
    <Box {...containerProps}>
      <Container maxWidth={maxWidth || 'container.xl'}>
        <SimpleGrid columns={[1, 1, 2]} gridGap="2rem">
          <Center flexDirection="column" alignItems="flex-start">
            <Heading size="lg" data-testid="protochakra.hero.heading">
              {heading}
            </Heading>
            <Text lineHeight="1.75" marginTop="1rem" data-testid="protochakra.hero.content">
              {content}
            </Text>
            {Addons && (
              <Box marginTop="1rem" data-testid="protochakra.hero.addons">
                <Addons />
              </Box>
            )}
          </Center>
          <Center display={['none', 'none', 'flex']} data-testid="protochakra.hero.media">
            {children}
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Hero
