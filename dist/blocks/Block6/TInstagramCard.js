var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useBlock6Styles } from "./useBlock6Styles";
import clx from "classnames";
import { MdArrowUpward } from "react-icons/md";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var InstagramCard = function (_a) {
    var config = _a.config, index = _a.index, onClick = _a.onClick, mode = _a.mode, image = _a.image, screenSize = _a.screenSize;
    var classes = useBlock6Styles(config);
    var _b = __read(useState(false), 2), active = _b[0], setActive = _b[1];
    var handleMouseEnter = function () { return setActive(true); };
    var handleMouseLeave = function () { return setActive(false); };
    return (_jsxs("article", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: clx(classes.imageContainer, "image-".concat(index + 1)), children: [createResponsiveImage(image, {
                screenSize: screenSize,
                className: classes.image,
            }), active && _jsx("div", { className: classes.instagramCardOverlay }), _jsxs("div", { className: clx(classes.cardContent, active && "active"), onClick: function () { return mode === "view" && (onClick === null || onClick === void 0 ? void 0 : onClick(index)); }, children: [_jsx("p", { className: classes.cardText, children: "Preview" }), _jsx(MdArrowUpward, { className: classes.arrowUpward })] })] }));
};
