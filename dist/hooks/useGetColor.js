var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
import { useSelector } from "react-redux";
export var useGetColor = function (configuration, type) {
    var _a;
    var colors = useSelector(function (store) { return store; }).colors;
    var getFonts = useGetFonts();
    var getGlobalColor = function (color) {
        if (!colors)
            return "";
        if (color.startsWith("#"))
            return color;
        var splitted = color.split(".");
        return colors[splitted[0]][splitted[1]];
    };
    var getMappedColor = function (colors) {
        var e_1, _a;
        var hexColors = {};
        try {
            for (var _b = __values(Object.entries(colors)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                hexColors[key] = getGlobalColor(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return hexColors;
    };
    var styleConfig = {
        colors: getMappedColor((_a = configuration === null || configuration === void 0 ? void 0 : configuration.colors) === null || _a === void 0 ? void 0 : _a[type]),
        fonts: getFonts(configuration),
    };
    return styleConfig;
};
export var useGetFonts = function () {
    var fonts = useSelector(function (store) { return store; }).fonts;
    return function (configuration) {
        if (!fonts || !(configuration === null || configuration === void 0 ? void 0 : configuration.fonts))
            return {};
        var parsedFonts = {};
        Object.entries(configuration === null || configuration === void 0 ? void 0 : configuration.fonts).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var font;
            if (!value.includes("font"))
                font = value;
            else {
                var _c = __read(value.split("."), 2), fontKey = _c[1];
                font = fonts[fontKey];
            }
            parsedFonts[key] = font;
        });
        return parsedFonts;
    };
};
