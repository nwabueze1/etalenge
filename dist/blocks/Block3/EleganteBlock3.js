var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useGetColor } from "../../hooks";
import { useBlock3Styles } from "./useBlock3Styles";
import { Container } from "../../components";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import clx from "classnames";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";
export var EleganteBlock3 = function (_a) {
    var _b, _c;
    var activeElement = _a.activeElement, configuration = _a.configuration, content = _a.content, index = _a.index, 
    // screenSize,
    handleSelect = _a.handleSelect;
    var colorConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var classes = useBlock3Styles(colorConfig);
    var key = "blocks.".concat(index);
    // const [activeSlide, setActiveSlide] = useState<number>(0);
    // const comments = useMemo(() => content?.comments ?? [], [content?.comments]);
    var carouselRef = useRef(null);
    // const theme = useTheme();
    var handleClick = function (direction) {
        var _a, _b;
        if (direction === "prev") {
            (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.prev();
        }
        else if (direction === "next") {
            (_b = carouselRef.current) === null || _b === void 0 ? void 0 : _b.next();
        }
    };
    // const slides = {
    //   spacing: lg ? 24 : 16,
    //   perView: lg ? 3.4 : md ? 1.7 : 1.2,
    // };
    // const renderComments = () =>
    //   comments?.map((comment: TComment, index: number) => (
    //     <div key={index}>
    //       <Comment
    //         screenSize={screenSize}
    //         {...comment}
    //         user={{ name: comment?.userName, image: comment?.image, description: comment?.userDescription }}
    //         classes={classes}
    //       />
    //     </div>
    //   ));
    return (_jsx("section", { className: clx(classes.root, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, style: { background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100] }, children: _jsxs(Container, { children: [_jsxs("header", { className: classes.header, children: [_jsx("h4", { className: classes.title, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.title) }), _jsxs("div", { className: classes.buttonContainer, children: [_jsx("button", { className: clx(classes.button), onClick: function () { return handleClick("prev"); }, children: _jsx(BsArrowLeft, { className: classes.chevronIcon }) }), _jsx("button", { className: clx(classes.button), onClick: function () { return handleClick("next"); }, children: _jsx(BsArrowRight, { className: classes.chevronIcon }) })] })] }), _jsx("div", { className: "slider-container" })] }) }));
};
export var Comment = function (_a) {
    var _b, _c, _d;
    var classes = _a.classes, props = __rest(_a, ["classes"]);
    return (_jsxs("div", { className: classes.testimonialContainer, children: [_jsx("h5", { className: classes.testimonialTitle, children: decodeText(props === null || props === void 0 ? void 0 : props.title) }), _jsx("p", { className: classes.testimonialSubtitle, children: decodeText(props === null || props === void 0 ? void 0 : props.description) }), _jsx("div", { className: classes.testimonialDivider }), _jsxs("div", { className: classes.userContainer, children: [createResponsiveImage((_b = props === null || props === void 0 ? void 0 : props.user) === null || _b === void 0 ? void 0 : _b.image, {
                        className: classes.userImage,
                        screenSize: props === null || props === void 0 ? void 0 : props.screenSize,
                        styles: {
                            picture: {
                                display: "block",
                            },
                        },
                    }), _jsxs("div", { children: [_jsx("h6", { className: classes.userName, children: decodeText((_c = props === null || props === void 0 ? void 0 : props.user) === null || _c === void 0 ? void 0 : _c.name) }), _jsx("p", { className: classes.userDescription, children: decodeText((_d = props === null || props === void 0 ? void 0 : props.user) === null || _d === void 0 ? void 0 : _d.description) })] })] })] }));
};
