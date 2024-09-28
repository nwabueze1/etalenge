import { CoreCartItemFields } from "../models";
import { calculateSumOfOption } from "../blocks/Block10/helpers";

export const calculateCartItemSumTotal = (item: CoreCartItemFields) => {
  return (item.menuItem.price + calculateSumOfOption(JSON.parse(item.options))) * item.quantity;
};
