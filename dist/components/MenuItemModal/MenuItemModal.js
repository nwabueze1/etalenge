import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlockSelector } from "../BlockProvider";
import { MdClose } from "react-icons/md";
import { useMenuItemPreviewModal } from "./useMenuItemPreviewModal";
import { MenuItem } from "../../blocks/Block10/MenuItem";
export var MenuItemModal = function (_a) {
    var menuItem = _a.menuItem, open = _a.open, onClose = _a.onClose;
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var classes = useMenuItemPreviewModal(mainConfig);
    if (typeof window !== "undefined") {
        document.body.style.overflowY = open ? "hidden" : "auto";
    }
    if (!open)
        return null;
    return (_jsxs("div", { className: classes.modal, children: [_jsx("div", { className: classes.overlay }), _jsxs("div", { className: classes.modalContainer, children: [_jsx(MdClose, { className: classes.closeButton, onClick: onClose }), _jsx(MenuItem, { menu_item: menuItem, onItemAddedToCart: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); } })] })] }));
};
