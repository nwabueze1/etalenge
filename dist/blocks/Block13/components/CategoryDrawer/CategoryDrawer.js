import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlockSelector } from "../../../../components";
import { useCategoryDrawerStyles } from "./useCategoryDrawerStyles";
import clx from "classnames";
import { MdClose } from "react-icons/md";
export var CategoryDrawer = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children;
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var classes = useCategoryDrawerStyles(mainConfig);
    return (_jsx("div", { className: clx(classes.categoryDrawer, open && "active"), children: _jsxs("div", { className: classes.drawerBlock, children: [_jsx(MdClose, { className: classes.closeDrawerBtn, onClick: onClose }), children] }) }));
};
