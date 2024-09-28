import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useOrderDetailsStyles = makeStyles(function (theme) { return ({
    cartItemsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
    },
    title: function (props) {
        var _a;
        return ({
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 12),
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        });
    },
    header: {
        margin: theme.spacing(2, 0),
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
    },
    backToHome: function (props) {
        var _a, _b, _c;
        return ({
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.2),
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
            cursor: "pointer",
            "& > svg": {
                fill: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
            },
        });
    },
    orderPlacedSuccessfullyCard: function (props) {
        var _a;
        return ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: theme.spacing(2),
            border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]),
            padding: theme.spacing(1.5),
            borderRadius: 4,
            marginTop: theme.spacing(1.5),
        });
    },
    orderPlacedSuccessfullyText: {
        fontSize: theme.typography.fontSize,
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
    },
    leftBlock: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
    },
    cardHeader: {
        fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        fontWeight: theme.typography.fontWeightBold,
        margin: theme.spacing(0, 0, 1.5, 0),
    },
    card: function (props) {
        var _a;
        return ({
            padding: theme.spacing(1.5),
            border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]),
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2.5),
            "&.guest": {
                marginTop: theme.spacing(2),
            },
            "&.payment": {
                marginTop: theme.spacing(2),
            }
        });
    },
    separator: function (props) {
        var _a;
        return ({
            height: 1,
            width: "100%",
            backgroundColor: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
        });
    },
    cardItem: function (props) {
        var _a;
        return ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& > p": {
                fontSize: theme.typography.fontSize + 2,
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                textTransform: "capitalize",
            },
            "& > p.bold": {
                fontWeight: theme.typography.fontWeightBold,
            },
            "& > p.total": {
                fontSize: theme.typography.fontSize + 4,
            },
        });
    },
}); });
