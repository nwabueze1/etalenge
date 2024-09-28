import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock4Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: (_a = {
                padding: theme.spacing(3, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4),
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(6.5),
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
        header: (_b = {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24
            },
            _b[theme.breakpoints.up("md")] = {
                marginBottom: 34,
            },
            _b),
        heading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 24),
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        },
        cardContainer: (_c = {
                display: "grid",
                gap: theme.spacing(3)
            },
            _c[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _c[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _c[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
            },
            _c),
    });
});
