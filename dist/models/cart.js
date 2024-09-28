var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
import { CORE_MENU_ITEM_FIELDS } from './restaurant';
export var CORE_CART_ITEM_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  fragment CoreCartItemFields on CartItem {\n    uuid\n    options\n    quantity\n    detail\n    menuItem {\n      ...CoreMenuItemFields\n    }\n    cart {\n      cartItems {\n        uuid\n      }\n    }\n  }\n"], ["\n  ", "\n  fragment CoreCartItemFields on CartItem {\n    uuid\n    options\n    quantity\n    detail\n    menuItem {\n      ...CoreMenuItemFields\n    }\n    cart {\n      cartItems {\n        uuid\n      }\n    }\n  }\n"])), CORE_MENU_ITEM_FIELDS);
export var CORE_CART_FIELDS = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fragment CoreCartFields on Cart {\n    uuid\n    currency\n    cartItems {\n      uuid\n      quantity\n      options\n      detail\n      menuItem {\n        image\n      }\n    }\n  }\n"], ["\n  fragment CoreCartFields on Cart {\n    uuid\n    currency\n    cartItems {\n      uuid\n      quantity\n      options\n      detail\n      menuItem {\n        image\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
