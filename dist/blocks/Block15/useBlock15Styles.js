import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock15Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        block: (_a = {
                display: "flex",
                flexDirection: "column",
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
        cardsContainer: (_c = {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: theme.spacing(3),
                margin: theme.spacing(2, 0)
            },
            _c[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
                margin: theme.spacing(4, 0),
            },
            _c),
        card: {
            padding: theme.spacing(1.5),
            borderRadius: theme.spacing(1),
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]); },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: theme.spacing(1),
        },
        cardHeader: function (props) {
            var _a, _b;
            return ({
                fontWeight: theme.typography.fontWeightBold,
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                fontSize: theme.typography.fontSize + 20,
                margin: 0,
            });
        },
        cardDescription: function (props) {
            var _a, _b;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                color: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                fontSize: theme.typography.fontSize + 2,
                textAlign: "center",
            });
        },
        buttonContainer: {
            display: "flex",
            gap: theme.spacing(1.5),
        },
        buttonOutlined: function (props) {
            var _a, _b, _c, _d;
            return ({
                border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]),
                background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[200],
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
                "&:hover": {
                    background: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[500],
                },
            });
        },
        buttonIcon: {
            fontSize: theme.typography.fontSize + 8,
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
    });
});
