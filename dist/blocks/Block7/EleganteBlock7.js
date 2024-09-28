import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetColor } from "../../hooks";
import { BlockProvider, Button, Container, MenuItemCard } from "../../components";
import { useBlock7Styles } from "./useBlock7Styles";
import { useMediaQuery, useTheme } from "@mui/material";
import clx from "classnames";
import block7 from "../../mappings/block7";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
var BLOCK_UUID = block7.uuid;
export var EleganteBlock7 = function (_a) {
    var _b, _c;
    var activeElement = _a.activeElement, handleSelect = _a.handleSelect, index = _a.index, content = _a.content, _d = _a.mode, mode = _d === void 0 ? "view" : _d, configuration = _a.configuration, screenSize = _a.screenSize;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var btnConfig = useGetColor(configuration, "button");
    var classes = useBlock7Styles(mainConfig);
    var theme = useTheme();
    var md = useMediaQuery(theme.breakpoints.up("md"));
    var key = "blocks.".concat(index);
    var renderMenuItems = function () {
        return ((content === null || content === void 0 ? void 0 : content.menu_items) || []).map(function (menu_item, index) {
            var _a, _b, _c, _d;
            return (_jsx(MenuItemCard, { menuItem: menu_item, currency: (_d = (_c = (_b = (_a = menu_item === null || menu_item === void 0 ? void 0 : menu_item.menu) === null || _a === void 0 ? void 0 : _a.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", mode: mode, isSsr: true, screenSize: screenSize }, index));
        });
    };
    var renderButtons = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.map(function (button, index) { return (_jsx(Button, { size: "md", variant: "contained", href: button === null || button === void 0 ? void 0 : button.url, mode: mode, children: button === null || button === void 0 ? void 0 : button.text }, index)); });
    };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: btnConfig, block_uuid: BLOCK_UUID, children: _jsx("section", { style: { background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100] }, className: clx(classes.root, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, children: _jsxs(Container, { children: [_jsxs("header", { className: classes.header, children: [_jsx("h4", { className: classes.heading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.title) }), md && renderButtons()] }), _jsx("article", { className: classes.cardContainer, children: renderMenuItems() }), _jsx("div", { className: classes.btnMobileContainer, children: !md && renderButtons() })] }) }) }));
};
