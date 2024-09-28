var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_AUTHOR_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreAuthorFields on User {\n    name\n    uuid\n  }\n"], ["\n  fragment CoreAuthorFields on User {\n    name\n    uuid\n  }\n"])));
var templateObject_1;
