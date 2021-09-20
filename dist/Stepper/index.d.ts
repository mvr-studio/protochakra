/// <reference types="react" />
interface StepperProps {
    steps: string[];
    currentStep: number;
}
declare const Stepper: ({ steps, currentStep }: StepperProps) => JSX.Element;
export default Stepper;
