import { makeStyles } from "@mui/styles";
export var useBackButtonStyles = makeStyles(function (theme) { return ({
    root: {
        display: "inline-flex",
        alignItems: "center",
        gap: theme.spacing(1.5),
        cursor: "pointer",
    },
    text: {
        fontSize: theme.typography.fontSize + 2,
        fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
    },
    backIcon: {
        fontSize: theme.typography.fontSize + 10,
    },
}); });
