import React from 'react';
import { BoxProps } from '@chakra-ui/react';
declare type Tab = {
    label: string;
    pathname: string;
    Icon?: React.ReactNode;
    onChangeOverride?: (pathname: string) => void;
};
declare type BottomNavigationProps = {
    tabs: Tab[];
    onChange: (pathname: string) => void;
    color?: BoxProps['color'];
    padding?: BoxProps['padding'];
    containerProps?: BoxProps;
    tabProps?: BoxProps;
};
declare const BottomNavigation: ({ tabs, onChange, padding, containerProps, tabProps }: BottomNavigationProps) => JSX.Element;
export default BottomNavigation;
