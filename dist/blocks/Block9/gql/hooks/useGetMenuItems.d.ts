import { CorePaginatorInfoProps } from "../../../../components";
import { CoreMenuItemFields } from "../../../../models";
export type TGetMenuItemsVariables = {
    page?: number;
    first?: number;
    search?: string;
    filter?: {
        column: string;
        value: string;
        operator: string;
    }[];
    onDataReceived?: (data: TResponse) => void;
};
export type TResponse = {
    items: CoreMenuItemFields[];
    paginatorInfo: CorePaginatorInfoProps;
};
export declare const useGetMenuItems: (menu_uuid: string) => ({ onDataReceived, ...variables }: TGetMenuItemsVariables) => Promise<TResponse | void>;
