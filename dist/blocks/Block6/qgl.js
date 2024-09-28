var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var GET_INSTAGRAM_IMAGES = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GqlGetInstagramImages($platform: SocialPlatform!, $sociable_type: SociableType!, $uuid: String!) {\n    getInstagramImages(input: { platform: $platform, sociable_type: $sociable_type, uuid: $uuid }) {\n      images\n    }\n  }\n"], ["\n  query GqlGetInstagramImages($platform: SocialPlatform!, $sociable_type: SociableType!, $uuid: String!) {\n    getInstagramImages(input: { platform: $platform, sociable_type: $sociable_type, uuid: $uuid }) {\n      images\n    }\n  }\n"])));
var templateObject_1;
