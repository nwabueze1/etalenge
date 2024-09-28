import { Dispatch, FC, SetStateAction } from "react";
import { ClassNameMap } from "@mui/material";
type TSearchbar = {
    onSearch?: (value: string) => void;
    classes: ClassNameMap<string>;
    loading: boolean;
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
};
export declare const Searchbar: FC<TSearchbar>;
export {};
