import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock8Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: {
            position: "relative",
            overflow: "hidden",
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            "&.active": {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
        },
        overlay: {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.71) 100%)",
            zIndex: 1,
        },
        backgroundImage: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        contentCard: (_a = {
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
                padding: theme.spacing(1.5),
                position: "relative",
                zIndex: 2,
                borderRadius: 8
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(5),
            },
            _a),
        header: (_b = {
                maxWidth: 290
            },
            _b[theme.breakpoints.up("md")] = {
                maxWidth: 380,
            },
            _b[theme.breakpoints.up("lg")] = {
                maxWidth: 520,
            },
            _b),
        heading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 34),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
        subheading: (_c = {
                fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 10),
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                margin: theme.spacing(1, 0, 0),
                lineHeight: "150%"
            },
            _c[theme.breakpoints.up("md")] = {
                margin: theme.spacing(2, 0, 0),
            },
            _c),
        featuredImageAttribution: (_d = {
                margin: theme.spacing(1, 0, 0, 0),
                fontSize: theme.typography.fontSize,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                "& a": {
                    color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                }
            },
            _d[theme.breakpoints.up("md")] = {
                fontSize: theme.typography.fontSize + 2,
                margin: theme.spacing(2, 0, 0, 0),
            },
            _d),
        block: (_e = {
                minHeight: 388,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: theme.spacing(2.5, 0)
            },
            _e[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(10, 0),
                minHeight: "60vh",
            },
            _e),
    });
});
