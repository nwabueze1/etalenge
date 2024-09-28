var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlockSelector } from "../BlockProvider";
import { usePostCardStyles } from "./usePostCardStyles";
import { parsePostImage, useRecordLinkClick } from "../../helper";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var PostCard = function (_a) {
    var _b;
    var mode = _a.mode, screenSize = _a.screenSize, background = _a.background, post = __rest(_a, ["mode", "screenSize", "background"]);
    var _c = useBlockSelector(function (state) { return state; }), mainConfig = _c.mainConfig, block_uuid = _c.block_uuid;
    var classes = usePostCardStyles(mainConfig);
    var parsedImage = parsePostImage(post === null || post === void 0 ? void 0 : post.featured_image);
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function (text, url) {
        mode === "view" && recordLinkClick(text, url, block_uuid);
    };
    return (_jsxs("article", { className: classes.root, style: { background: background }, children: [createResponsiveImage(parsedImage, {
                screenSize: screenSize,
                className: classes.image,
                classNames: {
                    picture: classes.imageContainer,
                },
                styles: {
                    picture: {
                        display: "block",
                    },
                },
            }), _jsxs("div", { className: classes.cardBody, children: [_jsx("div", { className: classes.tagsContainer, children: _jsx("div", { className: classes.tag, children: (_b = post === null || post === void 0 ? void 0 : post.slug) === null || _b === void 0 ? void 0 : _b.split("/")[1] }) }), _jsx("div", { className: classes.separator }), _jsxs("div", { className: classes.textContainer, children: [_jsx("p", { className: classes.postTitle, children: post === null || post === void 0 ? void 0 : post.title }), _jsx("a", { href: mode === "view" ? post === null || post === void 0 ? void 0 : post.slug : undefined, onClick: function () { var _a; return handleClick(post === null || post === void 0 ? void 0 : post.title, (_a = post === null || post === void 0 ? void 0 : post.slug) !== null && _a !== void 0 ? _a : ""); }, className: classes.postLink, children: "Read article" })] })] })] }));
};
