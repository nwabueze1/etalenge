import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock1Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        root: (_a = {
                position: "sticky",
                width: "100%",
                zIndex: 100,
                top: 0,
                left: 0,
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                padding: theme.spacing(2, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4, 0),
            },
            _a.borderBottom = function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]); },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
        rootBackground: function (props) {
            var _a;
            return ({
                background: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
            });
        },
        nav: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            gap: theme.spacing(2),
            position: "relative",
        },
        navLogo: (_b = {
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 22),
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                fontWeight: theme.typography.fontWeightBold,
                fontStyle: "italic",
                transition: "transform 0.4s ease",
                outline: "none",
                margin: 0,
                "&:hover": {
                    transform: "scale(1.1)",
                },
                flex: 1,
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                "&> a": {
                    textDecoration: "none",
                    color: "inherit",
                    fontFamily: "inherit",
                }
            },
            _b[theme.breakpoints.up("lg")] = {
                flex: "unset",
            },
            _b),
        navLinkContainer: (_c = {
                listStyle: "none",
                gap: theme.spacing(5),
                alignItems: "center",
                display: "none"
            },
            _c[theme.breakpoints.up("lg")] = {
                display: "inline-flex",
            },
            _c),
        navLink: (_d = {
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                fontSize: theme.typography.fontSize + 4,
                width: "fit-content",
                "&.active": {
                    borderBottom: function (props) { var _a; return "2px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]); },
                },
                "& > a": {
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                    position: "relative",
                },
                "& > a::after": {
                    content: "''",
                    position: "absolute",
                    background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                    width: 0,
                    left: 0,
                    height: 2,
                    bottom: -3,
                    transition: "width 0.4s ease",
                },
                "&:hover": (_e = {
                        "&.active > a::after": {
                            width: "0 !important",
                        }
                    },
                    _e[theme.breakpoints.up("lg")] = {
                        "& > a::after": {
                            width: "100%",
                        },
                    },
                    _e)
            },
            _d[theme.breakpoints.up("lg")] = {
                fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 4),
            },
            _d),
        iconBlockContainer: {
            display: "flex",
            gap: 29,
        },
        iconBlock: {
            display: "inline-flex",
            alignItems: "center",
            gap: theme.spacing(1),
            cursor: "pointer",
            textDecoration: "none",
        },
        iconBlockText: {
            fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 4),
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        icon: {
            fontSize: theme.typography.fontSize + 10,
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        cartCounterContainer: {
            border: function (props) { var _a; return "1.5px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]); },
            borderRadius: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 25,
            width: 25,
        },
        cartCounterText: {
            fontSize: theme.typography.fontSize,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        navDrawerContainer: (_f = {
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                zIndex: 99,
                position: "fixed",
                minWidth: "30%",
                height: "100vh",
                right: "-150vw",
                transition: "all 0.5s ease",
                "&.active": {
                    right: 0,
                },
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(5),
                padding: theme.spacing(14, 3, 3, 3),
                top: 0,
                listStyle: "none",
                width: "60vw",
                boxSizing: "border-box"
            },
            _f[theme.breakpoints.up("sm")] = {
                padding: theme.spacing(15, 3, 3, 5),
            },
            _f),
        overlay: {
            background: "rgba(0,0,0,0.3)",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 4,
            height: "100vh",
            width: "100vw",
        },
        hamburger: (_g = {
                cursor: "pointer",
                fontSize: theme.spacing(3),
                fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; }
            },
            _g[theme.breakpoints.up("lg")] = {
                display: "none",
            },
            _g),
        searchIcon: {
            cursor: "pointer",
            fontSize: theme.spacing(3),
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        navList: {
            listStyle: "none",
        },
        iconContainer: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
        },
        searchOverlay: {
            position: "fixed",
            left: 0,
            top: 0,
            height: "100dvh",
            width: "100vw",
            background: "rgba(0,0,0,0.3)",
        },
        searchContainer: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    display: "flex",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
                    border: "1px solid ".concat((_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200]),
                    borderRadius: theme.spacing(1.5),
                    padding: theme.spacing(1, 2),
                    position: "absolute",
                    bottom: -110,
                    width: "85%",
                    left: "10%",
                    right: "10%",
                    zIndex: 5,
                    animationName: "slideDown",
                    animationDuration: "5s",
                    animationTimingFunction: "ease",
                    transform: "scale(1)",
                    opacity: 1,
                    transition: "all 0.2s ease"
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
                _a["&.hidden"] = {
                    visibility: "hidden",
                    transform: "scaleX(0.5)",
                    opacity: 0,
                },
                _a);
        },
        searchInput: {
            flex: 1,
            fontSize: theme.typography.fontSize + 2,
            background: "inherit",
            border: "none",
            outline: "transparent",
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        },
        searchButton: {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            borderRadius: 8,
            display: "inline-flex",
            textDecoration: "none",
            gap: 8,
            cursor: "pointer",
            outline: "none",
            alignItems: "center",
            padding: theme.spacing(1.2, 2.2),
            fontSize: theme.typography.fontSize + 2,
            "&:hover": {
                opacity: 0.9,
            },
        },
    });
});
