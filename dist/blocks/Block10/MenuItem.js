var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useEffect, useState } from "react";
import { calculateSumOfOption, extractMenuItemOptions } from "./helpers";
import { Button, useBlockSelector } from "../../components";
import { useBlock10Styles } from "./useBlock10Styles";
import { CircularProgress } from "@mui/material";
import clx from "classnames";
import { parseApiImage } from "../../utils";
import { getCurrency, notify } from "../../helper";
import { useAddToCart } from "../../hooks/useAddToCart";
import { useDispatch } from "react-redux";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var MenuItem = function (_a) {
    var _b, _c, _d, _e;
    var menu_item = _a.menu_item, onItemAddedToCart = _a.onItemAddedToCart, isSsr = _a.isSsr, screenSize = _a.screenSize;
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var initialState = extractMenuItemOptions(menu_item).initialState;
    var classes = useBlock10Styles(mainConfig);
    var initialCartItem = {
        count: 1,
        errors: [],
        loading: false,
        options: initialState,
    };
    var _f = __read(useState(false), 2), isSubmitting = _f[0], setIsSubmitting = _f[1];
    var _g = __read(useState(initialCartItem), 2), cartItem = _g[0], setCartItem = _g[1];
    var parsedImage = parseApiImage(menu_item === null || menu_item === void 0 ? void 0 : menu_item.image);
    var currencySymbol = getCurrency((_e = (_d = (_c = (_b = menu_item === null || menu_item === void 0 ? void 0 : menu_item.menu) === null || _b === void 0 ? void 0 : _b.restaurant) === null || _c === void 0 ? void 0 : _c.bank_info) === null || _d === void 0 ? void 0 : _d.currency) !== null && _e !== void 0 ? _e : "");
    var addToCart = useAddToCart();
    var dispatch = useDispatch();
    var handleIncrement = function () { return setCartItem(__assign(__assign({}, cartItem), { count: cartItem.count + 1 })); };
    var handleDecrement = function () {
        return setCartItem(__assign(__assign({}, cartItem), { count: cartItem.count > 1 ? cartItem.count - 1 : cartItem.count }));
    };
    var handleChange = function (option, index) {
        var currentSelection = cartItem.options[index];
        if (currentSelection.type === "extras") {
            var isAdded = currentSelection.selectedChoices.find(function (item) { return item.name === option.name; });
            if (isAdded) {
                currentSelection = __assign(__assign({}, currentSelection), { selectedChoices: currentSelection.selectedChoices.filter(function (item) { return item.name !== option.name; }) });
            }
            else {
                currentSelection = __assign(__assign({}, currentSelection), { selectedChoices: __spreadArray(__spreadArray([], __read(currentSelection.selectedChoices), false), [option], false) });
            }
        }
        else {
            currentSelection = __assign(__assign({}, currentSelection), { selectedChoices: [option] });
        }
        setCartItem(__assign(__assign({}, cartItem), { options: cartItem.options.map(function (opt, i) { return (i === index ? currentSelection : opt); }) }));
    };
    var handleValidateOption = function (index) {
        var error = [];
        var isFormValid = true;
        if (!index) {
            cartItem.options.forEach(function (opt, index) {
                var isValid = opt.selectedChoices.length > 0;
                if (!isValid) {
                    error.push(index);
                    isFormValid && (isFormValid = isValid);
                }
            });
        }
        else {
            var isValid = cartItem.options[index].selectedChoices.length > 0;
            if (!isValid) {
                error.push(index);
                isFormValid && (isFormValid = isValid);
            }
        }
        setCartItem(__assign(__assign({}, cartItem), { errors: error }));
        return isFormValid;
    };
    var handleAddToCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        var cartParams, e_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setCartItem(__assign(__assign({}, cartItem), { loading: true }));
                    cartParams = {
                        menu_item_uuid: (_a = menu_item.uuid) !== null && _a !== void 0 ? _a : "",
                        detail: (_b = menu_item === null || menu_item === void 0 ? void 0 : menu_item.description) !== null && _b !== void 0 ? _b : "",
                        quantity: cartItem.count,
                        options: JSON.stringify(cartItem.options),
                    };
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, addToCart(cartParams)];
                case 2:
                    _c.sent();
                    notify("success", "Item has been added to cart");
                    onItemAddedToCart === null || onItemAddedToCart === void 0 ? void 0 : onItemAddedToCart(cartParams);
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _c.sent();
                    notify("error", "Failed to add item to cart");
                    return [3 /*break*/, 5];
                case 4:
                    setCartItem(initialCartItem);
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (!isSsr)
            return;
        dispatch({ type: "GET_MENU_ITEMS", payload: [menu_item] });
    }, []);
    return (_jsxs("div", { className: classes.block, children: [createResponsiveImage(parsedImage, {
                className: classes.image,
                screenSize: screenSize,
                classNames: {
                    picture: classes.imageContainer,
                },
                styles: {
                    picture: { display: "block" },
                },
            }), _jsxs("div", { children: [_jsxs("header", { children: [_jsx("h3", { className: classes.modalHeading, children: menu_item === null || menu_item === void 0 ? void 0 : menu_item.name }), _jsx("p", { className: clx(classes.categorySub, "description"), children: menu_item === null || menu_item === void 0 ? void 0 : menu_item.description })] }), _jsxs("form", { onSubmit: function (e) {
                            e.preventDefault();
                            setIsSubmitting(true);
                            var isFormValid = handleValidateOption();
                            if (!isFormValid)
                                return;
                            setCartItem(__assign(__assign({}, cartItem), { errors: [] }));
                            handleAddToCart();
                        }, children: [cartItem.options.map(function (state, index) {
                                var _a;
                                return (_jsx(Fragment, { children: _jsxs("div", { children: [_jsxs("div", { className: classes.configTitle, children: [_jsxs("span", { children: [state.name, " (", state.type, ")"] }), _jsx("span", { className: classes.requiredContainer, children: "Required" })] }), _jsx("p", { className: classes.categorySub, children: state.type === "selection"
                                                    ? "Please select a variant. You can only pick one option"
                                                    : state.type === "deselection"
                                                        ? "Select items you don’t want to be in your meal"
                                                        : "Select extra items" }), (_a = state === null || state === void 0 ? void 0 : state.options) === null || _a === void 0 ? void 0 : _a.map(function (option, inner_index) { return (_jsxs("div", { className: classes.selectionContainer, children: [_jsxs("label", { className: classes.selectionText, children: [_jsx("input", { type: state.type === "extras" ? "checkbox" : "radio", name: state.name, onChange: function () {
                                                                    handleChange(option, index);
                                                                }, checked: cartItem.options[index].selectedChoices.findIndex(function (item) { return item.name === option.name; }) !== -1, className: classes.checkBoxInput }, inner_index), option.name] }), _jsxs("p", { className: classes.selectionAmount, children: [state.type === "deselection" ? "-" : "+", " ", currencySymbol, " ", option.amount] })] }, inner_index)); }), cartItem.options[index].selectedChoices.length === 0 && isSubmitting && (_jsx("span", { className: classes.errorMessage, children: "You must select at least one option from here" }))] }, index) }, index));
                            }), _jsxs("div", { children: [_jsxs("div", { className: classes.priceContainer, children: [_jsxs("h5", { className: classes.menuItemPrice, children: [currencySymbol, " ", (menu_item.price + calculateSumOfOption(cartItem.options)) * cartItem.count] }), _jsxs("div", { className: classes.incrementButtonContainer, children: [_jsx("div", { className: classes === null || classes === void 0 ? void 0 : classes.addBtn, onClick: handleDecrement, children: "-" }), _jsx("div", { className: classes.counterContainer, children: _jsx("span", { className: classes.counterText, children: cartItem.count }) }), _jsx("div", { className: classes === null || classes === void 0 ? void 0 : classes.addBtn, onClick: handleIncrement, children: "+" })] })] }), _jsxs(Button, { variant: "contained", size: "md", className: classes === null || classes === void 0 ? void 0 : classes.addToCartBtn, type: "submit", children: ["Add to Cart ", (cartItem === null || cartItem === void 0 ? void 0 : cartItem.loading) && _jsx(CircularProgress, { size: 14 })] })] })] })] })] }));
};
