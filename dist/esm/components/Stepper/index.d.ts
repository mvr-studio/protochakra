/// <reference types="react" />
import { BoxProps } from '@chakra-ui/react';
declare type Color = BoxProps['color'];
export interface StepperProps {
    steps: string[];
    currentStep: number;
    activeColor?: Color;
    inactiveColor?: Color;
}
declare const Stepper: ({ steps, currentStep, activeColor, inactiveColor }: StepperProps) => JSX.Element;
export default Stepper;
