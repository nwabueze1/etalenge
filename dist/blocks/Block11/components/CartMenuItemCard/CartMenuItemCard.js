import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useBlockSelector } from "../../../../components";
import { useCartMenuItemCardStyles } from "./useCartMenuItemCardStyles";
import { getCurrency } from "../../../../helper";
import { MdOutlineDelete } from "react-icons/md";
import { parseApiImage } from "../../../../utils";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { calculateCartSubTotal } from "../../../../utils/calculateCartItemsSumTotal";
import clx from "classnames";
import { createResponsiveImage } from "../../../../helper/responsiveImage";
export var CartMenuItemCard = function (_a) {
    var currency = _a.currency, cartItem = _a.cartItem, onDelete = _a.onDelete, onIncrement = _a.onIncrement, onDecrement = _a.onDecrement, action = _a.action;
    var _b = useSelector(function (store) { return store; }), networkOperation = _b.networkOperation, restaurant = _b.restaurant;
    var _c = useBlockSelector(function (state) { return state; }), buttonConfig = _c.buttonConfig, mainConfig = _c.mainConfig;
    var classes = useCartMenuItemCardStyles(mainConfig);
    var buttonClass = useCartMenuItemCardStyles(buttonConfig);
    var menuItem = cartItem.menuItem, detail = cartItem.detail, quantity = cartItem.quantity, options = cartItem.options;
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var image = parseApiImage(menuItem === null || menuItem === void 0 ? void 0 : menuItem.image);
    var parsedOptions = JSON.parse(options);
    var renderParsedOptions = function () {
        return (parsedOptions !== null && parsedOptions !== void 0 ? parsedOptions : []).map(function (parsedOption, index) { return (_jsxs("div", { children: [_jsxs("p", { className: classes.menuOptionHeader, children: [parsedOption.name, " (", parsedOption.type, ")"] }), _jsx("ul", { className: classes.list, children: parsedOption.selectedChoices.map(function (choice, innerIndex) { return (_jsxs("li", { className: classes.badge, children: [choice.name, " -", " ", _jsxs("b", { children: [currencySymbol, " ", choice.amount] })] }, innerIndex)); }) })] }, index)); });
    };
    var sumTotal = calculateCartSubTotal(cart, cartItem === null || cartItem === void 0 ? void 0 : cartItem.uuid);
    var currencySymbol = getCurrency(currency);
    var showLoading = networkOperation === "update.cart-item.".concat(cartItem === null || cartItem === void 0 ? void 0 : cartItem.uuid);
    var renderProgress = function () { return _jsx(CircularProgress, { color: "inherit", size: 16 }); };
    return (_jsxs("article", { className: classes.root, children: [createResponsiveImage(image, {
                className: classes.image,
                classNames: {
                    picture: classes.imageContainer,
                },
            }), _jsxs("div", { className: classes.cardBody, children: [_jsx("h5", { className: classes.title, children: menuItem.name }), (detail || menuItem.description) && _jsx("p", { className: classes.description, children: detail || menuItem.description }), _jsx("div", { className: classes.menuOptionsContainer, children: renderParsedOptions() }), _jsxs("p", { className: classes === null || classes === void 0 ? void 0 : classes.price, children: [" ", currencySymbol, " ", new Intl.NumberFormat("en-US").format(sumTotal)] }), _jsxs("div", { className: classes.cardFooter, children: [_jsxs("div", { className: classes.actionButtonContainer, children: [_jsx("button", { className: clx(buttonClass === null || buttonClass === void 0 ? void 0 : buttonClass.actionBtn, (cart === null || cart === void 0 ? void 0 : cart.order) && "invisible"), onClick: onDecrement, children: showLoading && action === "decrement" ? renderProgress() : "-" }), _jsx("span", { className: buttonClass.counter, children: quantity }), _jsx("button", { className: clx(buttonClass === null || buttonClass === void 0 ? void 0 : buttonClass.actionBtn, (cart === null || cart === void 0 ? void 0 : cart.order) && "invisible"), onClick: onIncrement, children: showLoading && action === "increment" ? renderProgress() : "+" })] }), showLoading && action === "delete" ? (renderProgress()) : (_jsx(MdOutlineDelete, { className: clx(buttonClass.deleteButton, (cart === null || cart === void 0 ? void 0 : cart.order) && "invisible"), onClick: onDelete }))] })] })] }));
};
