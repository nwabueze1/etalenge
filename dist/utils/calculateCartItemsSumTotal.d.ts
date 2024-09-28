import { CoreCartFields } from "../models";
export declare const calculateCartItemsSumTotal: (cart: CoreCartFields) => number;
export declare const calculateOptionsTotal: (options: any[], quantity: number) => number;
export declare const calculateCartSubTotal: (cart: CoreCartFields, uuid?: string) => number;
