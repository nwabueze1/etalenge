import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// POST VIEW BLOCK
import clx from "classnames";
import { Fragment, useEffect } from "react";
import { Container, Section } from "../../components";
import { useRecordLinkClick, useRecordPostView } from "../../helper";
import { getFormattedDate } from "../../helper/getFormatedDate";
import { useGetColor } from "../../hooks";
import block12 from "../../mappings/block12";
import { parseApiImage } from "../../utils";
import { EleganteBlock8 } from "../Block8";
import { getSocialMediaLinks } from "./helper";
import { useCalculateMinutesRead, useCopyTextToClipBoard } from "./hooks";
import { useBlock12Styles } from "./useBlock12Styles";
import { createResponsiveImage } from "../../helper/responsiveImage";
var BLOCK_UUID = block12.uuid;
export var EleganteBlock12 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var activeElement = _a.activeElement, handleSelect = _a.handleSelect, index = _a.index, _j = _a.mode, mode = _j === void 0 ? "view" : _j, content = _a.content, configuration = _a.configuration;
    var heroContent = {
        image: parseApiImage((_b = content === null || content === void 0 ? void 0 : content.post) === null || _b === void 0 ? void 0 : _b.featured_image),
        text: {
            heading: (_c = content === null || content === void 0 ? void 0 : content.post) === null || _c === void 0 ? void 0 : _c.title,
            subtitle: (_d = content === null || content === void 0 ? void 0 : content.post) === null || _d === void 0 ? void 0 : _d.excerpt,
        },
    };
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var classes = useBlock12Styles(mainConfig);
    var socialMediaPlatforms = ["copy", "facebook", "twitter", "linkedin"];
    var _k = useCopyTextToClipBoard(), feedBackText = _k.feedBackText, copyToClipboard = _k.copyToClipboard;
    var contentPost = content === null || content === void 0 ? void 0 : content.post;
    var key = "blocks.".concat(index);
    var recordPostView = useRecordPostView();
    var recordLinkClick = useRecordLinkClick();
    var calculateMinutesRead = useCalculateMinutesRead();
    var relatedPosts = ((_e = content === null || content === void 0 ? void 0 : content.post) === null || _e === void 0 ? void 0 : _e.related_posts) || [];
    useEffect(function () {
        var _a;
        recordPostView((_a = content === null || content === void 0 ? void 0 : content.post) === null || _a === void 0 ? void 0 : _a.uuid);
    }, []);
    var handleRelatedPostClick = function (text, url) {
        mode === "view" && recordLinkClick(text, url, BLOCK_UUID);
    };
    var socialMediaProps = {
        slug: (_f = contentPost === null || contentPost === void 0 ? void 0 : contentPost.slug) !== null && _f !== void 0 ? _f : "",
        feedBackText: feedBackText,
        onCopyLink: copyToClipboard,
    };
    var renderSocialMedia = function () {
        return socialMediaPlatforms.map(function (platform, index) { return (_jsx(Fragment, { children: getSocialMediaLinks(platform, socialMediaProps, classes) }, index)); });
    };
    var renderRelatedPosts = function () {
        return relatedPosts.map(function (post, index) {
            var parsedImage = parseApiImage(post === null || post === void 0 ? void 0 : post.featured_image);
            return (_jsxs("div", { className: classes.card, children: [createResponsiveImage(parsedImage, {
                        className: classes.image,
                        classNames: {
                            picture: classes.imageContainer,
                        },
                    }), _jsxs("div", { children: [_jsx("p", { className: classes.postCategory, children: post === null || post === void 0 ? void 0 : post.category_name }), _jsx("h6", { className: classes.postTitle, children: _jsx("a", { href: mode === "view" ? post === null || post === void 0 ? void 0 : post.slug : undefined, onClick: function () { var _a; return handleRelatedPostClick(post === null || post === void 0 ? void 0 : post.title, (_a = post === null || post === void 0 ? void 0 : post.slug) !== null && _a !== void 0 ? _a : ""); }, children: post === null || post === void 0 ? void 0 : post.title }) })] })] }, index));
        });
    };
    var getText = function (subtitle, title) {
        return (_jsxs("div", { className: classes.authorBlock, children: [_jsx("p", { children: subtitle }), _jsx("h6", { children: title })] }));
    };
    var renderAuthor = function () {
        var _a, _b;
        return (_jsx("div", { className: classes.authorBlock, children: getText("Written by", (_b = (_a = contentPost === null || contentPost === void 0 ? void 0 : contentPost.author) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "") }));
    };
    var renderDate = function () {
        var _a;
        return (_jsx("div", { className: classes.authorBlock, children: getText("Published on", getFormattedDate((_a = contentPost === null || contentPost === void 0 ? void 0 : contentPost.published_at) !== null && _a !== void 0 ? _a : "")) }));
    };
    var renderReadTime = function () {
        var _a;
        return (_jsx("div", { className: classes.authorBlock, children: getText("Read Time", calculateMinutesRead((_a = content === null || content === void 0 ? void 0 : content.post) === null || _a === void 0 ? void 0 : _a.content)) }));
    };
    return (_jsxs("div", { className: clx(classes.root, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, style: { background: (_g = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _g === void 0 ? void 0 : _g[100] }, children: [_jsx(EleganteBlock8, { content: heroContent, configuration: configuration }), _jsx(Container, { children: _jsxs("div", { className: classes.headerBlock, children: [renderAuthor(), renderDate(), renderReadTime(), _jsx("div", { className: classes.socialContainer, children: renderSocialMedia() })] }) }), _jsx(Section, { background: "", children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsx("div", { className: classes.content, dangerouslySetInnerHTML: { __html: (_h = content === null || content === void 0 ? void 0 : content.post) === null || _h === void 0 ? void 0 : _h.content } }), relatedPosts.length > 0 && (_jsxs("div", { className: classes.related, children: [_jsx("h5", { className: classes.relatedHeading, children: "Related Posts" }), renderRelatedPosts()] }))] }) }) })] }));
};
