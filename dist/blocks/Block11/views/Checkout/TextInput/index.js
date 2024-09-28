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
import { useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { useBlockSelector } from "../../../../../components";
import clx from "classnames";
import { useTextInputStyles } from "./useTextInputStyles";
export var TextInput = function (_a) {
    var name = _a.name, label = _a.label;
    var _b = __read(useField(name), 2), field = _b[0], meta = _b[1];
    var buttonConfig = useBlockSelector(function (store) { return store; }).buttonConfig;
    var classes = useTextInputStyles(buttonConfig);
    var hasError = meta.touched && meta.error;
    var context = useFormikContext();
    useEffect(function () {
        return function () {
            context.setFieldTouched(name, false);
            context.setFieldValue(name, '');
        };
    }, []);
    var handleChange = function (event) {
        if (!(meta === null || meta === void 0 ? void 0 : meta.touched))
            context.setFieldTouched(name, true);
        context.setFieldValue(name, event.target.value);
    };
    var parsedLabel = (label !== null && label !== void 0 ? label : "").toLowerCase();
    parsedLabel = parsedLabel.includes("address") ? "address" : parsedLabel;
    parsedLabel = parsedLabel.includes("firstname")
        ? "first name"
        : parsedLabel.includes("lastname")
            ? "last name"
            : parsedLabel;
    parsedLabel = parsedLabel.charAt(0).toUpperCase() + parsedLabel.slice(1).toLowerCase() + " *";
    return (_jsxs("div", { className: classes.root, children: [_jsx("input", __assign({}, field, { onChange: handleChange, placeholder: parsedLabel, className: clx(classes.input, hasError && "error") })), hasError && _jsx("span", { className: classes.errorMessage, children: meta.error })] }));
};
