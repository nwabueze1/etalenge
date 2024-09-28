import { calculateSumOfOption } from "../blocks/Block10/helpers";
export var calculateCartItemSumTotal = function (item) {
    return (item.menuItem.price + calculateSumOfOption(JSON.parse(item.options))) * item.quantity;
};
