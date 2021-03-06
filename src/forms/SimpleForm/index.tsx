import React from 'react'
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Textarea,
  Stack,
  FormErrorMessage,
  Select,
  InputProps,
  TextareaProps,
  SelectProps,
  Checkbox,
  ButtonProps
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const DEFAULT_FORM_ERRORS: Record<string, string> = {
  required: 'This field is required.'
}

type FieldLabel = string
type FieldOptions = {
  label: string
  value: string
  selected: boolean
}

type DefaultInputProps = InputProps & TextareaProps & SelectProps

export interface Field extends DefaultInputProps {
  label?: FieldLabel
  helperText?: string
  validation?: (zod: any) => void
  isRequired?: boolean
  selectOptions?: FieldOptions[]
}

const FormField = React.forwardRef(({ type, selectOptions, placeholder, ...rest }: Field, ref: any) => {
  switch (type) {
    case 'textarea':
      return <Textarea placeholder={placeholder} ref={ref} {...rest} />
    case 'select':
      return (
        <Select placeholder={placeholder || 'Select one'} ref={ref} {...rest}>
          {selectOptions?.map((option) => (
            <option value={option.value} selected={option.selected}>
              {option.label}
            </option>
          ))}
        </Select>
      )
    case 'checkbox':
      return (
        // @ts-ignore
        <Checkbox size="lg" ref={ref} {...rest}>
          {placeholder}
        </Checkbox>
      )
    default:
      return <Input placeholder={placeholder} type={type} ref={ref} {...rest} />
  }
})

export interface SimpleFormProps {
  fields: Field[]
  onSubmit: (data: Record<string, any>) => void
  buttonLabel?: string
  customErrorMessages?: Record<string, string>
  buttonProps?: ButtonProps
}

const SimpleForm = ({ fields, onSubmit, buttonLabel, buttonProps, customErrorMessages }: SimpleFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()
  const getFormError = (errorType: string) => customErrorMessages?.[errorType] || DEFAULT_FORM_ERRORS?.[errorType]

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} gridGap="0.5rem" data-testid="protochakra.simpleForm" noValidate>
      {fields.map((field, i) => {
        if (!field.name) throw new Error('name property missing for field')
        return (
          <FormControl
            key={i}
            isRequired={field?.isRequired}
            isInvalid={!!errors?.[field.name]}
            marginTop="1rem"
            data-testid="protochakra.simpleForm.control"
          >
            {field?.label && <FormLabel data-testid="protochakra.simpleForm.label">{field.label}</FormLabel>}
            <FormField
              type={field?.type}
              selectOptions={field?.selectOptions}
              placeholder={field?.placeholder}
              data-testid="protochakra.simpleForm.field"
              {...register(field.name, { required: field?.isRequired })}
              {...field}
            />
            <FormErrorMessage data-testid="protochakra.simpleForm.error">
              {getFormError(errors?.[field.name]?.type)}
            </FormErrorMessage>
            {field?.helperText && (
              <FormHelperText data-testid="protochakra.simpleForm.helper">{field.helperText}</FormHelperText>
            )}
          </FormControl>
        )
      })}
      <Box>
        <Button
          type="submit"
          size="lg"
          isLoading={isSubmitting}
          data-testid="protochakra.simpleForm.submit"
          {...buttonProps}
        >
          {buttonLabel || 'Submit'}
        </Button>
      </Box>
    </Stack>
  )
}

export default SimpleForm
