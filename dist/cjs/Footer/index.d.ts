import React from 'react';
import { BoxProps } from '@chakra-ui/react';
declare type FooterProps = {
    maxWidth?: BoxProps['maxWidth'];
    children?: React.ReactNode;
    copyrightOwner?: string;
} & BoxProps;
declare const Footer: ({ copyrightOwner, children, maxWidth, ...containerProps }: FooterProps) => JSX.Element;
export default Footer;
