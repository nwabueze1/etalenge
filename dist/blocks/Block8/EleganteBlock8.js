import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetColor } from "../../hooks";
import { useBlock8Styles } from "./useBlock8Styles";
import { Container } from "../../components";
import clx from "classnames";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var EleganteBlock8 = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var activeElement = _a.activeElement, configuration = _a.configuration, screenSize = _a.screenSize, content = _a.content, index = _a.index, handleSelect = _a.handleSelect;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var classes = useBlock8Styles(mainConfig);
    var key = "blocks.".concat(index);
    var image = content === null || content === void 0 ? void 0 : content.image;
    var image_source = ((_b = image === null || image === void 0 ? void 0 : image.source) === null || _b === void 0 ? void 0 : _b.includes("unsplash")) ? "Unsplash" : "Pexels";
    return (_jsxs("section", { className: clx(classes.root, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, style: { background: (_c = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _c === void 0 ? void 0 : _c[100] }, children: [_jsx(Container, { children: _jsx("div", { className: classes.block, children: _jsx("div", { className: classes.contentCard, children: _jsxs("header", { className: classes.header, children: [_jsx("h1", { className: classes.heading, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.heading) }), _jsx("p", { className: classes === null || classes === void 0 ? void 0 : classes.subheading, children: decodeText((_e = content === null || content === void 0 ? void 0 : content.text) === null || _e === void 0 ? void 0 : _e.subtitle) }), (image === null || image === void 0 ? void 0 : image.photographer) && (image === null || image === void 0 ? void 0 : image.source) && (_jsx("p", { className: classes.featuredImageAttribution, children: _jsxs("em", { children: ["Photo by", " ", _jsx("a", { href: (_f = image === null || image === void 0 ? void 0 : image.photographer) === null || _f === void 0 ? void 0 : _f.url, target: "_blank", children: (_g = image === null || image === void 0 ? void 0 : image.photographer) === null || _g === void 0 ? void 0 : _g.name }), " ", "on", " ", _jsx("a", { href: image === null || image === void 0 ? void 0 : image.source, target: "_blank", children: image_source })] }) }))] }) }) }) }), _jsx("div", { className: classes.overlay }), createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                className: classes.backgroundImage,
                screenSize: screenSize,
            })] }));
};
