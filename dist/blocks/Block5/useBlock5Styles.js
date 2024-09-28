import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock5Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        baseRoot: (_a = {
                position: "relative",
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                minHeight: "40vh"
            },
            _a[theme.breakpoints.up("lg")] = {
                height: "90vh",
            },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
        root: (_b = {
                position: "relative",
                width: "100%",
                minHeight: "40vh",
                "&.content": (_c = {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    },
                    _c[theme.breakpoints.up("md")] = {
                        alignItems: "start",
                        justifyContent: "end",
                    },
                    _c)
            },
            _b[theme.breakpoints.up("lg")] = {
                minHeight: "90vh",
            },
            _b),
        blockRoot: (_d = {
                width: "100%"
            },
            _d[theme.breakpoints.up("md")] = {
                marginBottom: 100,
            },
            _d),
        base: (_e = {
                position: "relative",
                width: "100%"
            },
            _e[theme.breakpoints.up("lg")] = {
                height: "90vh",
            },
            _e),
        imageContainer: {
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 2,
        },
        image: {
            display: "block",
            position: "absolute",
            height: "100%",
            objectFit: "cover",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 0,
            visibility: "hidden",
            opacity: 0,
            transition: "all 0.3s ease",
            "&.active": {
                visibility: "visible",
                opacity: 1,
            },
        },
        overlay: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) -23.35%, rgba(0, 0, 0, 1) 100%)",
            zIndex: 1,
        },
        blockTextContainer: (_f = {
                position: "relative",
                zIndex: 3,
                display: "flex",
                height: "100%",
                width: "100%",
                justifyContent: "center",
                textAlign: "center"
            },
            _f[theme.breakpoints.up("md")] = {
                justifyContent: "start",
                textAlign: "start",
                width: "45%",
            },
            _f),
        header: {
            position: "relative",
            zIndex: 3,
            display: "none",
            "&.active": (_g = {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                },
                _g[theme.breakpoints.up("md")] = {
                    alignItems: "start",
                    textAlign: "start",
                    width: "80%",
                },
                _g),
            animationName: "fadeIn",
            animationDuration: "4s",
            animationTimingFunction: "ease",
        },
        heading: (_h = {
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 22),
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                fontWeight: theme.typography.fontWeightBold,
                marginBottom: theme.spacing(1.4),
                lineHeight: "140%",
                margin: "0 auto"
            },
            _h[theme.breakpoints.up("md")] = {
                maxWidth: "65%",
                margin: 0,
            },
            _h),
        trackBtn: (_j = {
                width: 30,
                height: 2,
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
                border: 0,
                cursor: "pointer",
                "&.active": {
                    background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                }
            },
            _j[theme.breakpoints.up("lg")] = {
                width: 60,
            },
            _j),
        trackContainer: {
            position: "relative",
            zIndex: 2,
            display: "flex",
            gap: theme.spacing(1),
        },
        nextPrevBtn: function (props) {
            var _a;
            var _b, _c;
            return (_a = {
                    cursor: "pointer",
                    border: 0,
                    height: 26,
                    width: 26,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: (_b = props === null || props === void 0 ? void 0 : props.colors) === null || _b === void 0 ? void 0 : _b[100],
                    borderRadius: 26,
                    zIndex: 5,
                    position: "relative",
                    "& .icon": {
                        fill: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[200],
                        fontSize: theme.typography.fontSize + 2,
                    }
                },
                _a[theme.breakpoints.up("lg")] = {
                    borderRadius: 60,
                    height: 60,
                    width: 60,
                    "& .icon": {
                        fontSize: theme.typography.fontSize * 2,
                    },
                },
                _a);
        },
        nextPrevBtnContainer: (_k = {
                display: "flex",
                marginTop: theme.spacing(3),
                gap: theme.spacing(2)
            },
            _k[theme.breakpoints.up("md")] = {
                marginTop: 0,
                gap: theme.spacing(2),
            },
            _k[theme.breakpoints.up("lg")] = {
                gap: theme.spacing(8),
                bottom: 64,
            },
            _k[theme.breakpoints.up("xl")] = {
                bottom: 100,
            },
            _k),
        actionContainer: (_l = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: theme.spacing(2.5)
            },
            _l[theme.breakpoints.up("md")] = {
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
            },
            _l),
        msc: {
            position: "relative",
            width: "85%",
            margin: "0 auto",
            maxWidth: theme.eleganteStyles.maxWidth,
        },
        "@keyframes fadeIn": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 0.5,
            },
        },
    });
});
