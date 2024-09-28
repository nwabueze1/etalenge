import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useOrderSummaryStyles = makeStyles(function (theme) { return ({
    title: {
        fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontWeight: theme.typography.fontWeightBold,
        margin: theme.spacing(0, 0, 1.5, 0),
    },
    summaryContainer: {
        border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]); },
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(1),
        display: "grid",
        gap: theme.spacing(3),
    },
    summaryItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    summaryText: {
        fontSize: theme.typography.fontSize + 3,
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
    },
    divider: {
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
        width: "100%",
        height: 1,
    },
    summaryTextBold: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 8),
    },
    checkoutButton: {
        padding: theme.spacing(1.4, 3),
        borderRadius: 16,
        border: 0,
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        cursor: "pointer",
        "&:hover": {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
        },
    },
}); });
