import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock7Styles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                padding: theme.spacing(3, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4, 0),
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(6, 0),
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
        cardContainer: (_b = {
                display: "grid",
                gap: theme.spacing(2)
            },
            _b[theme.breakpoints.up("md")] = {
                gap: theme.spacing(3),
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _b[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _b[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
            },
            _b),
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: theme.spacing(3),
        },
        heading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 34),
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: "140%",
        },
        btnMobileContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: theme.spacing(2),
        },
    });
});
