import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock6Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: (_a = {
                padding: theme.spacing(3, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4, 0),
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(5, 0),
            },
            _a[theme.breakpoints.up("xl")] = {
                padding: theme.spacing(6, 0),
            },
            _a.background = function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
        heading: (_b = {
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 34),
                color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
                fontWeight: theme.typography.fontWeightBold,
                margin: theme.spacing(0, 0, 3)
            },
            _b[theme.breakpoints.up("md")] = {
                margin: theme.spacing(0, 0, 4),
            },
            _b[theme.breakpoints.up("lg")] = {
                margin: theme.spacing(0, 0, 5),
            },
            _b),
        block: {
            height: 500,
        },
        imagesContainer: (_c = {
                display: "grid",
                gridTemplate: "repeat(3, 1fr) / repeat(5, 1fr)",
                gap: theme.spacing(0.5),
                minHeight: 256
            },
            _c[theme.breakpoints.up("md")] = {
                height: 450,
            },
            _c[theme.breakpoints.up("md")] = {
                height: 650,
            },
            _c),
        imageContainer: {
            overflow: "hidden",
            position: "relative",
            "&.image-3": {
                gridRow: "1 / span 2",
            },
            "&.image-4, &.image-5, &.image-8": {
                gridColumn: "4 / span 2",
            },
            "&.image-6": {
                gridRow: "2 / span 2",
                gridColumn: "1 / span 2",
            },
            borderRadius: theme.spacing(1),
        },
        image: {
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
        },
        instagramCardOverlay: {
            position: "absolute",
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.3)",
            zIndex: 1,
        },
        cardContent: (_d = {
                position: "absolute",
                bottom: "-20%",
                zIndex: 2,
                cursor: "pointer",
                transition: "bottom .4s ease",
                left: 5,
                "&.active": {
                    bottom: 20,
                },
                display: "inline-flex",
                gap: theme.spacing(0.5),
                alignItems: "center"
            },
            _d[theme.breakpoints.up("md")] = {
                left: 20,
                gap: theme.spacing(1),
            },
            _d),
        cardText: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 14),
            fontWeight: theme.typography.fontWeightBold,
        },
        arrowUpward: (_e = {
                fontSize: theme.typography.fontSize,
                fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                transform: "rotate(15deg)"
            },
            _e[theme.breakpoints.up("md")] = {
                fontSize: theme.typography.fontSize + 14,
            },
            _e),
        modal: {
            height: "100vh",
            width: "100vw",
            position: "fixed",
            left: 0,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 4,
        },
        modalImageContainer: {
            position: "relative",
            maxWidth: "70vw",
            // height: "70vh",
            overflowY: "hidden",
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        },
        modalContent: {
            position: "relative",
            zIndex: 5,
            left: "50%",
            top: "50%",
            height: "70vh",
            width: "70vw",
            transform: "translate(-50%, -50%)",
        },
        modalImage: {
            display: "block",
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        arrowLeft: {
            left: "-10%",
            position: "absolute",
            zIndex: 5,
            top: "50%",
        },
        arrowRight: {
            right: "-10%",
            position: "absolute",
            zIndex: 5,
            top: "50%",
        },
        modalOverlay: {
            position: "absolute",
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.5)",
            top: 0,
        },
        collections: {
            display: "grid",
            gap: theme.spacing(0.5),
        },
    });
});
