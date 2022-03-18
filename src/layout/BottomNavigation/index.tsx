import React from 'react'
import { Box, BoxProps, HStack, Stack, Text, Icon } from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'

type Tab = {
  label: string
  pathname: string
  Icon?: React.ReactNode
  onChangeOverride?: (pathname: string) => void
}

type BottomNavigationProps = {
  tabs: Tab[]
  onChange: (pathname: string) => void
  color?: BoxProps['color']
  padding?: BoxProps['padding']
  containerProps?: BoxProps
  tabProps?: BoxProps
}

const BottomNavigation = ({ tabs, onChange, padding, containerProps, tabProps }: BottomNavigationProps) => {
  return (
    <Box padding={'0.5rem 1rem 0.75rem' || padding} data-testid="protochakra.bottomNavigation" {...containerProps}>
      <HStack justify="space-around">
        {tabs.map((tab, i) => (
          <Stack
            key={i}
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={() => (tab.onChangeOverride ? tab.onChangeOverride(tab.pathname) : onChange(tab.pathname))}
            {...tabProps}
          >
            <Icon as={(tab.Icon as any) || QuestionOutlineIcon} boxSize="1.5rem" />
            <Text fontSize="0.75rem" lineHeight={0.5}>
              {tab.label}
            </Text>
          </Stack>
        ))}
      </HStack>
    </Box>
  )
}

export default BottomNavigation
