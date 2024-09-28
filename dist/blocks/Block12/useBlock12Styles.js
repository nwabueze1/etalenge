import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock12Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: {
            "&.active": {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
        },
        block: (_a = {
                display: "grid"
            },
            _a[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: theme.spacing(5),
            },
            _a),
        content: (_b = {
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
                lineHeight: "25px",
                "& > p": {
                    margin: theme.spacing(1, 0),
                },
                "& > h2": {
                    margin: theme.spacing(1.5, 0),
                }
            },
            _b[theme.breakpoints.up("lg")] = {
                gridColumn: "1/span 2",
            },
            _b["& img, & > img, & > p img, & > p > img"] = {
                display: "block",
                width: "100%",
                height: "auto",
            },
            _b),
        relatedHeading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 16),
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            margin: 0,
        },
        related: (_c = {
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(2)
            },
            _c[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(3),
            },
            _c),
        card: function (props) {
            var _a;
            return ({
                border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]),
                borderRadius: 8,
                display: "grid",
                gridTemplateColumns: "1fr 5fr",
                alignItems: "center",
                gap: theme.spacing(2),
                padding: theme.spacing(1),
            });
        },
        imageContainer: (_d = {
                overflow: "hidden",
                height: 100,
                width: 150
            },
            _d[theme.breakpoints.up("lg")] = {
                height: 142,
                width: 177,
            },
            _d),
        image: {
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        postCategory: {
            padding: theme.spacing(1),
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            borderRadius: 4,
            fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 2),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            display: "inline-block",
        },
        postTitle: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 8),
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            margin: theme.spacing(1.2, 0, 0),
            "& > a": { color: "inherit", textDecoration: "none" },
            "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
            },
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": 2,
            overflow: "hidden",
        },
        authorBlock: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1.5),
            "& > p": {
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                fontSize: theme.typography.fontSize,
            },
            "& > h6": {
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 8),
                fontWeight: theme.typography.fontWeightBold,
                margin: 0,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            },
        },
        headerBlock: (_e = {
                margin: theme.spacing(2, 0),
                display: "flex",
                gap: theme.spacing(2.5),
                flexWrap: "wrap"
            },
            _e[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(5),
                flexWrap: "nowrap",
            },
            _e),
        socialContainer: (_f = {
                display: "flex",
                flex: 1,
                flexWrap: "wrap",
                gap: theme.spacing(2),
                alignItems: "center"
            },
            _f[theme.breakpoints.up("lg")] = {
                justifyContent: "end",
            },
            _f),
        copyLinkButton: function (props) {
            var _a, _b;
            return ({
                border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]),
                padding: theme.spacing(1.5),
                borderRadius: 16,
                display: "inline-flex",
                alignItems: "center",
                gap: theme.spacing(1.5),
                fontSize: theme.typography.fontSize + 2,
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                background: "transparent",
                cursor: "pointer",
                "&:hover": {
                    background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
                },
            });
        },
        icon: {
            fontSize: theme.typography.fontSize + 4,
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            cursor: "pointer",
        },
        postLink: function (props) {
            var _a;
            return ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]),
                borderRadius: 16,
                height: 45,
                width: 45,
                "&:hover": {
                    background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
                },
            });
        },
    });
});
