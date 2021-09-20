/// <reference types="react" />
import { ButtonProps } from '@chakra-ui/react';
import { Field } from '../SimpleForm';
declare type Step = {
    name: string;
    description?: string;
    fields: Field[];
};
interface SteppedFormProps {
    steps: Step[];
    onFormSubmit: (data: Record<string, any>) => void;
    customErrorMessages?: Record<string, string>;
    buttonProps?: ButtonProps;
}
declare const SteppedForm: ({ steps, customErrorMessages, buttonProps, onFormSubmit }: SteppedFormProps) => JSX.Element;
export default SteppedForm;
