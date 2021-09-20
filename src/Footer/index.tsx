import React from 'react'
import { Box, Container, BoxProps, SimpleGrid } from '@chakra-ui/react'

type FooterProps = {
  maxWidth?: BoxProps['maxWidth']
  children?: React.ReactNode
  copyrightOwner?: string
} & BoxProps

const Footer = ({ copyrightOwner, children, maxWidth, ...containerProps }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <Box paddingY="2rem" {...containerProps}>
      <Container maxWidth={maxWidth || 'container.xl'}>
        <SimpleGrid columns={[1, 1, 4]} gridGap="2rem">
          {children}
        </SimpleGrid>
      </Container>
      {copyrightOwner && (
        <Container
          maxWidth={maxWidth || 'container.xl'}
          textAlign={['left', 'left', 'center']}
          marginTop="2rem"
          data-testid="protochakra.footer.copyrightOwner"
        >
          © {currentYear} {copyrightOwner}
        </Container>
      )}
    </Box>
  )
}

export default Footer
