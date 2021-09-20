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
type FieldName = string
type FieldType = string
type FieldOptions = {
  label: string
  value: string
}

export type Field = {
  label?: FieldLabel
  name: FieldName
  type?: FieldType
  helperText?: string
  validation?: (zod: any) => void
  isRequired?: boolean
  selectOptions?: FieldOptions[]
  placeholder?: string
}

type DefaultInputProps = InputProps & TextareaProps & SelectProps

interface FormFieldProps extends DefaultInputProps {
  name: FieldName
  type?: FieldType
  selectOptions?: FieldOptions[]
}

export interface SimpleFormProps {
  fields: Field[]
  onSubmit: (data: Record<string, any>) => void
  buttonLabel?: string
  customErrorMessages?: Record<string, string>
  buttonProps?: ButtonProps
}

const FormField = React.forwardRef(({ type, selectOptions, placeholder, ...rest }: FormFieldProps, ref: any) => {
  switch (type) {
    case 'textarea':
      return <Textarea placeholder={placeholder} ref={ref} {...rest} />
    case 'select':
      return (
        <Select placeholder={placeholder || 'Select one'} ref={ref} {...rest}>
          {selectOptions?.map((option) => (
            <option value={option.value}>{option.label}</option>
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

const SimpleForm = ({ fields, onSubmit, buttonLabel, buttonProps, customErrorMessages }: SimpleFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()
  const getFormError = (errorType: string) => customErrorMessages?.[errorType] || DEFAULT_FORM_ERRORS?.[errorType]

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} gridGap="0.5rem" data-testid="protochakra.simpleForm" noValidate>
      {fields.map((field) => (
        <FormControl
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
          />
          <FormErrorMessage data-testid="protochakra.simpleForm.error">
            {getFormError(errors?.[field.name]?.type)}
          </FormErrorMessage>
          {field?.helperText && (
            <FormHelperText data-testid="protochakra.simpleForm.helper">{field.helperText}</FormHelperText>
          )}
        </FormControl>
      ))}
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
