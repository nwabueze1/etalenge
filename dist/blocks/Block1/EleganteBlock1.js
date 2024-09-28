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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock1Styles } from "./useBlock1Styles";
import { SlHandbag } from "react-icons/sl";
import { RiMenu3Fill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import clx from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";
import { useRecordLinkClick } from "../../helper";
import block1 from "../../mappings/block1";
var BLOCK_UUID = block1.uuid;
export var EleganteBlock1 = function (_a) {
    var _b, _c;
    var configuration = _a.configuration, content = _a.content, _d = _a.mode, mode = _d === void 0 ? "view" : _d, index = _a.index, handleSelect = _a.handleSelect, activeElement = _a.activeElement;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var mainConfig = useGetColor(configuration, "main");
    var classes = useBlock1Styles(mainConfig);
    var cartItemCount = (restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart)
        ? (_c = (_b = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart) === null || _b === void 0 ? void 0 : _b.cartItems) === null || _c === void 0 ? void 0 : _c.length
        : (restaurant === null || restaurant === void 0 ? void 0 : restaurant.cartItemCount) !== undefined
            ? restaurant === null || restaurant === void 0 ? void 0 : restaurant.cartItemCount
            : 0;
    var _e = __read(useState(false), 2), openDrawer = _e[0], setOpenDrawer = _e[1];
    var _f = __read(useState(false), 2), openSearch = _f[0], setOpenSearch = _f[1];
    var theme = useTheme();
    var isWeb = useMediaQuery(theme.breakpoints.up("lg"));
    var key = "blocks.".concat(index);
    var _g = __read(useState(""), 2), activeLink = _g[0], setActiveLink = _g[1];
    var _h = __read(useState(""), 2), searchValue = _h[0], setSearchValue = _h[1];
    var _j = __read(useState(false), 2), searchPage = _j[0], setSearchPage = _j[1];
    var inputRef = useRef(null);
    var recordLinkClick = useRecordLinkClick();
    var handleClick = function (text, url) {
        mode === "view" && recordLinkClick(text, url, BLOCK_UUID);
    };
    var handleChange = function (e) { return setSearchValue(e.target.value); };
    var handleToggleDrawer = function () { return setOpenDrawer(!openDrawer); };
    var handleToggleSearch = function () { return setOpenSearch(!openSearch); };
    var renderNavLinks = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.links) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (_jsx("li", { className: clx(classes.navLink, activeLink === item.url && "active"), children: _jsx("a", { href: mode === "view" ? item.url : undefined, onClick: function () { var _a; return handleClick(item.text, (_a = item.url) !== null && _a !== void 0 ? _a : ""); }, children: item.text }) }, index)); });
    };
    var handleNavigateToSearch = function (e) {
        e.preventDefault();
        if (typeof window === "undefined")
            return;
        var path = window.location.pathname;
        if (path === "/search") {
            var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?query=" + searchValue;
            window.history.pushState({ path: newUrl }, "", newUrl);
        }
        else
            window.location.href = "/search?query=".concat(searchValue);
    };
    useEffect(function () {
        var _a;
        if (openSearch && (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current))
            (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        if (typeof window !== "undefined") {
            document.body.style.overflowY = (openDrawer && !isWeb) || openSearch ? "hidden" : "visible";
            var path = window.location.pathname;
            setActiveLink(path);
            if (path === "/") {
                setActiveLink("");
            }
            if (path === "/search") {
                setSearchPage(true);
            }
        }
    }, [openDrawer, isWeb, openSearch]);
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: clx(classes.root, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, children: _jsxs(Container, { children: [_jsxs("nav", { className: classes.nav, children: [_jsx("h4", { className: classes.navLogo, children: _jsx("a", { href: mode === "view" ? "/" : undefined, children: content.text.main }) }), _jsx("div", { className: classes.navLinkContainer, children: renderNavLinks() }), _jsxs("div", { className: classes.iconContainer, children: [!searchPage && _jsx(MdSearch, { className: classes.searchIcon, onClick: handleToggleSearch }), _jsx("div", { className: classes.iconBlockContainer, children: _jsxs("a", { href: mode === "view" ? "/cart" : undefined, className: classes.iconBlock, children: [_jsx("p", { className: classes.iconBlockText, children: "Cart" }), _jsx(SlHandbag, { className: classes.icon }), _jsx("div", { className: classes.cartCounterContainer, children: _jsx("p", { className: classes.cartCounterText, children: cartItemCount }) })] }) })] }), _jsx(RiMenu3Fill, { className: classes.hamburger, onClick: handleToggleDrawer }), _jsxs("form", { onSubmit: handleNavigateToSearch, className: clx(classes.searchContainer, !openSearch && "hidden"), children: [_jsx("input", { className: classes.searchInput, value: searchValue, onChange: handleChange, placeholder: "Search ...", autoFocus: true, ref: inputRef }), _jsx("button", { type: "submit", className: classes.searchButton, children: "Search" })] })] }), openSearch && _jsx("div", { className: classes.searchOverlay, onClick: function () { return setOpenSearch(false); } })] }) }), !isWeb && mode === "view" && (_jsxs(_Fragment, { children: [_jsx("ul", { className: clx(classes.navDrawerContainer, openDrawer && "active"), children: renderNavLinks() }), openDrawer && _jsx("div", { className: classes.overlay, onClick: function () { return setOpenDrawer(false); } })] }))] }));
};
