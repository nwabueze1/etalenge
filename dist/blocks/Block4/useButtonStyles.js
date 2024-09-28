import { makeStyles } from "@mui/styles";
export var useButtonStyles = makeStyles(function (theme) { return ({
    button: {
        background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
        fontSize: theme.typography.fontSize - 2,
        padding: theme.spacing(1, 1.2),
        borderRadius: 8,
        display: "inline-flex",
        textDecoration: "none",
        gap: 8,
        cursor: "pointer",
        alignItems: "center",
        border: 0,
        "&.contained": {
            border: 0,
        },
        "&.outlined": {
            border: function (props) { var _a; return "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[400]); },
        },
        "&.md": {
            padding: theme.spacing(1.2, 2.2),
            fontSize: theme.typography.fontSize + 2,
        },
        "&.lg": {
            padding: theme.spacing(1.4, 3),
            fontSize: theme.typography.fontSize + 10,
        },
        "&:hover": {
            background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[300]; },
        },
    },
}); });
