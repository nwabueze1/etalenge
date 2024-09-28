import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useCartItemsStyles = makeStyles(function (theme) {
    var _a;
    return ({
        block: (_a = {
                gap: theme.spacing(3)
            },
            _a[theme.breakpoints.up("md")] = {
                gap: theme.spacing(4),
            },
            _a[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "1.6fr 1.2fr",
                gap: theme.spacing(5),
            },
            _a),
        cartItems: {
            display: "grid",
            gap: theme.spacing(1.5),
        },
        title: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontWeight: theme.typography.fontWeightBold,
            margin: 0,
        },
    });
});
