import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { calculateCropCoordinates } from "./image";
export var createResponsiveImage = function (image, options) {
    var _a, _b, _c;
    if (!image) {
        return _jsx("img", { className: options === null || options === void 0 ? void 0 : options.className, src: "", alt: "", ref: options === null || options === void 0 ? void 0 : options.ref }, options === null || options === void 0 ? void 0 : options.key);
    }
    if (typeof image === "string")
        image = JSON.parse(image);
    var img = image;
    var _d = getImageSrcSets(img, options), desktop = _d.desktop, mobile = _d.mobile, tablet = _d.tablet;
    return (_jsxs("picture", { style: (_a = options === null || options === void 0 ? void 0 : options.styles) === null || _a === void 0 ? void 0 : _a.picture, className: (_b = options === null || options === void 0 ? void 0 : options.classNames) === null || _b === void 0 ? void 0 : _b.picture, children: [_jsx("source", { media: "(max-width:749px)", srcSet: mobile, style: { display: "block" } }), _jsx("source", { media: "(max-width:1099px)", srcSet: tablet, style: { display: "block" } }), _jsx("source", { media: "(min-width:1100px)", srcSet: desktop, style: { display: "block" } }), _jsx("img", { className: options === null || options === void 0 ? void 0 : options.className, src: img.src, alt: img.alternative_text, ref: options === null || options === void 0 ? void 0 : options.ref, style: (_c = options === null || options === void 0 ? void 0 : options.styles) === null || _c === void 0 ? void 0 : _c.img, draggable: false })] }, options === null || options === void 0 ? void 0 : options.key));
};
var getImageSrcSets = function (image, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    var dolosUrl = "https://dolos.hivedeck.com";
    var isAmpersand = (_a = image === null || image === void 0 ? void 0 : image.src) === null || _a === void 0 ? void 0 : _a.includes("?");
    if (options === null || options === void 0 ? void 0 : options.screenSize) {
        var desktop_1 = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(options === null || options === void 0 ? void 0 : options.screenSize).concat(calculateCropCoordinates(options === null || options === void 0 ? void 0 : options.screenSize, (_b = image === null || image === void 0 ? void 0 : image.coordinates) === null || _b === void 0 ? void 0 : _b.desktop));
        var tablet_1 = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(options === null || options === void 0 ? void 0 : options.screenSize).concat(calculateCropCoordinates(options === null || options === void 0 ? void 0 : options.screenSize, (_c = image === null || image === void 0 ? void 0 : image.coordinates) === null || _c === void 0 ? void 0 : _c.desktop));
        var mobile_1 = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-").concat(options === null || options === void 0 ? void 0 : options.screenSize).concat(calculateCropCoordinates(options === null || options === void 0 ? void 0 : options.screenSize, (_d = image === null || image === void 0 ? void 0 : image.coordinates) === null || _d === void 0 ? void 0 : _d.desktop));
        return {
            desktop: desktop_1,
            tablet: tablet_1,
            mobile: mobile_1,
        };
    }
    var desktop = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-1100").concat(calculateCropCoordinates(1100, (_e = image === null || image === void 0 ? void 0 : image.coordinates) === null || _e === void 0 ? void 0 : _e.desktop));
    var tablet = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-750").concat(calculateCropCoordinates(750, (_f = image === null || image === void 0 ? void 0 : image.coordinates) === null || _f === void 0 ? void 0 : _f.tablet));
    var mobile = "".concat(dolosUrl, "/").concat(image === null || image === void 0 ? void 0 : image.src).concat(isAmpersand ? "&tr" : "?tr", "=w-450").concat(calculateCropCoordinates(450, (_g = image === null || image === void 0 ? void 0 : image.coordinates) === null || _g === void 0 ? void 0 : _g.mobile));
    return {
        desktop: desktop,
        tablet: tablet,
        mobile: mobile,
    };
};
