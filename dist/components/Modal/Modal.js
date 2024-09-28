import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModalStyles } from "./useModalStyles";
import { MdClose } from "react-icons/md";
export var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children;
    var classes = useModalStyles();
    if (typeof window !== "undefined") {
        document.body.style.overflowY = open ? "hidden" : "visible";
    }
    if (!open)
        return null;
    return (_jsxs("div", { className: classes.root, children: [_jsxs("div", { className: classes.modalContent, children: [_jsx(MdClose, { className: classes.closeButton, onClick: onClose }), children] }), _jsx("div", { className: classes.overlay })] }));
};
