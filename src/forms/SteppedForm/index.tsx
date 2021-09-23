import React, { useState } from 'react'
import { Box, Text, Heading, HStack, IconButton, Icon, ButtonProps } from '@chakra-ui/react'
import SimpleForm, { Field } from '../SimpleForm'
import Stepper from '../../components/Stepper'
import { FiArrowLeft } from 'react-icons/fi'

type Step = {
  name: string
  description?: string
  fields: Field[]
}

export interface SteppedFormProps {
  steps: Step[]
  onFormSubmit: (data: Record<string, any>) => void
  customErrorMessages?: Record<string, string>
  buttonProps?: ButtonProps
}

const SteppedForm = ({ steps, customErrorMessages, buttonProps, onFormSubmit }: SteppedFormProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const setNextStep = () => setCurrentStep(currentStep + 1)
  const setPreviousStep = () => setCurrentStep(currentStep - 1)
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1
  const stepperSteps = steps.map((step) => step.name)
  const currentStepFields = steps?.[currentStep]?.fields
  const currentStepName = steps?.[currentStep]?.name
  const currentStepDescription = steps?.[currentStep]?.description
  const buttonLabel = isLastStep ? 'Submit' : 'Next'

  const onSubmit = (data: Record<string, any>) => {
    if (isLastStep) {
      onFormSubmit(data)
    } else {
      setNextStep()
    }
  }

  return (
    <Box>
      <Stepper steps={stepperSteps} currentStep={currentStep} />
      <HStack marginTop="1rem">
        {!isFirstStep && (
          <IconButton aria-label="Go back" variant="ghost" onClick={setPreviousStep}>
            <Icon as={FiArrowLeft} />
          </IconButton>
        )}
        <Heading size="lg">{currentStepName}</Heading>
      </HStack>
      {currentStepDescription && <Text marginTop="1rem">{currentStepDescription}</Text>}
      <Box marginTop="1rem">
        <SimpleForm
          fields={currentStepFields}
          onSubmit={onSubmit}
          buttonLabel={buttonLabel}
          customErrorMessages={customErrorMessages}
          buttonProps={buttonProps}
        />
      </Box>
    </Box>
  )
}

export default SteppedForm
