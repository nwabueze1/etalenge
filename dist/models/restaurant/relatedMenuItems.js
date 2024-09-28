var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_RELATED_MENU_ITEMS_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreRelatedMenuItemsFields on MenuItem {\n    image\n    price\n    name\n    slug\n  }\n"], ["\n  fragment CoreRelatedMenuItemsFields on MenuItem {\n    image\n    price\n    name\n    slug\n  }\n"])));
var templateObject_1;
