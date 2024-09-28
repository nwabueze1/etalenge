import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock16Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        block: (_a = {
                display: "flex",
                flexDirection: "column-reverse",
                gap: theme.spacing(3)
            },
            _a[theme.breakpoints.up("md")] = {
                gap: theme.spacing(4),
            },
            _a[theme.breakpoints.up("lg")] = {
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: theme.spacing(5),
            },
            _a),
        content: (_b = {},
            _b[theme.breakpoints.up("lg")] = {
                width: "48%",
            },
            _b),
        image: {
            display: "block",
            width: "100%",
            height: "auto",
        },
        heading: function (props) {
            var _a, _b;
            return ({
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 30),
                fontWeight: theme.typography.fontWeightBold,
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
            });
        },
        subheading: function (props) {
            var _a, _b;
            return ({
                marginTop: theme.spacing(0.5),
                fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                lineHeight: "150%",
            });
        },
        cardContainer: (_c = {
                display: "grid",
                gap: theme.spacing(2.5),
                marginTop: theme.spacing(3)
            },
            _c[theme.breakpoints.up("md")] = {
                gap: theme.spacing(3.5),
            },
            _c[theme.breakpoints.up("lg")] = {
                marginTop: theme.spacing(4),
                gap: theme.spacing(4.5),
            },
            _c),
        cardTitle: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 10),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: "140%",
            margin: "0px !important",
        },
        cardSubtitle: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            lineHeight: "150%",
            letterSpacing: 0.2,
            marginTop: theme.spacing(1),
        },
    });
});
