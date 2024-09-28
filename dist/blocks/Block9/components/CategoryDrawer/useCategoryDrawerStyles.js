import { makeStyles } from "@mui/styles";
export var useCategoryDrawerStyles = makeStyles(function (theme) {
    var _a;
    return ({
        categoryDrawer: (_a = {
                position: "absolute",
                top: 35,
                padding: theme.spacing(3),
                borderRadius: 8,
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[600]; },
                minWidth: "50%",
                transition: "all 0.4s ease",
                visibility: "hidden",
                opacity: 0,
                right: 0,
                "&.active": {
                    visibility: "visible",
                    opacity: 1,
                }
            },
            _a[theme.breakpoints.down("lg")] = {
                display: "block",
            },
            _a[theme.breakpoints.up("lg")] = {
                display: "none",
            },
            _a.zIndex = 1,
            _a),
        drawerBlock: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(3),
            position: "relative",
        },
        drawerTitle: {
            fontSize: theme.typography.fontSize + 10,
            fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; },
            color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]; },
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
                "&:hover": {
                    cursor: "pointer",
                    textDecoration: "under",
                },
                "&.active": {
                    textDecoration: "underline",
                },
            });
        },
    });
});
