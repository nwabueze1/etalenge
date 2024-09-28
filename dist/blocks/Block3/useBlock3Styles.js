import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock3Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: (_a = {
                padding: theme.spacing(3, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4, 0),
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(6.25, 0),
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
        title: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 34),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            margin: 0,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
        cardsContainer: {
            marginTop: theme.spacing(2.5),
        },
        testimonialContainer: (_b = {
                padding: theme.spacing(2),
                borderRadius: theme.spacing(1),
                border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]); },
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
                transition: "background 0.5s ease",
                margin: theme.spacing(0, 3, 0, 0),
                "&:hover": {
                    background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
                }
            },
            _b[theme.breakpoints.down("sm")] = {
                margin: theme.spacing(0, 1.5, 0, 0),
            },
            _b),
        testimonialTitle: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: "140%",
            margin: theme.spacing(1, 0),
        },
        testimonialSubtitle: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
            letterSpacing: "0.2px",
            lineHeight: "150%",
        },
        testimonialDivider: {
            height: 0.2,
            marginTop: theme.spacing(1),
            width: "100%",
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
        },
        userContainer: {
            display: "flex",
            gap: theme.spacing(1),
            marginTop: theme.spacing(1.5),
            alignItems: "center",
        },
        userImage: {
            height: 48,
            width: 48,
            borderRadius: 48,
        },
        userName: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        userDescription: {
            fontSize: theme.typography.fontSize - 2,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        header: {
            marginBottom: theme.spacing(3),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        buttonContainer: {
            display: "flex",
            gap: theme.spacing(1.5),
        },
        button: (_c = {
                display: "none"
            },
            _c[theme.breakpoints.up("lg")] = {
                display: "flex",
            },
            _c.width = 50,
            _c.height = 50,
            _c.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            _c.borderRadius = 60,
            _c.alignItems = "center",
            _c.justifyContent = "center",
            _c.border = 0,
            _c.cursor = "pointer",
            _c["&.hidden"] = {
                visibility: "hidden",
            },
            _c),
        chevronIcon: {
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            fontSize: theme.typography.fontSize + 10,
        },
        ratingIcon: {
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
    });
});
