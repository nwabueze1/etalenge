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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CircularProgress, useTheme } from "@mui/material";
import { PlugInForm, } from "@wazobia-tech/wazcom/dist/io/PluginForm";
import clx from "classnames";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BlockProvider, Button, Container, Section } from "../../components";
import { createApolloClient, notify, useRecordFormSubmission } from "../../helper";
import { useGetColor } from "../../hooks";
import block14 from "../../mappings/block14";
import { useBlock14Styles } from "./useBlock14Styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
import { createResponsiveImage } from "../../helper/responsiveImage";
var BLOCK_UUID = block14.uuid;
export var EleganteBlock14 = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var activeElement = _a.activeElement, index = _a.index, configuration = _a.configuration, content = _a.content, handleSelect = _a.handleSelect, screenSize = _a.screenSize;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var buttonConfig = useGetColor(configuration, "button");
    var classes = useBlock14Styles(mainConfig);
    var key = "blocks.".concat(index);
    var formRef = useRef(null);
    var gatewayUrl = useSelector(function (store) { return store; }).gatewayUrl;
    var _k = __read(useState(false), 2), loading = _k[0], setLoading = _k[1];
    var recordFormSubmission = useRecordFormSubmission();
    var theme = useTheme();
    var palette = {
        colors: {
            main: (_b = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _b === void 0 ? void 0 : _b[300],
            hover: (_c = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _c === void 0 ? void 0 : _c[400],
            error: (_d = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _d === void 0 ? void 0 : _d[500],
        },
        typography: {
            input: {
                fontFamily: (_e = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.fonts) === null || _e === void 0 ? void 0 : _e.body,
                fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
            },
            label: {
                fontFamily: (_f = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.fonts) === null || _f === void 0 ? void 0 : _f.body,
                fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
            },
        },
    };
    var formClassNames = {
        textArea: {
            input: clx(classes.textArea, classes.textInput, "textarea"),
            inputContainer: classes.textAreaContainer,
        },
        textField: {
            input: classes.textInput,
            inputContainer: classes.textFieldContainer,
            label: classes.inputLabel,
        },
        phoneNumberInput: {
            phoneNumberInput: "phone",
            buttonClass: "button",
            phoneNumberInputContainer: clx(classes.textFieldContainer, "phone"),
            phoneNumberInputRoot: classes.phoneNumberInputContainer,
            dropdownClass: "dropdown",
            label: classes.inputLabel,
        },
        imageUpload: {
            container: clx(classes.imageUploadContainer, "image-upload"),
        },
    };
    var handleNotify = function (status, text) {
        notify(status, text);
        if (status === "success")
            recordFormSubmission(content === null || content === void 0 ? void 0 : content.form_uuid, BLOCK_UUID);
    };
    var submitButton = (_jsx(Button, { onClick: function () { var _a, _b; return (_b = (_a = formRef === null || formRef === void 0 ? void 0 : formRef.current) === null || _a === void 0 ? void 0 : _a.submit) === null || _b === void 0 ? void 0 : _b.call(_a); }, variant: "contained", className: classes.submitButton, size: "md", type: "submit", children: loading ? _jsx(CircularProgress, { size: 16, color: "inherit" }) : "Submit" }));
    return (_jsx(BlockProvider, { buttonConfig: buttonConfig, mainConfig: mainConfig, block_uuid: BLOCK_UUID, children: _jsx(_Fragment, { children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_g = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _g === void 0 ? void 0 : _g[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsxs("div", { children: [_jsxs("header", { className: classes.header, children: [_jsx("h4", { className: classes.heading, children: decodeText((_h = content === null || content === void 0 ? void 0 : content.text) === null || _h === void 0 ? void 0 : _h.heading) }), _jsx("p", { className: classes.subheading, children: decodeText((_j = content === null || content === void 0 ? void 0 : content.text) === null || _j === void 0 ? void 0 : _j.subheading) })] }), _jsx("div", { className: classes.formBlock, children: 
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        _jsx(PlugInForm, { apolloClient: { client: createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "") }, className: classes.formContainer, form: content === null || content === void 0 ? void 0 : content.form, form_uuid: content === null || content === void 0 ? void 0 : content.form_uuid, classNames: formClassNames, submitButton: submitButton, setLoading: setLoading, onNotify: handleNotify, palette: palette }) })] }), createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                                className: classes.image,
                                screenSize: screenSize,
                                styles: {
                                    picture: {
                                        display: "block",
                                    },
                                },
                            })] }) }) }) }) }));
};
