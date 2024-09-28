import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useBlockSelector } from "../../../../components";
import { usePaymentStyles } from "./usePaymentStyles";
import { PaymentUI } from "@wazobia-tech/wazcom/dist/core";
export var Payment = function (_a) {
    var onSuccess = _a.onSuccess;
    var _b = useBlockSelector(function (store) { return store; }), mainConfig = _b.mainConfig, buttonConfig = _b.buttonConfig;
    var classes = usePaymentStyles(mainConfig);
    var buttonClasses = usePaymentStyles(buttonConfig);
    var paymentRef = useRef();
    useEffect(function () {
        var _a;
        (_a = paymentRef === null || paymentRef === void 0 ? void 0 : paymentRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }, []);
    return (_jsxs("div", { ref: paymentRef, className: classes.root, children: [_jsx("h4", { className: classes.title, children: "Payment Options" }), _jsx(PaymentUI, { displayButton: true, onSuccess: onSuccess, classNames: {
                    root: classes.paymentRoot,
                    paymentHeading: classes.paymentComponentHeading,
                    paymentSubheading: classes.paymentComponentSubheading,
                    paymentOption: classes.paymentComponentOption,
                    button: buttonClasses.paymentComponentButton,
                } })] }));
};
