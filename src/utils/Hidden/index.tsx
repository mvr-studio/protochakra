import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

type HiddenProps = {
  above?: 'sm' | 'md' | 'lg' | 'xl'
  below?: 'md' | 'lg' | 'xl' | '2xl'
  defaultDisplay?: BoxProps['display']
} & BoxProps

const BASE_ARRAY = [false, false, false, false, false]

const HIDDEN_ABOVE: Record<string, boolean[]> = {
  sm: [false, true, true, true, true],
  md: [false, false, true, true, true],
  lg: [false, false, false, true, true],
  xl: [false, false, false, false, true]
}

const HIDDEN_BELOW: Record<string, boolean[]> = {
  md: [true, false, false, false, false],
  lg: [true, true, false, false, false],
  xl: [true, true, true, false, false],
  '2xl': [true, true, true, true, false]
}

export const arrayToDisplay = (property: boolean[], defaultDisplay?: BoxProps['display']) =>
  property.map((value) => (value ? 'none' : defaultDisplay))
export const mergeBooleanArrays = (first: boolean[], second: boolean[]) => {
  return BASE_ARRAY.map((value, i) => value || first?.[i] || second?.[i] || false)
}

const Hidden = ({ above, below, display, defaultDisplay, ...restOfProps }: HiddenProps) => {
  const aboveArray = above ? HIDDEN_ABOVE[above] : []
  const belowArray = below ? HIDDEN_BELOW[below] : []
  const mergedArrays = mergeBooleanArrays(aboveArray, belowArray)
  const hiddenDisplay = arrayToDisplay(mergedArrays, defaultDisplay || 'block') as BoxProps['display']

  return <Box display={hiddenDisplay || display} {...restOfProps} />
}

export default Hidden
