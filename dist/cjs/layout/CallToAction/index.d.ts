import React from 'react';
import { BoxProps } from '@chakra-ui/react';
declare type CallToActionProps = {
    heading: string;
    description?: string;
    children: React.ReactNode;
} & BoxProps;
declare const CallToAction: ({ heading, description, children, ...containerProps }: CallToActionProps) => JSX.Element;
export default CallToAction;
