import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useMenuItemPreviewModal = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        overlay: {
            height: "100vh",
            width: "100vw",
            position: "absolute",
            background: "rgba(0,0,0,0.3)",
        },
        modal: {
            position: "fixed",
            height: "100dvh",
            width: "100vw",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
        },
        modalContainer: (_a = {
                gap: theme.spacing(2),
                padding: theme.spacing(2),
                maxHeight: "85vh"
            },
            _a[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: theme.spacing(3),
                width: "70vw",
                maxWidth: 952,
                overflow: "hidden",
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[500]; },
            _a.zIndex = 1,
            _a.borderRadius = theme.spacing(1),
            _a.position = "relative",
            _a),
        imageContainer: (_b = {
                maxHeight: 300
            },
            _b[theme.breakpoints.up("md")] = {
                maxHeight: "85vh",
            },
            _b),
        image: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
            display: "block",
        },
        modalHeading: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 10),
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            textTransform: "capitalize",
        },
        closeButton: (_c = {
                cursor: "pointer",
                right: 5,
                top: 5,
                position: "absolute",
                fontSize: theme.typography.fontSize + 6,
                fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; }
            },
            _c[theme.breakpoints.up("md")] = {
                right: 20,
                top: 20,
            },
            _c),
        configTitle: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 2),
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontWeight: theme.typography.fontWeightBold,
            margin: theme.spacing(2, 0, 1),
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
        },
        priceContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
        },
        addToCartBtn: {
            flex: 1,
            display: "flex",
            margin: theme.spacing(1, 0),
            justifyContent: "center",
            cursor: "pointer",
        },
        block: {
            overflowY: "scroll",
            paddingRight: theme.spacing(1),
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            "&::-webkit-scrollbar": {
                width: 4,
            },
            "&::-webkit-scrollbar-thumb": {
                background: "grey",
                borderRadius: 8,
                cursor: "pointer",
            },
            "&::-webkit-scrollbar-thumb:hover": {
                cursor: "pointer",
            },
        },
        blockContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
    });
});
