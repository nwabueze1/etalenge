import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Button } from "../../../../components";
import { CircularProgress } from "@mui/material";
export var Searchbar = function (_a) {
    var onSearch = _a.onSearch, classes = _a.classes, loading = _a.loading, setSearchValue = _a.setSearchValue, searchValue = _a.searchValue;
    var btnRef = useRef(null);
    var handleBtnClick = function () {
        var _a;
        (_a = btnRef === null || btnRef === void 0 ? void 0 : btnRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return (_jsxs("form", { className: classes.searchContainer, onSubmit: function (e) {
            e.preventDefault();
            onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchValue);
        }, children: [_jsx("input", { placeholder: "Enter your keyword", value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); } }), _jsx(Button, { className: classes.button, onClick: handleBtnClick, size: "md", variant: "contained", children: loading ? _jsx(CircularProgress, { size: 15, color: "inherit" }) : " Search" }), _jsx("button", { style: { display: "none" }, type: "submit", ref: btnRef })] }));
};
