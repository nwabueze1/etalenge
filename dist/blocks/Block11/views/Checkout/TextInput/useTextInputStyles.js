import { makeStyles } from "@mui/styles";
export var useTextInputStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    input: function (props) {
        var _a, _b, _c, _d;
        return ({
            display: "block",
            borderRadius: theme.spacing(1),
            border: "1px solid ".concat((_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]),
            padding: theme.spacing(2, 3),
            fontFamily: (_b = props === null || props === void 0 ? void 0 : props.fonts) === null || _b === void 0 ? void 0 : _b.body,
            color: (_c = props === null || props === void 0 ? void 0 : props.colors) === null || _c === void 0 ? void 0 : _c[100],
            fontSize: theme.typography.fontSize + 1,
            flex: 1,
            "&.error": {
                borderColor: (_d = props === null || props === void 0 ? void 0 : props.colors) === null || _d === void 0 ? void 0 : _d[700],
            },
        });
    },
    errorMessage: {
        marginTop: theme.spacing(1),
        fontSize: theme.typography.fontSize,
        color: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[700]; },
        display: "block",
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
    },
}); });
