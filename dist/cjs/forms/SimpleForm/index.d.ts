import { InputProps, TextareaProps, SelectProps, ButtonProps } from '@chakra-ui/react';
declare type FieldLabel = string;
declare type FieldOptions = {
    label: string;
    value: string;
    selected: boolean;
};
declare type DefaultInputProps = InputProps & TextareaProps & SelectProps;
export interface Field extends DefaultInputProps {
    label?: FieldLabel;
    helperText?: string;
    validation?: (zod: any) => void;
    isRequired?: boolean;
    selectOptions?: FieldOptions[];
}
export interface SimpleFormProps {
    fields: Field[];
    onSubmit: (data: Record<string, any>) => void;
    buttonLabel?: string;
    customErrorMessages?: Record<string, string>;
    buttonProps?: ButtonProps;
}
declare const SimpleForm: ({ fields, onSubmit, buttonLabel, buttonProps, customErrorMessages }: SimpleFormProps) => JSX.Element;
export default SimpleForm;
