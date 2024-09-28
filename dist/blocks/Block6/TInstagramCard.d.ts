import { CustomThemeProps } from "../../type";
import { FC } from "react";
import { MediaValue } from "../../helper";
type TInstagramCard = {
    config: CustomThemeProps;
    index: number;
    onClick?: (index: number) => void;
    mode?: "view" | "edit";
    image?: MediaValue;
    screenSize?: number;
};
export declare const InstagramCard: FC<TInstagramCard>;
export {};
