import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useBreadCrumbtyles = makeStyles(function (theme) { return ({
    breadCrumbContainer: {
        display: "inline-flex",
        gap: theme.spacing(1),
        alignItems: "center",
    },
    breadCrumb: function (props) {
        var _a, _b, _c;
        return ({
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 10),
            fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
            color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
            fontWeight: theme.typography.fontWeightBold,
            "&.prev": {
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[900],
            },
        });
    },
    breadCrumbLink: {
        textDecoration: "none",
        color: "inherit",
    },
    chevronRight: function (props) {
        var _a, _b;
        return ({
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 10),
            color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
            "&.prev": {
                fill: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[900],
            },
        });
    },
}); });
