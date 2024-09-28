import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BlockProvider, Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock18Styles } from "./useBlock18Styles";
export var EleganteBlock18 = function (_a) {
    var _b;
    var activeElement = _a.activeElement, index = _a.index, handleSelect = _a.handleSelect, configuration = _a.configuration;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var buttonConfig = useGetColor(configuration, "button");
    var classes = useBlock18Styles(mainConfig);
    var key = "blocks.".concat(index);
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: buttonConfig, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.box, children: [_jsx("h1", { className: classes.heading, children: "Oops, we couldn\u2019t find this page" }), _jsx("p", { children: "Sorry the page you\u2019re looking for does not exist or has been moved, try refreshing the page or go back home" }), _jsx("div", { className: classes.imgContainer, children: _jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Frame+8829+(1).png", alt: "404" }) })] }) }) }) }));
};
