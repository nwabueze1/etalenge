import { FC } from "react";
type TArrowButton = {
    orientation: "left" | "right";
    onClick?: () => void;
    className?: string;
};
export declare const ArrowButton: FC<TArrowButton>;
export {};
