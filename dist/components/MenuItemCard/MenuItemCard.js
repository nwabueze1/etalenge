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
import { useEffect, useState } from "react";
import { useBlockSelector } from "../BlockProvider";
import { useMenuItemCardStyles } from "./useMenuItemCardStyles";
import { getCurrency, parsePostImage } from "../../helper";
import { IoBagOutline, IoBag } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Modal } from "../Modal";
import { MenuItem } from "../../blocks/Block10/MenuItem";
import { Skeleton } from "@mui/material";
import { useGetMenuItem } from "../../blocks/Block10/hooks";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var MenuItemCard = function (_a) {
    var _b;
    var menuItem = _a.menuItem, screenSize = _a.screenSize, currencyProp = _a.currency, mode = _a.mode, isSsr = _a.isSsr;
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var classes = useMenuItemCardStyles(mainConfig);
    var parseImage = parsePostImage(menuItem.image);
    var currency = getCurrency(currencyProp);
    var _c = __read(useState(false), 2), isCartHovered = _c[0], setIsCartHovered = _c[1];
    var _d = __read(useState(false), 2), openModal = _d[0], setOpenModal = _d[1];
    var _e = __read(useState(false), 2), loading = _e[0], setLoading = _e[1];
    var _f = __read(useState(menuItem), 2), ssrMenuItem = _f[0], setSsrMenuItem = _f[1];
    var getMenuItem = useGetMenuItem(setLoading);
    var category = (_b = menuItem === null || menuItem === void 0 ? void 0 : menuItem.slug) === null || _b === void 0 ? void 0 : _b.split("/")[1];
    var handleMouseEnter = function () { return setIsCartHovered(true); };
    var handleMouseLeave = function () { return setIsCartHovered(false); };
    var renderSkeleton = function () { return (_jsxs(_Fragment, { children: [_jsx(Skeleton, { height: 200, width: "100%" }), _jsxs("div", { children: [_jsx(Skeleton, { height: 60, width: "100%" }), _jsx(Skeleton, { height: 40, width: "100%" }), _jsx(Skeleton, { height: 100, width: "100%" })] })] })); };
    useEffect(function () {
        var _a;
        if (!isSsr)
            return;
        getMenuItem((_a = menuItem.uuid) !== null && _a !== void 0 ? _a : "", setSsrMenuItem);
    }, []);
    return (_jsxs("article", { className: classes.root, children: [_jsxs("div", { className: classes.cardContent, children: [createResponsiveImage(parseImage, {
                        className: classes.image,
                        screenSize: screenSize,
                        classNames: {
                            picture: classes.imageContainer,
                        },
                    }), _jsxs("div", { className: classes.cardTextContainer, children: [_jsx("h4", { className: classes.title, children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.name }), _jsx("p", { className: classes.subtitle, children: menuItem === null || menuItem === void 0 ? void 0 : menuItem.description }), _jsxs("div", { className: classes.detailsContainer, children: [_jsxs("a", { href: mode === "edit" ? "#" : menuItem === null || menuItem === void 0 ? void 0 : menuItem.slug, className: classes.moreInfo, children: ["More info", _jsx(IoIosArrowRoundForward, { className: classes.arrowRight })] }), category && _jsx("div", { className: classes.menuCategory, children: category })] })] }), _jsxs("div", { className: classes.cardFooter, children: [_jsxs("h6", { className: classes.price, children: [currency, " ", menuItem === null || menuItem === void 0 ? void 0 : menuItem.price] }), _jsx("div", { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: classes.cartIconContainer, onClick: function () { return setOpenModal(true); }, children: !isCartHovered ? _jsx(IoBagOutline, { className: classes.cartIcon }) : _jsx(IoBag, { className: classes.cartIcon }) })] })] }), mode !== "edit" && (_jsx(Modal, { open: openModal, onClose: function () { return setOpenModal(false); }, children: loading ? (renderSkeleton()) : (_jsx(MenuItem, { isSsr: true, menu_item: isSsr ? ssrMenuItem : menuItem, onItemAddedToCart: function () { return setOpenModal(false); }, screenSize: screenSize })) }))] }));
};
