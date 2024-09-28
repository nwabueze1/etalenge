import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useEmptyCartStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            position: "relative",
            top: "-2.5vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        emptyCartIcon: (_a = {
                height: "auto",
                width: "85%",
                display: "block"
            },
            _a[theme.breakpoints.up("md")] = {
                width: "60%",
            },
            _a[theme.breakpoints.up("lg")] = {
                width: 400,
                height: 400,
            },
            _a),
        textContainer: function (props) {
            var _a;
            var _b, _c, _d;
            return (_a = {
                    margin: "0 auto",
                    "& > h5": {
                        fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 20),
                        fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                        fontWeight: theme.typography.fontWeightBold,
                        color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
                        textAlign: "center",
                        margin: 0,
                    },
                    "& > p": {
                        textAlign: "center",
                        fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 6),
                        fontFamily: (_d = props === null || props === void 0 ? void 0 : props.fonts) === null || _d === void 0 ? void 0 : _d.body,
                        fontWeight: theme.typography.fontWeightRegular,
                        marginTop: theme.spacing(2),
                    }
                },
                _a[theme.breakpoints.up("md")] = {
                    maxWidth: "70%",
                },
                _a[theme.breakpoints.up("lg")] = {
                    maxWidth: "50%",
                },
                _a);
        },
        "@keyframes fadeIn": {
            "0%": {
                opacity: 0,
            },
            "100%": {
                opacity: 1,
            },
        },
        fadeIn: {
            animation: "$fadeIn 2s ease-in-out",
        },
    });
});
