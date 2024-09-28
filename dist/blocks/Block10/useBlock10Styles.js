import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock10Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        modalHeading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 10),
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            textTransform: "capitalize",
            margin: 0,
        },
        configTitle: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 2),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontWeight: theme.typography.fontWeightBold,
            margin: theme.spacing(2, 0, 1),
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        requiredContainer: function (props) {
            var _a, _b, _c;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[800],
                padding: theme.spacing(0.6, 1.2),
                borderRadius: theme.spacing(0.4),
                fontSize: theme.typography.fontSize - 2,
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
            });
        },
        selectionContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: theme.spacing(1, 0),
        },
        selectionText: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: theme.typography.fontSize,
            margin: 0,
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            textTransform: "capitalize",
            gap: theme.spacing(1),
        },
        input: {
            accentColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
        selectionAmount: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: theme.typography.fontSize,
        },
        categoryTitle: {
            fontSize: theme.typography.fontSize - 1,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontWeight: theme.typography.fontWeightBold,
        },
        categorySub: {
            fontSize: theme.typography.fontSize - 1,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            "&.description": {
                marginTop: theme.spacing(1.5),
            },
        },
        priceContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: theme.spacing(1.5),
        },
        incrementButtonContainer: {
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]); },
            display: "flex",
            alignItems: "center",
            borderRadius: 4,
            overflow: "hidden",
        },
        qtyContainer: {
            display: "flex",
        },
        checkBoxInput: {
            accentColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
        addBtn: {
            padding: theme.spacing(1.5, 2),
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            border: 0,
            cursor: "pointer",
            "&:hover": {
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[800]; },
            },
        },
        counterText: {
            fontSize: theme.typography.fontSize + 2,
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
            textAlign: "center",
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        counterContainer: {
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
        },
        menuItemPrice: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 20),
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            margin: 0,
        },
        addToCartBtn: {
            flex: 1,
            display: "flex",
            margin: theme.spacing(1, 0),
            justifyContent: "center",
            cursor: "pointer",
            width: "100%",
        },
        blockContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        block: (_a = {
                display: "grid",
                gap: theme.spacing(3)
            },
            _a[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _a[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(5),
            },
            _a),
        imageContainer: (_b = {
                height: 500
            },
            _b[theme.breakpoints.down("sm")] = {
                height: 350,
            },
            _b),
        menuContentContainer: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
        },
        back: {
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontSize: theme.typography.fontSize + 2,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            "&:hover": {
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
            },
            marginBottom: theme.spacing(2),
        },
        backIcon: {
            fontSize: theme.typography.fontSize + 10,
        },
        relatedItems: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 14),
            fontWeight: theme.typography.fontWeightBold,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
        },
        arrowButtonContainer: (_c = {
                display: "none"
            },
            _c[theme.breakpoints.up("md")] = {
                display: "flex",
            },
            _c),
        arrowButtonContainerMobile: {
            display: "flex",
            gap: theme.spacing(1),
        },
        arrowButton: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
        },
        footerHeader: {
            margin: theme.spacing(1.8, 0),
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        errorMessage: {
            display: "block",
            color: theme.eleganteDesign.colors.error,
            fontSize: theme.typography.fontSize,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        relatedMenuItemsParent: {
            marginTop: theme.spacing(7),
        },
        relatedMenuItemsContainer: (_d = {
                display: "grid"
            },
            _d[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: theme.spacing(2.5),
            },
            _d[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: theme.spacing(3),
            },
            _d[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: theme.spacing(4),
            },
            _d),
    });
});
