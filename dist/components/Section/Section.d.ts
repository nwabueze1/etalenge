import { CSSProperties, FC, ReactNode } from "react";
type TSection = {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    background: string;
    styles?: CSSProperties;
    isActive?: boolean;
};
export declare const Section: FC<TSection>;
export {};
