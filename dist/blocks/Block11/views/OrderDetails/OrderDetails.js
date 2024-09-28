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
import { useSelector } from "react-redux";
import { useBlockSelector } from "../../../../components";
import { getCurrency } from "../../../../helper";
import { useOrderDetailsStyles } from "./useOrderDetailsStyles";
import { calculateCartItemsSumTotal } from "../../../../utils/calculateCartItemsSumTotal";
import clx from "classnames";
export var OrderDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var mainConfig = useBlockSelector(function (state) { return state; }).mainConfig;
    var classes = useOrderDetailsStyles(mainConfig);
    var cart = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart;
    var order_type = (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.order) === null || _b === void 0 ? void 0 : _b.order_type) !== null && _c !== void 0 ? _c : "";
    var currency = getCurrency((_d = cart === null || cart === void 0 ? void 0 : cart.currency) !== null && _d !== void 0 ? _d : "");
    var deliveryFee = ((_f = (_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.address) === null || _f === void 0 ? void 0 : _f.uuid) ? (_j = (_h = (_g = cart === null || cart === void 0 ? void 0 : cart.restaurant) === null || _g === void 0 ? void 0 : _g.bank_info) === null || _h === void 0 ? void 0 : _h.delivery_fee) !== null && _j !== void 0 ? _j : 0 : 0;
    var orderDetails = {
        "Order ID": (_m = (_l = (_k = cart === null || cart === void 0 ? void 0 : cart.order) === null || _k === void 0 ? void 0 : _k.uuid) === null || _l === void 0 ? void 0 : _l.slice(0, 13)) !== null && _m !== void 0 ? _m : "",
        "Number of Dishes": "".concat((_p = (_o = cart === null || cart === void 0 ? void 0 : cart.cartItems) === null || _o === void 0 ? void 0 : _o.length) !== null && _p !== void 0 ? _p : 0),
        Subtotal: "".concat(currency, " ").concat(String(calculateCartItemsSumTotal(cart))),
        "Delivery Fee": "".concat(currency, " ").concat(String(deliveryFee)),
    };
    var getContactDetails = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var contactDetails = {
            "Delivery Method": order_type.charAt(0).toUpperCase() + order_type.slice(1).toLowerCase(),
            "Contact Name": "".concat((_a = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _a === void 0 ? void 0 : _a.firstname, " ").concat((_b = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _b === void 0 ? void 0 : _b.lastname),
            "Contact Phone": (_d = (_c = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _c === void 0 ? void 0 : _c.phone) !== null && _d !== void 0 ? _d : "",
        };
        if (order_type === "dispatch" && ((_e = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _e === void 0 ? void 0 : _e.address)) {
            contactDetails["Address"] = (_h = (_g = (_f = cart === null || cart === void 0 ? void 0 : cart.guest) === null || _f === void 0 ? void 0 : _f.address) === null || _g === void 0 ? void 0 : _g.addressline1) !== null && _h !== void 0 ? _h : "";
        }
        return contactDetails;
    };
    var renderOrderInformation = function (information) {
        return Object.entries(information).map(function (_a, index) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return (_jsxs("div", { className: classes.cardItem, children: [_jsx("p", { children: key }), _jsx("p", { className: "bold", children: value })] }, index));
        });
    };
    var renderOrderSuccessCard = function () { return (_jsxs("div", { className: classes.orderPlacedSuccessfullyCard, children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/order-placed-successfully-icon-small.svg", alt: "order-placed - icon", width: 220, height: 147 }), _jsx("p", { className: classes.orderPlacedSuccessfullyText, children: "Order has been placed successfully" })] })); };
    var getPaymentMethod = function () {
        var _a, _b, _c;
        var paymentMethod = (_c = ((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.order) === null || _a === void 0 ? void 0 : _a.payment_type) !== null && _b !== void 0 ? _b : "").toLowerCase()) === null || _c === void 0 ? void 0 : _c.replace(/_/g, " ");
        return paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1).toLowerCase();
    };
    return (_jsxs("div", { children: [_jsxs("div", { children: [_jsx("p", { className: classes.cardHeader, children: "Order Details" }), _jsxs("div", { className: classes.card, children: [renderOrderInformation(orderDetails), _jsx("div", { className: classes.separator }), _jsxs("div", { className: classes.cardItem, children: [_jsx("p", { children: "Total" }), _jsxs("p", { className: "bold total", children: [currency, " ", calculateCartItemsSumTotal(cart) + deliveryFee] })] })] }), _jsx("div", { className: clx(classes.card, "guest"), children: renderOrderInformation(getContactDetails()) }), _jsx("div", { className: clx(classes.card, "payment"), children: _jsxs("div", { className: classes.cardItem, children: [_jsx("p", { children: "Payment method" }), _jsx("p", { className: "bold", children: getPaymentMethod() })] }) })] }), renderOrderSuccessCard()] }));
};
