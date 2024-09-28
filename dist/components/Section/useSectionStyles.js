import { makeStyles } from "@mui/styles";
export var useSectionStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                background: function (props) { return props === null || props === void 0 ? void 0 : props.background; },
                padding: theme.spacing(3, 0)
            },
            _a[theme.breakpoints.up("md")] = {
                padding: theme.spacing(4, 0),
            },
            _a[theme.breakpoints.up("lg")] = {
                padding: theme.spacing(6.5, 0),
            },
            _a["&.active"] = {
                border: "2px dashed ".concat(theme.eleganteDesign.colors.primary),
            },
            _a),
    });
});
