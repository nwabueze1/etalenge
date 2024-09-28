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
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowButton, BlockProvider, Container } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock6Styles } from "./useBlock6Styles";
import clx from "classnames";
import { InstagramCard } from "./TInstagramCard";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../helper";
import { useQuery } from "@apollo/client";
import { GET_INSTAGRAM_IMAGES } from "./qgl";
import { create2dMatrixFromStringArray } from "./helper";
import { decodeText } from "../../helper/decodeText";
export var EleganteBlock6 = function (_a) {
    var _b, _c;
    var activeElement = _a.activeElement, content = _a.content, configuration = _a.configuration, _d = _a.mode, mode = _d === void 0 ? "view" : _d, index = _a.index, handleSelect = _a.handleSelect, screenSize = _a.screenSize;
    var gatewayUrl = useSelector(function (state) { return state; }).gatewayUrl;
    var client = useMemo(function () { return createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : ""); }, [gatewayUrl]);
    var data = useQuery(GET_INSTAGRAM_IMAGES, {
        client: client,
        variables: {
            uuid: content === null || content === void 0 ? void 0 : content.site_uuid,
            platform: "Instagram",
            sociable_type: "site",
        },
    }).data;
    var _e = __read(useState([]), 2), _ = _e[0], setInstagramImages = _e[1];
    var _f = __read(useState(false), 2), openModal = _f[0], setOpenModal = _f[1];
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var btnConfig = useGetColor(configuration, "button");
    var classes = useBlock6Styles(mainConfig);
    var key = "blocks.".concat(index);
    var handleOpenModal = function () { return setOpenModal(true); };
    var handleCloseModal = function () {
        setOpenModal(false);
    };
    var renderImages = function (images) {
        return images.map(function (data, index) { return (_jsx(InstagramCard, { image: data === null || data === void 0 ? void 0 : data.image, screenSize: screenSize, config: mainConfig, onClick: handleOpenModal, mode: mode, index: index }, index)); });
    };
    var renderImageCollections = function () {
        return create2dMatrixFromStringArray(content === null || content === void 0 ? void 0 : content.images, 0, []).map(function (item, index) { return (_jsx("div", { className: classes.imagesContainer, children: renderImages(item) }, index)); });
    };
    // const renderModalImages = () =>
    //   (content?.images).map((data: { image: { src: string } }, index: number) => (
    //     <img
    //       key={index}
    //       src={data?.image?.src}
    //       alt={"instagram image"}
    //       className={clx(classes.modalImage)}
    //       srcSet={createImageSrcset(data?.image)}
    //     />
    //   ));
    if (typeof window !== "undefined") {
        document.body.style.overflowY = openModal ? "hidden" : "auto";
    }
    useEffect(function () {
        if (data) {
            setInstagramImages(function () {
                var images = data.getInstagramImages.images;
                return images.filter(function (image) {
                    var imageFileTypes = ["jpeg", "jpg", "gif", "png"];
                    var imageUrl = image.split("?")[0];
                    var ext = imageUrl.substring(imageUrl.lastIndexOf(".") + 1);
                    return imageFileTypes.includes(ext);
                });
            });
        }
    }, [data]);
    var carouselRef = useRef(null);
    var handleClick = function (direction) {
        var _a, _b;
        if (direction === "prev") {
            (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.prev();
        }
        else if (direction === "next") {
            (_b = carouselRef.current) === null || _b === void 0 ? void 0 : _b.next();
        }
    };
    return (_jsxs(BlockProvider, { buttonConfig: btnConfig, children: [_jsx("section", { className: clx(classes.root, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, style: { background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100] }, children: _jsxs(Container, { children: [_jsx("h4", { className: classes.heading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.heading) }), _jsx("div", { className: classes.collections, children: renderImageCollections() })] }) }), openModal && mode === "view" && (_jsxs("div", { className: classes.modal, children: [_jsxs("div", { className: classes.modalContent, children: [_jsx(ArrowButton, { orientation: "left", className: classes.arrowLeft, onClick: function () { return handleClick("prev"); } }), _jsx(ArrowButton, { orientation: "right", className: classes.arrowRight, onClick: function () { return handleClick("next"); } })] }), _jsx("div", { className: classes.modalOverlay, onClick: handleCloseModal })] }))] }));
};
