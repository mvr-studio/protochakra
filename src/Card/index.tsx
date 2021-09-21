import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { rgba } from 'polished'

type CardProps = {
  shadowOffsetX?: string | number
  shadowOffsetY?: string | number
  blurRadius?: string
  spreadRadius?: string | number
  shadowColor?: string
  shadowAlpha?: number
} & BoxProps

export const CARD_DEFAULTS = {
  shadowOffsetX: 0,
  shadowOffsetY: '0.25rem',
  blurRadius: '0.25rem',
  spreadRadius: 0,
  shadowColor: '#000000',
  shadowAlpha: 0.075,
  borderRadius: '0.5rem',
  padding: '1rem',
  border: '1px #E9EAF2 solid'
}

const Card = ({
  children,
  shadowOffsetX = CARD_DEFAULTS.shadowOffsetX,
  shadowOffsetY = CARD_DEFAULTS.shadowOffsetY,
  blurRadius = CARD_DEFAULTS.blurRadius,
  spreadRadius = CARD_DEFAULTS.spreadRadius,
  shadowColor = CARD_DEFAULTS.shadowColor,
  shadowAlpha = CARD_DEFAULTS.shadowAlpha,
  borderRadius = CARD_DEFAULTS.borderRadius,
  padding = CARD_DEFAULTS.padding,
  border = CARD_DEFAULTS.border,
  boxShadow,
  ...rest
}: CardProps) => {
  const computedShadow =
    boxShadow || `${shadowOffsetX} ${shadowOffsetY} ${blurRadius} ${spreadRadius} ${rgba(shadowColor, shadowAlpha)}`

  return (
    <Box
      boxShadow={computedShadow}
      borderRadius={borderRadius}
      padding={padding}
      border={border}
      data-testid="protochakra.card"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Card
