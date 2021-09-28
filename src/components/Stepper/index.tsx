import React from 'react'
import { Center, Icon, Flex, Text, Box, BoxProps } from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

type Color = BoxProps['color']

type IndicatorProps = {
  stepNumber: number
  isActive: boolean
  isCurrent: boolean
  activeColor?: Color
  inactiveColor?: Color
}

const Indicator = ({ stepNumber, isActive, isCurrent, activeColor, inactiveColor }: IndicatorProps) => {
  return (
    <Center
      height="2rem"
      width="2rem"
      borderRadius="50%"
      backgroundColor={isActive ? activeColor : inactiveColor}
      color="white"
      data-testid="protochakra.stepper.indicator"
    >
      {isActive ? isCurrent ? stepNumber : <Icon as={FiCheck} /> : stepNumber}
    </Center>
  )
}

const Line = () => {
  return <Box flex={1} height="1px" width="100%" backgroundColor="gray.300" marginTop="1rem" />
}

export interface StepperProps {
  steps: string[]
  currentStep: number
  activeColor?: Color
  inactiveColor?: Color
}

const Stepper = ({ steps, currentStep, activeColor = 'blue.600', inactiveColor = 'gray.500' }: StepperProps) => {
  const isFirstStep = (i: number) => i !== 0
  const isLastStep = (i: number) => i !== steps.length - 1
  const isActive = (i: number) => i <= currentStep

  return (
    <Flex justify="space-between" data-testid="protochakra.stepper" data-current-step={currentStep}>
      {steps.map((step, i) => (
        <>
          {isFirstStep(i) && <Line />}
          <Center
            flexDirection="column"
            data-testid="protochakra.step"
            data-is-active={isActive(i)}
            data-is-current={i === currentStep}
          >
            <Indicator
              key={i}
              stepNumber={i + 1}
              isActive={isActive(i)}
              isCurrent={i === currentStep}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
            />
            <Text fontSize="14px" marginTop="0.25rem" color={isActive(i) ? activeColor : inactiveColor}>
              {step}
            </Text>
          </Center>
          {isLastStep(i) && <Line />}
        </>
      ))}
    </Flex>
  )
}

export default Stepper
