var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_CART_ITEM_FIELDS } from "../models";
export var CREATE_CART = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation GqlCreateCart($site_uuid: ID, $currency: String) {\n    createCart(input: { site_uuid: $site_uuid, currency: $currency }) {\n      uuid\n      expires\n    }\n  }\n"], ["\n  mutation GqlCreateCart($site_uuid: ID, $currency: String) {\n    createCart(input: { site_uuid: $site_uuid, currency: $currency }) {\n      uuid\n      expires\n    }\n  }\n"])));
export var CREATE_CART_ITEM = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  mutation GqlCreateCartItem($detail: String!, $quantity: Int!, $cart_uuid: ID, $menu_item_uuid: ID, $options: String) {\n    createCartItem(\n      input: {\n        detail: $detail\n        quantity: $quantity\n        cart_uuid: $cart_uuid\n        menu_item_uuid: $menu_item_uuid\n        options: $options\n      }\n    ) {\n      ...CoreCartItemFields\n    }\n  }\n"], ["\n  ", "\n  mutation GqlCreateCartItem($detail: String!, $quantity: Int!, $cart_uuid: ID, $menu_item_uuid: ID, $options: String) {\n    createCartItem(\n      input: {\n        detail: $detail\n        quantity: $quantity\n        cart_uuid: $cart_uuid\n        menu_item_uuid: $menu_item_uuid\n        options: $options\n      }\n    ) {\n      ...CoreCartItemFields\n    }\n  }\n"])), CORE_CART_ITEM_FIELDS);
var templateObject_1, templateObject_2;
