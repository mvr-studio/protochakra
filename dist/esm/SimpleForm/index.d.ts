/// <reference types="react" />
import { ButtonProps } from '@chakra-ui/react';
declare type FieldLabel = string;
declare type FieldName = string;
declare type FieldType = string;
declare type FieldOptions = {
    label: string;
    value: string;
};
export declare type Field = {
    label?: FieldLabel;
    name: FieldName;
    type?: FieldType;
    helperText?: string;
    validation?: (zod: any) => void;
    isRequired?: boolean;
    selectOptions?: FieldOptions[];
    placeholder?: string;
};
export interface SimpleFormProps {
    fields: Field[];
    onSubmit: (data: Record<string, any>) => void;
    buttonLabel?: string;
    customErrorMessages?: Record<string, string>;
    buttonProps?: ButtonProps;
}
declare const SimpleForm: ({ fields, onSubmit, buttonLabel, buttonProps, customErrorMessages }: SimpleFormProps) => JSX.Element;
export default SimpleForm;
