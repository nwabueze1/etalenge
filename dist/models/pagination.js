var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_PAGINATOR_INFO_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CorePaginatorInfo on PaginatorInfo {\n    currentPage\n    lastPage\n  }\n"], ["\n  fragment CorePaginatorInfo on PaginatorInfo {\n    currentPage\n    lastPage\n  }\n"])));
var templateObject_1;
