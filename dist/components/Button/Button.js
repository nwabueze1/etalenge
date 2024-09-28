import { jsx as _jsx } from "react/jsx-runtime";
import clx from "classnames";
import { useButtonStyles } from "../../blocks/Block4/useButtonStyles";
import { useRecordLinkClick } from "../../helper";
import { useBlockSelector } from "../BlockProvider";
export var Button = function (_a) {
    var size = _a.size, href = _a.href, mode = _a.mode, children = _a.children, variant = _a.variant, className = _a.className, onClick = _a.onClick, type = _a.type;
    var _b = useBlockSelector(function (store) { return store; }), buttonConfig = _b.buttonConfig, block_uuid = _b.block_uuid;
    var classes = useButtonStyles(buttonConfig);
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function () {
        mode === "view" && recordLinkClick(String(children), href !== null && href !== void 0 ? href : "", block_uuid);
        mode === "view" && (onClick === null || onClick === void 0 ? void 0 : onClick());
    };
    if ((type && (type === "button" || type === "submit")) || !href)
        return (_jsx("button", { className: clx(classes.button, variant, size, className), onClick: onClick, type: type, children: children }));
    return (_jsx("a", { onClick: handleClick, className: clx(classes.button, variant, size, className), href: mode === "edit" ? undefined : href, children: children }));
};
