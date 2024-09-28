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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetColor } from "../../hooks";
import { BlockProvider, Button, Container, PostCard, Section } from "../../components";
import { useBlock4Styles } from "./useBlock4Styles";
import block4 from "../../mappings/block4";
import { decodeText } from "../../helper/decodeText";
var BLOCK_UUID = block4.uuid;
export var EleganteBlock4 = function (_a) {
    var _b, _c, _d, _e;
    var activeElement = _a.activeElement, content = _a.content, mode = _a.mode, configuration = _a.configuration, handleSelect = _a.handleSelect, index = _a.index, screenSize = _a.screenSize;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var btnConfig = useGetColor(configuration, "button");
    var classes = useBlock4Styles(mainConfig);
    var contentPosts = (_b = content === null || content === void 0 ? void 0 : content.posts) !== null && _b !== void 0 ? _b : [];
    var key = "blocks.".concat(index);
    var renderButtons = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.map(function (button, index) { return (_jsx(Button, { mode: mode, href: button.url, size: "md", variant: "contained", children: button.text }, index)); });
    };
    var renderPosts = function () {
        return contentPosts === null || contentPosts === void 0 ? void 0 : contentPosts.map(function (post, index) { return _createElement(PostCard, __assign({ screenSize: screenSize }, post, { key: index, mode: mode })); });
    };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: btnConfig, block_uuid: BLOCK_UUID, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, styles: { background: (_c = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _c === void 0 ? void 0 : _c[100] }, background: (_d = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _d === void 0 ? void 0 : _d[100], children: _jsxs(Container, { children: [_jsxs("header", { className: classes.header, children: [_jsx("h4", { className: classes.heading, children: decodeText((_e = content === null || content === void 0 ? void 0 : content.text) === null || _e === void 0 ? void 0 : _e.heading) }), renderButtons()] }), _jsx("div", { className: classes.cardContainer, children: renderPosts() })] }) }) }));
};
