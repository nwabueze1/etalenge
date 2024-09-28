var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_TAG_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreTagFields on Tag {\n    name\n    uuid\n  }\n"], ["\n  fragment CoreTagFields on Tag {\n    name\n    uuid\n  }\n"])));
var templateObject_1;
