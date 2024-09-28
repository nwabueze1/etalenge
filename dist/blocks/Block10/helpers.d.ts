import { CoreMenuItemFields } from "../../models";
export type MenuConfigType = {
    name: string;
    uuid: string;
    options: {
        name: string;
        amount: number;
    }[];
    selectedChoices: {
        name: string;
        amount: number;
    }[];
    type: "selection" | "deselection" | "extras";
};
export declare const extractMenuItemOptions: (menu_item: CoreMenuItemFields) => {
    initialState: MenuConfigType[];
};
export declare const calculateSumOfOption: (options: MenuConfigType[]) => number;
