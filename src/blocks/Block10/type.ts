import { MenuConfigType } from "./helpers";

export type TCart = {
  count: number;
  loading: boolean;
  options: MenuConfigType[];
  errors: number[];
};
export type TOption = {
  name: string;
  amount: number;
};