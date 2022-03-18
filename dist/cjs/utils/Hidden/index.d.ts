import { BoxProps } from '@chakra-ui/react';
declare type HiddenProps = {
    above?: 'sm' | 'md' | 'lg' | 'xl';
    below?: 'md' | 'lg' | 'xl' | '2xl';
    defaultDisplay?: BoxProps['display'];
} & BoxProps;
export declare const arrayToDisplay: (property: boolean[], defaultDisplay?: BoxProps['display']) => BoxProps['display'][];
export declare const mergeBooleanArrays: (first: boolean[], second: boolean[]) => boolean[];
declare const Hidden: ({ above, below, display, defaultDisplay, ...restOfProps }: HiddenProps) => JSX.Element;
export default Hidden;
