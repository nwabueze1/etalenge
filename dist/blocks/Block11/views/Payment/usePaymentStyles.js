import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var usePaymentStyles = makeStyles(function (theme) { return ({
    root: {},
    title: {
        fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontWeight: theme.typography.fontWeightBold,
        margin: theme.spacing(0, 0, 1.5, 0),
    },
    paymentRoot: function (props) {
        var _a, _b;
        return ({
            border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]),
            padding: theme.spacing(3),
            borderRadius: 8,
            color: "".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200], " !important"),
        });
    },
    paymentComponentHeading: function (props) {
        var _a;
        return ({
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            marginBottom: "".concat(theme.spacing(2), " !important"),
            "& p": {
                fontSize: theme.typography.fontSize + 6,
            }
        });
    },
    paymentComponentSubheading: function (props) {
        var _a;
        return ({
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            marginBottom: "".concat(theme.spacing(3), " !important"),
        });
    },
    paymentComponentOption: function (props) {
        var _a, _b, _c, _d;
        return ({
            border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]),
            padding: "".concat(theme.spacing(1.5), " !important"),
            marginBottom: "16px !important",
            borderRadius: 16,
            fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
            "& .custom__radio": {
                position: "relative",
                left: -4,
                width: "9px !important",
                height: "9px !important",
                opacity: "1 !important",
            },
            "& input:checked ~ .custom__radio": {
                backgroundColor: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
                outline: "2px solid ".concat((_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[100]),
            },
        });
    },
    paymentComponentButton: function (props) {
        var _a, _b, _c;
        return ({
            borderRadius: "16px !important",
            marginTop: "".concat(theme.spacing(3), " !important"),
            background: "".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100], " !important"),
            color: "".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200], " !important"),
            fontFamily: (_c = props === null || props === void 0 ? void 0 : props.fonts) === null || _c === void 0 ? void 0 : _c.body,
            padding: "".concat(theme.spacing(1.5, 2), " !important"),
            fontWeight: "".concat(theme.typography.fontWeightRegular, " !important"),
            "&:hover": {
                backgroundColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            },
        });
    }
}); });
