import { useSelector } from "react-redux";
import { useBlockSelector } from "../components/BlockProvider";
export var useRecordMenuItemView = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    return function (menu_item_uuid) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "menuItemPageViewTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            template: "elegante",
            menu_item_uuid: menu_item_uuid,
        });
    };
};
export var useRecordPostView = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    return function (post_uuid) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "postPageViewTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            template: "elegante",
            post_uuid: post_uuid,
        });
    };
};
export var useRecordLinkClick = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    var default_block_uuid = "";
    try {
        var store_block_uuid = useBlockSelector(function (state) { return state; }).block_uuid;
        default_block_uuid = store_block_uuid;
    }
    catch (error) {
        //
    }
    return function (text, url, block_uuid) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "linkClickTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            page_uuid: page === null || page === void 0 ? void 0 : page.uuid,
            block_uuid: block_uuid !== null && block_uuid !== void 0 ? block_uuid : default_block_uuid,
            template: "elegante",
            click_text: text,
            click_url: url,
        });
    };
};
export var useRecordAddToCart = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    return function (menu_item_uuid, block_uuid) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "addToCartTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            menu_item_uuid: menu_item_uuid,
            template: "elegante",
            block_uuid: block_uuid,
        });
    };
};
export var useRecordFormSubmission = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    return function (form_uuid, block_uuid) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "formSubmissionTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            page_uuid: page === null || page === void 0 ? void 0 : page.uuid,
            form_uuid: form_uuid,
            block_uuid: block_uuid,
            template: "elegante",
        });
    };
};
export var useRecordCartAction = function () {
    var page = useSelector(function (state) { return ({
        page: state === null || state === void 0 ? void 0 : state.page,
    }); }).page;
    return function (block_uuid, cart_action) {
        var _a;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "cartActionTrigger",
            site_uuid: (_a = page === null || page === void 0 ? void 0 : page.site) === null || _a === void 0 ? void 0 : _a.uuid,
            block_uuid: block_uuid,
            cart_action: cart_action,
            template: "elegante",
        });
    };
};
