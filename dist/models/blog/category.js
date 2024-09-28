var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_BLOG_CATEGORY_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreCategoryFields on Category {\n    uuid\n    name\n  }\n"], ["\n  fragment CoreCategoryFields on Category {\n    uuid\n    name\n  }\n"])));
var templateObject_1;
