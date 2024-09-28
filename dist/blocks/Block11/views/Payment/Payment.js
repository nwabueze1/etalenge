import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useBlockSelector } from "../../../../components";
import { usePaymentStyles } from "./usePaymentStyles";
export var Payment = function (_a) {
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var classes = usePaymentStyles(mainConfig);
    // const buttonClasses = usePaymentStyles(buttonConfig as CustomThemeProps);
    var paymentRef = useRef();
    useEffect(function () {
        var _a;
        (_a = paymentRef === null || paymentRef === void 0 ? void 0 : paymentRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }, []);
    return (_jsx("div", { ref: paymentRef, className: classes.root, children: _jsx("h4", { className: classes.title, children: "Payment Options" }) }));
};
