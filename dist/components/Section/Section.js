import { jsx as _jsx } from "react/jsx-runtime";
import { useSectionStyles } from "./useSectionStyles";
import clx from "classnames";
export var Section = function (_a) {
    var background = _a.background, children = _a.children, onClick = _a.onClick, className = _a.className, styles = _a.styles, isActive = _a.isActive;
    var classes = useSectionStyles({ background: background });
    return (_jsx("section", { className: clx(classes.root, className, isActive && "active"), onClick: onClick, style: styles, children: children }));
};
