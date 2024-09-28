var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_MENU_ITEM_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreMenuItemFields on MenuItem {\n    uuid\n    name\n    description\n    menuCategory {\n      uuid\n      id\n    }\n    options\n    image\n    price\n  }\n"], ["\n  fragment CoreMenuItemFields on MenuItem {\n    uuid\n    name\n    description\n    menuCategory {\n      uuid\n      id\n    }\n    options\n    image\n    price\n  }\n"])));
var templateObject_1;
