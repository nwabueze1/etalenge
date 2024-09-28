import { FC, ReactNode } from "react";
type TButton = {
    mode?: "view" | "edit";
    href?: string;
    children: ReactNode;
    size: "lg" | "md" | "sm";
    className?: string;
    onClick?: () => void;
    variant: "contained" | "outlined" | "text";
    type?: "submit" | "button";
};
export declare const Button: FC<TButton>;
export {};
