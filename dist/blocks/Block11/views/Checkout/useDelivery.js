import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";
export var useDeliveryStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: {},
        block: (_a = {},
            _a[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(5),
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _a),
        loader: {
            marginLeft: theme.spacing(1),
        },
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
        },
        card: (_b = {
                display: "flex",
                flexDirection: "column",
                border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]); },
                padding: theme.spacing(1.4),
                gap: theme.spacing(1.4),
                transition: "all 0.4s ease",
                borderRadius: 8
            },
            _b[theme.breakpoints.up("md")] = {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            },
            _b["&:hover"] = {
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
            },
            _b),
        cardImageContainer: (_c = {
                overflow: "hidden",
                borderRadius: 4,
                height: 150
            },
            _c[theme.breakpoints.up("md")] = {
                width: 150,
                height: 100,
            },
            _c),
        cardImage: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        cardDescription: (_d = {
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 8),
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                lineHeight: "140%"
            },
            _d[theme.breakpoints.up("md")] = {
                flex: 1,
            },
            _d.display = "-webkit-box",
            _d["-webkit-box-orient"] = "vertical",
            _d["-webkit-line-clamp"] = 2,
            _d.overflow = "hidden",
            _d),
        priceContainer: (_e = {
                display: "flex",
                justifyContent: "space-between"
            },
            _e[theme.breakpoints.up("md")] = {
                flexDirection: "column",
                gap: theme.spacing(1.5),
            },
            _e),
        cardPrice: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: theme.typography.fontSize + 4,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            "&.title": {
                fontWeight: theme.typography.fontWeightBold,
            },
        },
        inputContainer: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1.5),
            padding: theme.spacing(2),
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]); },
        },
        paymentCardImage: {
            width: 70,
            height: 30,
        },
        paymentCard: {
            padding: theme.spacing(1, 1.6),
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(2),
            justifyContent: "space-between",
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]); },
            borderRadius: 8,
        },
        paymentLabel: {
            flex: 1,
            fontFamily: function (props) { return props === null || props === void 0 ? void 0 : props.fonts.body; },
            fontSize: theme.typography.fontSize + 2,
            textTransform: "capitalize",
            cursor: "pointer",
        },
        paymentRadio: {
            height: 16,
            width: 16,
            accentColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            cursor: "pointer",
        },
        paymentCardContainer: {
            display: "grid",
            gap: theme.spacing(2),
        },
        makePaymentTitle: {
            fontSize: theme.typography.fontSize + 6,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            margin: theme.spacing(2, 0, 0.5),
            textTransform: "capitalize",
        },
        makePaymentSubtitle: {
            fontSize: theme.typography.fontSize,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            marginBottom: theme.spacing(3),
        },
        errorMessage: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
            fontSize: theme.typography.fontSize,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        pickUpButton: function (props) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return ({
                fontFamily: (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body,
                fontSize: theme.typography.fontSize + 2,
                cursor: "pointer",
                borderRadius: 4,
                padding: theme.spacing(1.4, 2),
                border: "1px solid ".concat((_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100]),
                backgroundColor: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
                color: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[100],
                textTransform: "capitalize",
                "&:hover": {
                    backgroundColor: (_e = props === null || props === void 0 ? void 0 : props.colors) === null || _e === void 0 ? void 0 : _e[400],
                    "&.active": {
                        backgroundColor: (_f = props === null || props === void 0 ? void 0 : props.colors) === null || _f === void 0 ? void 0 : _f[300],
                    },
                },
                "&.active": {
                    backgroundColor: (_g = props === null || props === void 0 ? void 0 : props.colors) === null || _g === void 0 ? void 0 : _g[100],
                    color: (_h = props === null || props === void 0 ? void 0 : props.colors) === null || _h === void 0 ? void 0 : _h[200],
                },
            });
        },
        pickupButtonContainer: {
            display: "inline-flex",
            gap: theme.spacing(1.5),
        },
        totalContainer: {
            display: "flex",
            justifyContent: "space-between",
        },
        divider: {
            margin: theme.spacing(2, 0),
            height: 1,
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
        },
        total: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 10),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            marginTop: theme.spacing(2),
            "&.light": {
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 3, theme.typography.fontSize + 6),
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        submitButton: {
            fontSize: theme.typography.fontSize,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            textTransform: "capitalize",
            padding: theme.spacing(1.5, 2),
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            outline: "none",
            border: "none",
            marginTop: theme.spacing(1),
            backgroundColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            "&:hover": {
                backgroundColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
            },
            "&.loading": {
                cursor: "not-allowed",
            },
        },
        heading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        header: {
            margin: theme.spacing(0, 0, 1.5, 0),
        },
    });
});
