var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlugInForm } from "@wazobia-tech/wazcom/dist/io";
import clx from "classnames";
import { useRef } from "react";
import { FaDiscord, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube, FiGithub } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Container } from "../../components";
import { createApolloClient, notify, useRecordFormSubmission } from "../../helper";
import { useGetColor } from "../../hooks";
import block2 from "../../mappings/block2";
import { useBlock2Styles } from "./useBlock2Styles";
var BLOCK_UUID = block2.uuid;
export var EleganteBlock2 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var activeElement = _a.activeElement, _k = _a.mode, mode = _k === void 0 ? "view" : _k, content = _a.content, configuration = _a.configuration, index = _a.index, handleSelect = _a.handleSelect;
    var styleConfig = useGetColor(configuration, "main");
    var classes = useBlock2Styles(styleConfig);
    var formRef = useRef(null);
    var gatewayUrl = useSelector(function (store) { return store; }).gatewayUrl;
    var recordFormSubmission = useRecordFormSubmission();
    var key = "blocks.".concat(index);
    var pluginFormClasses = {
        textField: {
            input: classes.textFieldInput,
            inputContainer: classes.textFieldInput,
            errorMessage: classes.textFieldInputErrorMessage,
        },
    };
    var palette = {
        colors: {
            main: (_b = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.colors) === null || _b === void 0 ? void 0 : _b[200],
            hover: (_c = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.colors) === null || _c === void 0 ? void 0 : _c[200],
        },
        typography: {
            input: {
                fontFamily: (_d = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.fonts) === null || _d === void 0 ? void 0 : _d.body,
                color: (_e = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.colors) === null || _e === void 0 ? void 0 : _e[200],
            },
            label: {
                fontFamily: (_f = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.fonts) === null || _f === void 0 ? void 0 : _f.body,
                color: (_g = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.colors) === null || _g === void 0 ? void 0 : _g[200],
            },
        },
    };
    var renderSocialMedia = function (icon, index) {
        var _a;
        var props = { className: classes.icon, key: index };
        var element = null;
        switch ((_a = icon === null || icon === void 0 ? void 0 : icon.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
            case "facebook":
                element = _jsx(FiFacebook, __assign({}, props));
                break;
            case "instagram":
                element = _jsx(FiInstagram, __assign({}, props));
                break;
            case "youtube":
                element = _jsx(FiYoutube, __assign({}, props));
                break;
            case "twitter":
                element = _jsx(FiTwitter, __assign({}, props));
                break;
            case "linkedin":
                element = _jsx(FiLinkedin, __assign({}, props));
                break;
            case "discord":
                element = _jsx(FaDiscord, __assign({}, props));
                break;
            case "whatsapp":
                element = _jsx(FaWhatsapp, __assign({}, props));
                break;
            case "tiktok":
                element = _jsx(FaTiktok, __assign({}, props));
                break;
            case "github":
                element = _jsx(FiGithub, __assign({}, props));
                break;
            default:
                element = null;
                break;
        }
        return (_jsx("a", { href: mode === "edit" ? undefined : icon === null || icon === void 0 ? void 0 : icon.url, className: classes.iconContainer, children: element }, index));
    };
    var renderFooterLink = function (link, index) {
        var element = null;
        var tag = link;
        element = (_jsx("a", { href: mode === "view" ? tag.url : undefined, className: clx(classes.footerLink, !tag.not_url && "url"), children: tag.text }, index));
        return element;
    };
    var handleNotify = function (status, text) {
        notify(status, text);
        if (status === "success") {
            recordFormSubmission(content === null || content === void 0 ? void 0 : content.form_uuid, BLOCK_UUID);
        }
    };
    var handleSubmit = function () {
        var _a, _b;
        (_b = (_a = formRef === null || formRef === void 0 ? void 0 : formRef.current) === null || _a === void 0 ? void 0 : _a.submit) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    var renderFooter = function () {
        var _a;
        return (_a = content === null || content === void 0 ? void 0 : content.footerLinks) === null || _a === void 0 ? void 0 : _a.map(function (item, index) {
            var _a, _b, _c, _d;
            return (_jsxs("div", { children: [!((_b = (_a = item === null || item === void 0 ? void 0 : item.links) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.icon) && _jsx("h6", { className: classes.footerLinkHeader, children: item === null || item === void 0 ? void 0 : item.name }), _jsxs("div", { className: classes.footerLinkContainer, children: [(_c = item.links) === null || _c === void 0 ? void 0 : _c.map(renderFooterLink), index === ((_d = content === null || content === void 0 ? void 0 : content.footerLinks) === null || _d === void 0 ? void 0 : _d.length) - 1 && (_jsx("div", { className: classes.socialMediaContainer, children: renderSocialMediaButtons() }))] })] }, index));
        });
    };
    var renderSocialMediaButtons = function () { return ((content === null || content === void 0 ? void 0 : content.icons) || []).map(renderSocialMedia); };
    return (_jsxs("section", { className: clx(classes.section, activeElement === key && "active"), onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, children: [_jsx("footer", { className: classes.root, children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsxs("header", { className: classes.footerHeader, children: [_jsx("h6", { className: classes.footerLogo, children: (_h = content === null || content === void 0 ? void 0 : content.text) === null || _h === void 0 ? void 0 : _h.main }), _jsx("p", { className: classes.footerCaption, children: (_j = content === null || content === void 0 ? void 0 : content.text) === null || _j === void 0 ? void 0 : _j.body }), _jsxs("div", { className: classes.formContainer, children: [
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            _jsx(PlugInForm, { apolloClient: { client: createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "") }, ref: formRef, form: content === null || content === void 0 ? void 0 : content.form, form_uuid: content === null || content === void 0 ? void 0 : content.form_uuid, classNames: pluginFormClasses, style: { flex: 1 }, onNotify: handleNotify, palette: palette }), _jsx("button", { onClick: handleSubmit, className: classes.submitBtn, children: "Submit" })] })] }), renderFooter()] }) }) }), _jsx("menu", { className: classes.footerMenu, children: _jsx(Container, { children: _jsxs("div", { className: classes.footerMenuContent, children: [_jsxs("p", { className: classes.footerMenuText, children: ["\u00A9 Elegante, ", new Date().getFullYear(), " - All rights reserved."] }), _jsx("p", { className: classes.footerMenuText, children: "Made with Hivedeck" })] }) }) })] }));
};
