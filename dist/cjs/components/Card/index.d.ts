import { BoxProps } from '@chakra-ui/react';
declare type CardProps = {
    shadowOffsetX?: string | number;
    shadowOffsetY?: string | number;
    blurRadius?: string;
    spreadRadius?: string | number;
    shadowColor?: string;
    shadowAlpha?: number;
} & BoxProps;
export declare const CARD_DEFAULTS: {
    shadowOffsetX: number;
    shadowOffsetY: string;
    blurRadius: string;
    spreadRadius: number;
    shadowColor: string;
    shadowAlpha: number;
    borderRadius: string;
    padding: string;
    border: string;
};
declare const Card: ({ children, shadowOffsetX, shadowOffsetY, blurRadius, spreadRadius, shadowColor, shadowAlpha, borderRadius, padding, border, boxShadow, ...rest }: CardProps) => JSX.Element;
export default Card;
