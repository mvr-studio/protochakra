import React from 'react';
import { BoxProps } from '@chakra-ui/react';
declare type HeroProps = {
    maxWidth?: BoxProps['maxWidth'];
    heading?: string;
    content?: string;
    Addons?: React.ElementType;
    children?: React.ReactNode;
} & BoxProps;
declare const Hero: ({ maxWidth, heading, content, Addons, children, ...containerProps }: HeroProps) => JSX.Element;
export default Hero;
