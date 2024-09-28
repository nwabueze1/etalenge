var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
import { CORE_RESTAURANT_FIELDS } from './restaurant';
import { CORE_MENU_ITEM_FIELDS } from './menuItem';
import { CORE_MENU_CATEGORY_FIELDS } from './menuCategory';
export var CORE_MENU_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  fragment CoreMenuFields on Menu {\n    uuid\n    name\n    activeMenuCategories {\n      ...CoreMenuCategoryFields\n    }\n    activeMenuItems {\n      ...CoreMenuItemFields\n    }\n    options_config {\n      name\n      uuid\n      type\n      options {\n        selection {\n          amount\n          name\n        }\n        extras {\n          amount\n          name\n        }\n        deselection {\n          amount\n          name\n        }\n      }\n    }\n    restaurant {\n      ...CoreRestaurantFields\n    }\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  fragment CoreMenuFields on Menu {\n    uuid\n    name\n    activeMenuCategories {\n      ...CoreMenuCategoryFields\n    }\n    activeMenuItems {\n      ...CoreMenuItemFields\n    }\n    options_config {\n      name\n      uuid\n      type\n      options {\n        selection {\n          amount\n          name\n        }\n        extras {\n          amount\n          name\n        }\n        deselection {\n          amount\n          name\n        }\n      }\n    }\n    restaurant {\n      ...CoreRestaurantFields\n    }\n  }\n"])), CORE_MENU_CATEGORY_FIELDS, CORE_MENU_ITEM_FIELDS, CORE_RESTAURANT_FIELDS);
var templateObject_1;