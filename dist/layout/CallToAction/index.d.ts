import React from 'react';
import { BoxProps } from '@chakra-ui/react';
declare type CallToActionProps = {
    heading: string;
    description?: string;
    children: React.ReactNode;
    maxWidth?: BoxProps['maxWidth'];
} & BoxProps;
declare const CallToAction: ({ heading, description, children, maxWidth, ...containerProps }: CallToActionProps) => JSX.Element;
export default CallToAction;
