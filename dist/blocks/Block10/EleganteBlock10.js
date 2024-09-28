import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// MENU BLOCK
import { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { BlockProvider, Container, MenuItemCard, Section } from "../../components";
import { useRecordMenuItemView } from "../../helper";
import { useGetColor } from "../../hooks";
import block10 from "../../mappings/block10";
import { MenuItem } from "./MenuItem";
import { useBlock10Styles } from "./useBlock10Styles";
var BLOCK_UUID = block10.uuid;
export var EleganteBlock10 = function (_a) {
    var _b, _c;
    var activeElement = _a.activeElement, content = _a.content, index = _a.index, configuration = _a.configuration, handleSelect = _a.handleSelect, _d = _a.mode, mode = _d === void 0 ? "view" : _d;
    var gatewayUrl = useSelector(function (store) { return store; }).gatewayUrl;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var btnConfig = useGetColor(configuration, "button");
    var menuItemData = content === null || content === void 0 ? void 0 : content.menu_item;
    var classes = useBlock10Styles(mainConfig);
    var dispatch = useDispatch();
    var key = "blocks." + String(index);
    var recordMenuItemView = useRecordMenuItemView();
    var relatedMenuItems = (((_b = content === null || content === void 0 ? void 0 : content.menu_item) === null || _b === void 0 ? void 0 : _b.related_menu_items) || []);
    var handleGoBack = function () {
        if (mode === "view" && typeof window !== "undefined") {
            window.history.back();
        }
    };
    useEffect(function () {
        dispatch({ type: "GET_MENU_ITEMS", payload: [menuItemData] });
        recordMenuItemView(menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.uuid);
    }, []);
    var renderRelatedMenuItems = function () {
        return relatedMenuItems.map(function (item, index) {
            var _a, _b, _c, _d;
            return (_jsx("div", { className: "keen-slider__slide", children: _jsx(MenuItemCard, { menuItem: item, currency: (_d = (_c = (_b = (_a = menuItemData === null || menuItemData === void 0 ? void 0 : menuItemData.menu) === null || _a === void 0 ? void 0 : _a.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", isSsr: true }) }, index));
        });
    };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: btnConfig, gatewayUrl: gatewayUrl, block_uuid: BLOCK_UUID, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_c = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _c === void 0 ? void 0 : _c[100], children: _jsxs(Container, { children: [_jsxs("div", { className: classes.back, onClick: handleGoBack, children: [_jsx(IoIosArrowRoundBack, { className: classes.backIcon }), " ", _jsx("span", { children: "Back" })] }), _jsx(MenuItem, { menu_item: content === null || content === void 0 ? void 0 : content.menu_item }), relatedMenuItems.length > 0 && (_jsxs("div", { className: classes.relatedMenuItemsParent, children: [_jsx("div", { className: classes.footerHeader, children: _jsx("h2", { className: classes.relatedItems, children: "Related Items" }) }), _jsx("div", { className: classes.relatedMenuItemsContainer, children: renderRelatedMenuItems() })] }))] }) }) }));
};
