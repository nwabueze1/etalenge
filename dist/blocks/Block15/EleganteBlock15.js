import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BlockProvider, Button, Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock15Styles } from "./useBlock15Styles";
import block15 from "../../mappings/block15";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";
var BLOCK_UUID = block15.uuid;
export var EleganteBlock15 = function (_a) {
    var _b, _c, _d;
    var activeElement = _a.activeElement, handleSelect = _a.handleSelect, index = _a.index, content = _a.content, configuration = _a.configuration, mode = _a.mode, screenSize = _a.screenSize;
    var buttonConfig = useGetColor(configuration, "button");
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var classes = useBlock15Styles(mainConfig);
    var buttonClass = useBlock15Styles(buttonConfig);
    var key = "blocks.".concat(index);
    var renderCards = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.cards) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return (_jsxs("article", { className: classes.card, children: [_jsx("h6", { className: classes.cardHeader, children: item === null || item === void 0 ? void 0 : item.title }), _jsx("p", { className: classes.cardDescription, children: item === null || item === void 0 ? void 0 : item.subtitle })] }, index)); });
    };
    var renderButtons = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.buttons) === null || _a === void 0 ? void 0 : _a.map(function (button, index) { return (_jsx(Button, { size: "md", className: (button === null || button === void 0 ? void 0 : button.variant) === "outlined" ? buttonClass.buttonOutlined : "", variant: button === null || button === void 0 ? void 0 : button.variant, mode: mode, href: button.url, children: button.text }, index)); });
    };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: buttonConfig, block_uuid: BLOCK_UUID, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsxs("div", { className: classes.content, children: [_jsx("h2", { className: classes.heading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.heading) }), _jsx("p", { className: classes.subheading, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.subheading) }), _jsx("div", { className: classes.cardsContainer, children: renderCards() }), _jsx("div", { className: classes.buttonContainer, children: renderButtons() })] }), createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                            className: classes.image,
                            screenSize: screenSize,
                            classNames: {
                                picture: classes.content,
                            },
                            styles: {
                                picture: {
                                    display: "flex",
                                },
                            },
                        })] }) }) }) }));
};
