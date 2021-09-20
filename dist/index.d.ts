/// <reference types="react" />
declare const ProtoChakra: {
    Footer: ({ copyrightOwner, children, maxWidth, ...containerProps }: {
        maxWidth?: string | undefined;
        children?: import("react").ReactNode;
        copyrightOwner?: string | undefined;
    } & import("@chakra-ui/layout").BoxProps) => JSX.Element;
    Hero: ({ maxWidth, heading, content, Addons, children, ...containerProps }: {
        maxWidth?: string | undefined;
        heading?: string | undefined;
        content?: string | undefined;
        Addons?: import("react").ElementType<any> | undefined;
        children?: import("react").ReactNode;
    }) => JSX.Element;
    MotionBox: import("framer-motion").CustomDomComponent<any>;
    Navbar: ({ branding, children, maxWidth, ...containerProps }: {
        branding: import("react").ReactNode;
        maxWidth?: string | undefined;
        children?: import("react").ReactNode;
    } & import("@chakra-ui/layout").BoxProps) => JSX.Element;
    SimpleForm: ({ fields, onSubmit, buttonLabel, buttonProps, customErrorMessages }: import("./SimpleForm").SimpleFormProps) => JSX.Element;
    SteppedForm: ({ steps, customErrorMessages, buttonProps, onFormSubmit }: import("./SteppedForm").SteppedFormProps) => JSX.Element;
    Stepper: ({ steps, currentStep }: import("./Stepper").StepperProps) => JSX.Element;
};
export default ProtoChakra;
