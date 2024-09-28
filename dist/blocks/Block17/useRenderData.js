var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { MenuItemCard, PostCard } from "../../components";
import { CardSkeleton } from "./CardSkeleton";
export var useRenderData = function (mode, classes) {
    if (mode === void 0) { mode = "view"; }
    var renderMenuItems = function (menuItems) {
        return menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menuItem, index) {
            var _a, _b, _c, _d;
            return (_jsx(MenuItemCard, { menuItem: menuItem, currency: (_d = (_c = (_b = (_a = menuItem === null || menuItem === void 0 ? void 0 : menuItem.menu) === null || _a === void 0 ? void 0 : _a.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", mode: mode, isSsr: true }, index));
        });
    };
    var renderPosts = function (posts) {
        return posts === null || posts === void 0 ? void 0 : posts.map(function (post, index) { return _createElement(PostCard, __assign({ background: "#fff" }, post, { key: index, mode: mode })); });
    };
    var renderImageSkeleton = function () { return (_jsx("div", { className: classes.cardContainer, children: Array(8)
            .fill(0)
            .map(function (_, index) { return (_jsx(CardSkeleton, {}, index)); }) })); };
    return {
        renderMenuItems: renderMenuItems,
        renderPosts: renderPosts,
        renderImageSkeleton: renderImageSkeleton,
    };
};
