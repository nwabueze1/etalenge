import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock17Styles = makeStyles(function (theme) {
    var _a;
    return ({
        cardContainer: (_a = {
                display: "grid",
                gap: theme.spacing(3),
                margin: theme.spacing(2, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                margin: theme.spacing(2.5, 0),
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _a[theme.breakpoints.up("lg")] = {
                margin: theme.spacing(3, 0),
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _a[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "repeat(4, 1fr)",
            },
            _a),
        loadMoreBtnParent: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            padding: theme.spacing(3, 1.2),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        paginationText: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 4),
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            textAlign: "center",
            margin: 0,
            marginBottom: theme.spacing(2),
        },
        loadMoreBtn: {
            padding: theme.spacing(1.5, 4),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: theme.spacing(0.5),
            background: "transparent",
            borderRadius: theme.spacing(2),
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100], " "); },
            cursor: "pointer",
        },
        heading: {
            margin: 0,
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 30),
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            textAlign: "center",
        },
        description: {
            margin: 0,
            fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 10),
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            textAlign: "center",
        },
        header: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            alignItems: "center",
            justifyContent: "center",
            marginBottom: theme.spacing(4),
        },
        block: {
            marginTop: theme.spacing(4),
        },
        searchContainer: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    display: "flex",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[500],
                    border: "1px solid ".concat((_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100]),
                    borderRadius: theme.spacing(1.5),
                    padding: theme.spacing(1, 2),
                    bottom: -110,
                    width: "85%",
                    left: "10%",
                    right: "10%",
                    zIndex: 5,
                    margin: "0 auto 24px"
                },
                _a[theme.breakpoints.up("md")] = {
                    width: "60%",
                    left: "20%",
                    right: "20%",
                },
                _a[theme.breakpoints.up("lg")] = {
                    width: "50%",
                    left: "25%",
                    right: "25%",
                },
                _a);
        },
        searchInput: {
            flex: 1,
            fontSize: theme.typography.fontSize + 2,
            background: "inherit",
            border: "none",
            outline: "transparent",
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
    });
});
