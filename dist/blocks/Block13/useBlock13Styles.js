import { makeStyles } from "@mui/styles";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
export var useBlock13Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        menuItemsContainer: (_a = {
                display: "grid",
                gap: theme.spacing(3)
            },
            _a[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            _a[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: theme.spacing(2),
            },
            _a[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            _a),
        titleContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
        },
        title: function (props) {
            var _a, _b;
            return ({
                fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 22),
                color: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.heading,
                fontWeight: theme.typography.fontWeightBold,
            });
        },
        menuBtn: (_b = {
                fontSize: theme.typography.fontSize + 20,
                cursor: "pointer"
            },
            _b[theme.breakpoints.up("lg")] = {
                display: "none",
            },
            _b),
        header: (_c = {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 10
            },
            _c[theme.breakpoints.up("lg")] = {
                flexDirection: "row",
                justifyContent: "space-between",
            },
            _c),
        searchContainer: (_d = {
                display: "flex",
                border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]); },
                padding: theme.spacing(1, 2),
                borderRadius: 16,
                "&>input": {
                    flex: 1,
                    border: 0,
                    fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                    fontSize: theme.typography.fontSize,
                    outlineColor: "transparent",
                }
            },
            _d[theme.breakpoints.up("lg")] = {
                width: "45%",
            },
            _d),
        sortContainer: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
            "& > span": {
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                fontSize: theme.typography.fontSize,
            },
            position: "relative",
        },
        sortBox: {
            display: "flex",
            alignItems: "center",
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            padding: theme.spacing(1.5),
            borderRadius: 4,
            flex: 1,
            gap: theme.spacing(1.5),
            minWidth: 140,
            "&:hover": {
                cursor: "pointer",
            },
        },
        sortText: {
            fontSize: theme.typography.fontSize,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900]; },
            flex: 1,
        },
        subHeader: (_e = {
                display: "flex",
                flexDirection: "column-reverse",
                margin: theme.spacing(1.5, 0),
                gap: theme.spacing(1.5)
            },
            _e[theme.breakpoints.up("lg")] = {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            },
            _e),
        itemsCount: {
            fontSize: theme.typography.fontSize + 2,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900]; },
            flex: 1,
        },
        block: (_f = {
                display: "grid"
            },
            _f[theme.breakpoints.up("lg")] = {
                gridTemplateColumns: "1fr 2fr",
                gap: theme.spacing(4),
                marginTop: theme.spacing(3),
            },
            _f[theme.breakpoints.up("xl")] = {
                gridTemplateColumns: "1fr 3fr",
                gap: theme.spacing(6),
            },
            _f),
        menuCategoryContainerWeb: (_g = {
                display: "none"
            },
            _g[theme.breakpoints.up("lg")] = {
                display: "flex",
                height: "max-content",
                flexDirection: "column",
                gap: theme.spacing(2),
                position: "sticky",
                top: 100,
                listStyle: "none",
                padding: 0,
            },
            _g),
        drawerTitle: {
            fontSize: theme.typography.fontSize + 10,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
            margin: 0,
        },
        closeDrawerBtn: {
            position: "absolute",
            top: -10,
            right: -10,
            fontSize: theme.typography.fontSize + 10,
        },
        rangerSelector: {
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
            accentColor: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
        filterContainer: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
        },
        filterBtn: {
            justifyContent: "center",
        },
        menuCategory: function (props) {
            var _a, _b;
            return ({
                fontSize: theme.typography.fontSize + 2,
                colors: (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100],
                fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
                listStyle: "none",
                padding: 0,
                textTransform: "capitalize",
                "&:hover": {
                    cursor: "pointer",
                    textDecoration: "under",
                },
                "&.active": {
                    textDecoration: "underline",
                },
            });
        },
        loadMoreBtn: {
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]); },
            padding: theme.spacing(1.5, 2),
            borderRadius: 8,
            width: 250,
            display: "inline-flex",
            justifyContent: "center",
            cursor: "pointer",
        },
        buttonContainer: {
            margin: theme.spacing(5, 0),
            height: 112,
            padding: theme.spacing(1.5, 2),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            borderRadius: 8,
            gridTemplateColumns: "1/span 3",
        },
        button: {
            cursor: "pointer",
        },
        sortOptionsModal: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: 8,
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
            position: "absolute",
            right: 0,
            top: 45,
            visibility: "hidden",
            opacity: 0,
            transition: "all 0.4s ease",
            "&.active": {
                visibility: "visible",
                opacity: 1,
            },
        },
        sortChevron: {
            transition: "transform 0.4s ease",
            "&.active": {
                transform: "rotate(-180deg)",
            },
        },
        sortOption: {
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
            fontSize: theme.typography.fontSize + 2,
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[900]; },
            cursor: "pointer",
            "&:hover": {
                textDecoration: "underline",
            },
            listStyle: "none",
            padding: 0,
        },
    });
});
