export type TAddToCartVariables = {
    detail: string;
    quantity: number;
    options?: string;
    menu_item_uuid: string;
};
export declare const useAddToCart: () => (variables: TAddToCartVariables) => Promise<any>;
