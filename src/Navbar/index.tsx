import React, { useState } from 'react'
import { Box, Container, BoxProps, Flex, HStack } from '@chakra-ui/react'
import { Slant as Hamburger } from 'hamburger-react'

type NavbarProps = {
  branding: React.ReactNode
  maxWidth?: string
  children?: React.ReactNode
} & BoxProps

const Navbar = ({ branding, children, maxWidth, ...containerProps }: NavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => setIsExpanded(!isExpanded)
  const mobileDisplay = isExpanded ? 'flex' : 'none'

  return (
    <Box paddingY="0.5rem" {...containerProps}>
      <Container maxWidth={maxWidth || 'container.xl'}>
        <Flex display={['block', 'block', 'flex']} justify="space-between" align="center">
          <Flex justify="space-between" align="center">
            <Box fontWeight={700} fontSize="1.5rem" data-testid="protochakra.navbar.branding">
              {branding}
            </Box>
            <Box display={['block', 'block', 'none']} data-testid="protochakra.navbar.toggle">
              <Hamburger toggled={isExpanded} toggle={toggleExpanded} size={28} />
            </Box>
          </Flex>
          <HStack
            display={[mobileDisplay, mobileDisplay, 'flex']}
            marginTop={['1rem', '1rem', 0]}
            flexDirection={['column', 'column', 'row']}
            gridGap="1.5rem"
          >
            {children}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
