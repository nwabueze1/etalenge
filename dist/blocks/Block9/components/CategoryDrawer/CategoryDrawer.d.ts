import { FC, ReactNode } from "react";
type TCategoryDrawer = {
    open: boolean;
    onClose?: () => void;
    children?: ReactNode;
};
export declare const CategoryDrawer: FC<TCategoryDrawer>;
export {};
