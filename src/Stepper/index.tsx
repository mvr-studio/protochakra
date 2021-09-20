import React from 'react'
import { Center, Icon, Flex, Text, Box } from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

interface IndicatorProps {
  stepNumber: number
  isActive: boolean
  isCurrent: boolean
}

const Indicator = ({ stepNumber, isActive, isCurrent }: IndicatorProps) => {
  return (
    <Center
      height="2rem"
      width="2rem"
      borderRadius="50%"
      backgroundColor={isActive ? 'blue.500' : 'gray.500'}
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
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
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
            <Indicator key={i} stepNumber={i + 1} isActive={isActive(i)} isCurrent={i === currentStep} />
            <Text fontSize="14px" marginTop="0.25rem" color={isActive(i) ? 'blue.600' : 'gray.500'}>
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
