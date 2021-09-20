import React from 'react';
declare type FooterProps = {
    maxWidth?: string;
    heading?: string;
    content?: string;
    Addons?: React.ElementType;
    children?: React.ReactNode;
};
declare const Hero: ({ maxWidth, heading, content, Addons, children, ...containerProps }: FooterProps) => JSX.Element;
export default Hero;
