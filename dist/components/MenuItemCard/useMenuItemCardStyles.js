import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useMenuItemCardStyles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a, _b;
        return ({
            background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500],
            borderRadius: 8,
            padding: theme.spacing(2),
            border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200]),
            transition: "all 0.4s ease",
            "&:hover": {
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            display: "flex",
        });
    },
    imageContainer: {
        height: 250,
        width: "100%",
    },
    image: {
        display: "block",
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    title: function (props) {
        var _a, _b;
        return ({
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 3, theme.typography.fontSize + 10),
            fontWeight: theme.typography.fontWeightBold,
            margin: theme.spacing(2, 0, 0),
            lineHeight: "130%",
            color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400],
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "line-clamp": 2,
            "-webkit-box-orient": "vertical",
        });
    },
    subtitle: function (props) {
        var _a, _b;
        return ({
            fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[400],
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "line-clamp": 3,
            "-webkit-box-orient": "vertical",
            margin: 0,
        });
    },
    detailsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: theme.spacing(2, 0),
    },
    menuCategory: function (props) {
        var _a, _b, _c, _d;
        return ({
            background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600],
            borderRadius: 4,
            padding: theme.spacing(0.8, 1.4),
            fontSize: theme.typography.fontSize,
            fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
            color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
            "&:hover": {
                background: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[200],
            },
        });
    },
    cardFooter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    price: function (props) {
        var _a, _b;
        return ({
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 20),
            color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
            fontWeight: theme.typography.fontWeightBold,
            margin: 0,
        });
    },
    cartIconContainer: {
        height: 36,
        width: 36,
        borderRadius: 12,
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]); },
    },
    cartIcon: {
        fontSize: theme.typography.fontSize + 4,
    },
    moreInfo: {
        display: "inline-flex",
        alignItems: "center",
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        fontSize: theme.typography.fontSize + 2,
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        gap: theme.spacing(1),
        textDecoration: "none",
        "&:hover": {
            "&>svg": {
                transform: "translateX(5%)",
            },
        },
    },
    arrowRight: {
        transition: "all 0.4s ease",
        fontSize: theme.typography.fontSize + 10,
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    cardTextContainer: {
        flex: 1,
    },
}); });
