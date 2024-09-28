var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_MENU_FIELDS, CORE_MENU_ITEM_FIELDS } from "../../../models";
export var GQL_GET_MENU_ITEM = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  query GqlGetMenuItemByUuid($uuid: ID!) {\n    getMenuItem(uuid: $uuid) {\n      ...CoreMenuItemFields\n      menu {\n        ...CoreMenuFields\n      }\n    }\n  }\n"], ["\n  ", "\n  ", "\n  query GqlGetMenuItemByUuid($uuid: ID!) {\n    getMenuItem(uuid: $uuid) {\n      ...CoreMenuItemFields\n      menu {\n        ...CoreMenuFields\n      }\n    }\n  }\n"])), CORE_MENU_FIELDS, CORE_MENU_ITEM_FIELDS);
var templateObject_1;
