import React from "react";
type Options = {
    className?: string;
    screenSize?: number;
    ref?: any;
    styles?: {
        picture?: React.CSSProperties;
        img?: React.CSSProperties;
    };
    key?: any;
    classNames?: {
        picture?: string;
    };
};
export declare const createResponsiveImage: (image: any, options?: Options) => import("react/jsx-runtime").JSX.Element;
export {};
