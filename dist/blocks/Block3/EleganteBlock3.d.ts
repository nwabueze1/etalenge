import { TBlockConfig } from "../../type";
import { FC } from "react";
import { ClassNameMap } from "@mui/material";
type TComment = {
    title: string;
    description: string;
    userName: string;
    userDescription: string;
    image: {
        src: string;
    };
    user: {
        name: string;
        description: string;
        image: {
            src: string;
        };
    };
    classes: ClassNameMap<string>;
    screenSize?: number;
};
export declare const EleganteBlock3: FC<TBlockConfig>;
export declare const Comment: FC<TComment>;
export {};
