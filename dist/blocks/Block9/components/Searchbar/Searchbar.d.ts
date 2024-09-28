import { FC } from "react";
import { ClassNameMap } from "@mui/material";
type TSearchbar = {
    onSearch?: (value: string) => void;
    classes: ClassNameMap<string>;
    loading: boolean;
};
export declare const Searchbar: FC<TSearchbar>;
export {};
