import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock14Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        block: (_a = {
                display: "grid",
                gap: theme.spacing(4)
            },
            _a[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _a),
        formBlock: (_b = {
                border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]); },
                padding: theme.spacing(1),
                borderRadius: theme.spacing(1)
            },
            _b[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(3),
            },
            _b),
        formContainer: (_c = {
                gap: theme.spacing(2),
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                display: "flex",
                flexDirection: "column"
            },
            _c[theme.breakpoints.up("md")] = {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _c[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(4),
            },
            _c["& > div:has(textarea), & > div:has(.image-upload)"] = {
                gridColumn: "1/ span 2",
            },
            _c),
        image: {
            display: "block",
            width: "100%",
            height: "auto",
        },
        header: (_d = {
                marginBottom: theme.spacing(2.5)
            },
            _d[theme.breakpoints.up("lg")] = {
                marginBottom: theme.spacing(5),
            },
            _d),
        heading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 30),
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        },
        subheading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a.body; },
            marginTop: theme.spacing(1),
            maxWidth: 488,
        },
        textAreaContainer: (_e = {
                display: "flex"
            },
            _e[theme.breakpoints.up("md")] = {
                gridColumn: "1/span 2",
            },
            _e),
        textArea: {
            flex: 1,
            width: "auto",
            padding: theme.spacing(2.5, 3),
            borderRadius: theme.spacing(2),
            background: "transparent",
        },
        inputLabel: { display: "none" },
        textFieldContainer: {
            width: "auto",
            borderRadius: theme.spacing(1),
            height: 45,
            padding: theme.spacing(0, 2),
            alignItems: "center",
            "&.phone": {
                flex: 1,
            },
        },
        textInput: function () { return ({
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
        }); },
        phoneNumberInputContainer: {
            border: 0,
        },
        submitButton: (_f = {
                textAlign: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginTop: theme.spacing(2)
            },
            _f[theme.breakpoints.up("lg")] = {
                marginTop: theme.spacing(4),
            },
            _f),
        imageUploadContainer: {
            width: "auto",
        },
    });
});
