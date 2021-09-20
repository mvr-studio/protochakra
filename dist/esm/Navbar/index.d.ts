import React from 'react';
import { BoxProps } from '@chakra-ui/react';
declare type NavbarProps = {
    branding: React.ReactNode;
    maxWidth?: BoxProps['maxWidth'];
    children?: React.ReactNode;
} & BoxProps;
declare const Navbar: ({ branding, children, maxWidth, ...containerProps }: NavbarProps) => JSX.Element;
export default Navbar;
