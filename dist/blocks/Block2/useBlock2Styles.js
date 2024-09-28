import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock2Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        section: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            "&.active": {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
        },
        root: (_a = {
                padding: theme.spacing(3, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4, 0),
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(6, 0),
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            _a),
        block: (_b = {
                display: "grid",
                gap: theme.spacing(3)
            },
            _b[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 64,
            },
            _b[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(4),
                gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            },
            _b[theme.breakpoints.up("xl")] = {
                gap: theme.spacing(10),
            },
            _b),
        footerLinkHeader: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 14),
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: theme.spacing(3),
        },
        iconContainer: {
            border: function (props) { var _a; return "1.5px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]); },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            height: 48,
            width: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: theme.spacing(2),
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
                "&>svg": {
                    transform: "scale(0.8)",
                },
            },
        },
        icon: {
            fontSize: theme.typography.fontSize + 10,
            cursor: "pointer",
            transition: "transform 0.4s ease",
        },
        footerLink: {
            fontSize: theme.typography.fontSize + 2,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            display: "block",
            textDecoration: "none",
            "&:hover": {
                "&.url": {
                    textDecoration: "underline",
                },
            },
        },
        footerLinkContainer: {
            display: "flex",
            flexDirection: "column",
            gap: 20,
        },
        footerHeader: {
            gap: theme.spacing(3),
        },
        footerLogo: {
            fontSize: theme.typography.fontSize + 22,
            fontFamily: function (props) { return props.fonts.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontStyle: "italic",
            fontWeight: theme.typography.fontWeightBold,
            margin: 0,
            marginBottom: theme.spacing(2),
        },
        footerCaption: {
            fontSize: theme.typography.fontSize + 2,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
        },
        formContainer: {
            display: "flex",
            alignItems: "start",
            padding: theme.spacing(1, 2),
            borderRadius: 12,
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]); },
            position: "relative",
        },
        submitBtn: {
            padding: theme.spacing(1.2, 2.4),
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            borderRadius: 12,
            border: 0,
            cursor: "pointer",
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: theme.typography.fontSize,
        },
        socialMediaContainer: {
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
        },
        footerMenu: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            padding: theme.spacing(2, 0),
            margin: 0,
        },
        footerMenuContent: (_c = {
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(1)
            },
            _c[theme.breakpoints.up("md")] = {
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
            },
            _c),
        footerMenuText: {
            fontSize: theme.typography.fontSize,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        textFieldInput: {
            border: 0,
        },
        textFieldInputErrorMessage: {
            position: "absolute",
            bottom: -18,
            left: 0,
        },
        pluginForm: {
            flex: 1,
        },
    });
});
