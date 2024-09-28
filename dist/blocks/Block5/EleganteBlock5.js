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
import { useEffect, useState } from "react";
import clx from "classnames";
import { useBlock5Styles } from "./useBlock5Styles";
import { useGetColor } from "../../hooks";
import { BlockProvider, Button, Container } from "../../components";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
import block5 from "../../mappings/block5";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
import { createResponsiveImage } from "../../helper/responsiveImage";
var BLOCK_UUID = block5.uuid;
export var EleganteBlock5 = function (_a) {
    var _b, _c, _d;
    var activeElement = _a.activeElement, _e = _a.mode, mode = _e === void 0 ? "view" : _e, content = _a.content, configuration = _a.configuration, index = _a.index, handleSelect = _a.handleSelect, screenSize = _a.screenSize;
    var _f = __read(useState(0), 2), activeSlide = _f[0], setActiveSlide = _f[1];
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var btnConfig = useGetColor(configuration, "button");
    var classes = useBlock5Styles(mainConfig);
    var btnClasses = useBlock5Styles(btnConfig);
    var key = "blocks.".concat(index);
    var sizeOfBlocks = ((content === null || content === void 0 ? void 0 : content.blocks) || []).length;
    var handleNext = function () {
        return setActiveSlide(function (prev) {
            if (sizeOfBlocks === 0)
                return prev;
            if (prev === sizeOfBlocks - 1)
                return 0;
            return prev + 1;
        });
    };
    var handlePrev = function () {
        return setActiveSlide(function (prev) {
            if (sizeOfBlocks === 0)
                return prev;
            if (prev === 0)
                return sizeOfBlocks - 1;
            return prev - 1;
        });
    };
    var renderContent = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.blocks) === null || _a === void 0 ? void 0 : _a.map(function (block, index) {
            var _a, _b;
            return (_jsxs("header", { className: clx(classes.header, activeSlide === index && "active"), children: [_jsx("h1", { className: classes.heading, children: decodeText(block === null || block === void 0 ? void 0 : block.title) }), _jsx(Button, { size: "md", variant: "contained", mode: mode, href: (_a = block === null || block === void 0 ? void 0 : block.button) === null || _a === void 0 ? void 0 : _a.url, children: (_b = block === null || block === void 0 ? void 0 : block.button) === null || _b === void 0 ? void 0 : _b.text })] }));
        });
    };
    var renderTracks = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.blocks) === null || _a === void 0 ? void 0 : _a.map(function (_, index) { return (_jsx("button", { className: clx(btnClasses.trackBtn, activeSlide === index && "active"), onClick: function () { return setActiveSlide(index); } }, index)); });
    };
    var renderNextAndPrevBtns = function () {
        return Array(2)
            .fill(0)
            .map(function (_, index) {
            var isNext = index === 1;
            var clickAction = isNext ? handleNext : handlePrev;
            return (_jsx("button", { onClick: clickAction, className: clx(btnClasses.nextPrevBtn, isNext && "next"), children: isNext ? _jsx(MdOutlineArrowForward, { className: "icon" }) : _jsx(MdOutlineArrowBack, { className: "icon" }) }, index));
        });
    };
    var renderCarouselImages = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.blocks) === null || _a === void 0 ? void 0 : _a.map(function (block, index) {
            return createResponsiveImage(block === null || block === void 0 ? void 0 : block.image, {
                className: clx(classes.image, activeSlide === index && "active"),
                screenSize: screenSize,
            });
        });
    };
    useEffect(function () {
        //set interval for autoscroll
        var interval = setInterval(function () {
            setActiveSlide(function (prevState) {
                if (prevState === ((content === null || content === void 0 ? void 0 : content.blocks) || []).length - 1)
                    return 0;
                else
                    return prevState + 1;
            });
        }, 5000);
        return function () {
            clearInterval(interval);
        };
    }, [activeSlide, content === null || content === void 0 ? void 0 : content.blocks]);
    useEffect(function () {
        if (mode === "edit")
            setActiveSlide(0); //reset the active slide when a block is removed in the editor
    }, [(_b = content === null || content === void 0 ? void 0 : content.blocks) === null || _b === void 0 ? void 0 : _b.length]);
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: btnConfig, block_uuid: BLOCK_UUID, children: _jsx("section", { className: clx(classes.baseRoot, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, style: { background: (_c = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _c === void 0 ? void 0 : _c[100] }, children: _jsxs("div", { className: clx(classes.root), children: [_jsx(Container, { children: _jsx("div", { className: clx(classes.root, "content"), children: _jsxs("div", { className: classes.blockRoot, children: [renderContent(), ((_d = content === null || content === void 0 ? void 0 : content.blocks) === null || _d === void 0 ? void 0 : _d.length) > 1 && (_jsxs("div", { className: classes.actionContainer, children: [_jsx("div", { className: classes.trackContainer, children: renderTracks() }), _jsx("div", { className: classes.nextPrevBtnContainer, children: renderNextAndPrevBtns() })] }))] }) }) }), renderCarouselImages(), _jsx("div", { className: classes.overlay })] }) }) }));
};
