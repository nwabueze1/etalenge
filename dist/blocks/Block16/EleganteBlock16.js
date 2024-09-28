import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock16Styles } from "./useBlock16Styles";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var EleganteBlock16 = function (_a) {
    var _b, _c, _d;
    var activeElement = _a.activeElement, handleSelect = _a.handleSelect, index = _a.index, configuration = _a.configuration, content = _a.content, screenSize = _a.screenSize;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var classes = useBlock16Styles(mainConfig);
    var key = "blocks.".concat(index);
    var renderCards = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.cards) === null || _a === void 0 ? void 0 : _a.map(function (card, index) { return (_jsxs("article", { children: [_jsx("h6", { className: classes.cardTitle, children: decodeText(card === null || card === void 0 ? void 0 : card.title) }), _jsx("p", { className: classes.cardSubtitle, children: decodeText(card === null || card === void 0 ? void 0 : card.subtitle) })] }, index)); });
    };
    return (_jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                        className: classes.image,
                        classNames: {
                            picture: classes.content,
                        },
                        screenSize: screenSize,
                        styles: {
                            picture: {
                                display: "flex",
                            },
                        },
                    }), _jsxs("div", { className: classes.content, children: [_jsx("h3", { className: classes.heading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.heading) }), _jsx("p", { className: classes.subheading, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.subheading) }), _jsx("div", { className: classes.cardContainer, children: renderCards() })] })] }) }) }));
};
