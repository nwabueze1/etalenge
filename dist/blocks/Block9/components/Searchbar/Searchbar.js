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
import { useRef, useState } from "react";
import { Button } from "../../../../components";
import { CircularProgress } from "@mui/material";
export var Searchbar = function (_a) {
    var onSearch = _a.onSearch, classes = _a.classes, loading = _a.loading;
    var _b = __read(useState(""), 2), state = _b[0], setState = _b[1];
    var btnRef = useRef(null);
    var handleBtnClick = function () {
        var _a;
        (_a = btnRef === null || btnRef === void 0 ? void 0 : btnRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return (_jsxs("form", { className: classes.searchContainer, onSubmit: function (e) {
            e.preventDefault();
            if (state.length > 0)
                onSearch === null || onSearch === void 0 ? void 0 : onSearch(state);
        }, children: [_jsx("input", { placeholder: "Enter your keyword", value: state, onChange: function (e) { return setState(e.target.value); } }), _jsx(Button, { className: classes.button, onClick: handleBtnClick, size: "md", variant: "contained", children: loading ? _jsx(CircularProgress, { size: 15, color: "inherit" }) : " Search" }), _jsx("button", { style: { display: "none" }, type: "submit", ref: btnRef })] }));
};
