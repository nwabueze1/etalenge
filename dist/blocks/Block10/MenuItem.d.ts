import { FC } from "react";
import { CoreMenuItemFields } from "../../models";
import { TAddToCartVariables } from "../../hooks/useAddToCart";
export declare const MenuItem: FC<{
    menu_item: CoreMenuItemFields;
    onItemAddedToCart?: (args: TAddToCartVariables) => void;
    isSsr?: boolean;
    screenSize?: number;
}>;
