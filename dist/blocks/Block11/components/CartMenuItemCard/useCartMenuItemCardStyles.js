import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useCartMenuItemCardStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: (_a = {
                display: "grid",
                gap: theme.spacing(1),
                padding: theme.spacing(1),
                borderRadius: theme.spacing(1),
                border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]); }
            },
            _a[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "1.2fr 3.4fr",
                gap: theme.spacing(2),
                alignItems: "center",
            },
            _a["&:hover"] = {
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            _a),
        imageContainer: (_b = {
                height: 240,
                overflow: "hidden"
            },
            _b[theme.breakpoints.up("md")] = {
                height: 180,
                borderRadius: theme.spacing(0.5),
            },
            _b),
        image: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        cardBody: (_c = {
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(1)
            },
            _c[theme.breakpoints.up("md")] = {
                gap: theme.spacing(1.5),
            },
            _c),
        title: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 10),
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            margin: 0,
            lineHeight: "150%",
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        },
        description: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
            lineHeight: "150%",
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": 2,
            overflow: "hidden",
        },
        price: function (props) {
            var _a, _b;
            return ({
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                fontSize: theme.typography.fontSize + 8,
                fontWeight: theme.typography.fontWeightBold,
                padding: 0,
            });
        },
        cardFooter: {
            display: "flex",
            gap: theme.spacing(1),
            alignItems: "center",
            justifyContent: "space-between",
        },
        actionButtonContainer: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]); },
        },
        actionBtn: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            height: 30,
            width: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 0,
            outline: "none",
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            cursor: "pointer",
            "&.invisible": {
                visibility: "hidden",
            },
            "&:hover": {
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            },
        },
        counterContainer: {
            width: 140,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        counter: {
            fontSize: theme.typography.fontSize + 6,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            width: 100,
            textAlign: "center",
        },
        deleteButton: {
            fontSize: theme.typography.fontSize + 12,
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            cursor: "pointer",
            "&.invisible": {
                visibility: "hidden",
            }
        },
        menuOptionsContainer: {
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing(4),
        },
        menuOptionHeader: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontWeight: theme.typography.fontWeightBold,
        },
        badge: function (props) {
            var _a, _b;
            return ({
                borderRadius: theme.spacing(2),
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                fontSize: theme.typography.fontSize - 2,
                width: "max-content",
            });
        },
        list: {
            marginLeft: theme.spacing(2),
            padding: 0,
        },
    });
});
