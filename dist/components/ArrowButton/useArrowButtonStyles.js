import { makeStyles } from "@mui/styles";
export var useArrowButtonStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                height: 45,
                width: 45,
                borderRadius: 45,
                background: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[200]; },
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            _a[theme.breakpoints.up("lg")] = {
                height: 60,
                width: 60,
            },
            _a.border = 0,
            _a.cursor = "pointer",
            _a),
        arrow: {
            fontSize: theme.typography.fontSize + 8,
            fill: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.colors) === null || _a === void 0 ? void 0 : _a[100]; },
        },
    });
});
