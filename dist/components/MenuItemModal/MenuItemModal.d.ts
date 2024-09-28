import { FC } from "react";
import { CoreMenuItemFields } from "../../models";
type TMenuItemModalProps = {
    menuItem: CoreMenuItemFields;
    open: boolean;
    onClose: () => void;
};
export declare const MenuItemModal: FC<TMenuItemModalProps>;
export {};
