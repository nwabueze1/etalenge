import { TMenu } from "./menu";

export type TBankInfo = {
  account_name: string;
  account_number: string;
  bank_name: string;
  currency: string;
  delivery_fee: number;
};
export type TRestaurant = {
  activeMenus: Partial<TMenu[]>;
  cover_image: string;
  bank_info: Partial<TBankInfo>;
  menus: TMenu;
};
