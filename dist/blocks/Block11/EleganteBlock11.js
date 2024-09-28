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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BlockProvider, Container, Section, BackButton } from "../../components";
import { useGetColor } from "../../hooks";
import { CartItems, Delivery, EmptyCart, OrderSummary, Payment, OrderDetails } from "./views";
import { CircularProgress } from "@mui/material";
import { useBlock11Styles } from "./useBlock11Styles";
// import { useVerifyGlobalPayments } from "@wazobia-tech/wazcom/dist/core/PaymentUI/globalPayment";
// import Cookies from "universal-cookie";
// const { uuid: BLOCK_UUID } = block11;
export var EleganteBlock11 = function (_a) {
    var _b, _c, _d;
    var content = _a.content, activeElement = _a.activeElement, configuration = _a.configuration, index = _a.index, handleSelect = _a.handleSelect;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var btnConfig = useGetColor(configuration, "button");
    var _e = __read(useState((content === null || content === void 0 ? void 0 : content.loading) !== undefined ? content === null || content === void 0 ? void 0 : content.loading : true), 1), loading = _e[0];
    var _f = __read(useState(1), 2), activeStep = _f[0], setActiveStep = _f[1];
    var classes = useBlock11Styles();
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    // const site_uuid = cart?.restaurant?.site?.uuid as string;
    var isCartEmpty = !(cart === null || cart === void 0 ? void 0 : cart.cartItems) || ((_b = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _b === void 0 ? void 0 : _b.length) === 0;
    // const cookies = new Cookies();
    // const cartCookie = useMemo(() => cookies.get("cart"), []);
    // const verifyGlobalPayments = useVerifyGlobalPayments();
    var key = "blocks." + String(index);
    useEffect(function () {
        handleOrderConfirmation();
    }, []);
    var handleOrderConfirmation = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); };
    var handleGoBack = function () {
        if (activeStep === 1)
            return;
        setActiveStep(activeStep - 1);
    };
    var renderCheckoutStep = function () {
        switch (activeStep) {
            case 1:
                return (_jsx(OrderSummary, { onProceedToCheckout: function () {
                        setActiveStep(2);
                    } }));
            case 2:
                return (_jsx(Delivery, { onProceedToPayment: function () {
                        setActiveStep(3);
                    } }));
            case 3:
                return (_jsx(Payment, { onSuccess: function () {
                        setActiveStep(4);
                    } }));
            case 4:
                return _jsx(OrderDetails, {});
            default:
                return _jsx("div", {});
        }
    };
    if (loading)
        return (_jsx("div", { className: classes.cartLoaderContainer, style: { color: (_c = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _c === void 0 ? void 0 : _c[100] }, children: _jsx(CircularProgress, { size: "20px", color: "inherit" }) }));
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: btnConfig, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_d = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _d === void 0 ? void 0 : _d[100], children: _jsxs(Container, { children: [activeStep > 1 && _jsx(BackButton, { className: classes.cartBackButton, onClick: handleGoBack }), isCartEmpty ? (_jsx(EmptyCart, {})) : (_jsxs("div", { className: classes.root, children: [_jsx("div", { className: classes.cartItems, children: _jsx(CartItems, {}) }), _jsx("div", { className: classes.cartSidebar, children: renderCheckoutStep() })] }))] }) }) }));
};
