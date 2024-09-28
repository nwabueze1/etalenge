var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_MENU_CATEGORY_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreMenuCategoryFields on MenuCategory {\n    uuid\n    id\n    title\n    description\n  }\n"], ["\n  fragment CoreMenuCategoryFields on MenuCategory {\n    uuid\n    id\n    title\n    description\n  }\n"])));
var templateObject_1;
