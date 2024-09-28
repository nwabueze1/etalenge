var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_POST_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CorePostFields on Post {\n    uuid\n    title\n    featured_image\n    excerpt\n    published_at\n    slug\n  }\n"], ["\n  fragment CorePostFields on Post {\n    uuid\n    title\n    featured_image\n    excerpt\n    published_at\n    slug\n  }\n"])));
var templateObject_1;
