import { CoreMenuItemFields } from "../../models";
export type TMenuItemCardProps = {
    menuItem: CoreMenuItemFields;
    currency: string;
    mode?: "view" | "edit";
    isSsr?: boolean;
    screenSize?: number;
};
