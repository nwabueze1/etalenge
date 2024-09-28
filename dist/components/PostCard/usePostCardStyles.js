import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var usePostCardStyles = makeStyles(function (theme) { return ({
    root: {
        padding: theme.spacing(2),
        borderRadius: 8,
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]); },
        transition: "all 0.5s ease",
        "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
        },
    },
    imageContainer: {
        height: 230,
        overflowY: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    cardBody: {
        marginTop: theme.spacing(2),
    },
    tag: {
        padding: theme.spacing(0.6, 1.4),
        borderRadius: 6,
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        fontSize: theme.typography.fontSize - 2,
    },
    tagsContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(1),
    },
    separator: {
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
        height: 0.5,
        width: "100%",
        margin: theme.spacing(1, 0),
    },
    postTitle: {
        fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 6),
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        lineHeight: "140%",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 2,
        overflow: "hidden",
    },
    postLink: {
        padding: theme.spacing(1.2, 2.2),
        borderRadius: 12,
        border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]); },
        fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        textDecoration: "none",
        "&:hover": {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
        },
        marginTop: theme.spacing(2.3),
        display: "block",
        cursor: "pointer",
        maxWidth: "max-content",
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
}); });
