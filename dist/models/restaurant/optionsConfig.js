var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_MENU_OPTIONCONFIG_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreMenuOptionsConfigFields on MenuOptionsConfig {\n    name\n    uuid\n    options {\n      deselection {\n        amount\n        name\n      }\n      extras {\n        amount\n        name\n      }\n      selection {\n        amount\n        name\n      }\n    }\n  }\n"], ["\n  fragment CoreMenuOptionsConfigFields on MenuOptionsConfig {\n    name\n    uuid\n    options {\n      deselection {\n        amount\n        name\n      }\n      extras {\n        amount\n        name\n      }\n      selection {\n        amount\n        name\n      }\n    }\n  }\n"])));
var templateObject_1;
