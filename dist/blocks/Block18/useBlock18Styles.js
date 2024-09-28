import { makeStyles } from "@mui/styles";
export var useBlock18Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        container: (_a = {
                width: "85%",
                margin: "auto"
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _a),
        box: (_b = {
                width: "40%",
                margin: "auto",
                padding: theme.spacing(18.5, 0)
            },
            _b[theme.breakpoints.down("xl")] = {
                width: "80%",
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "80%",
                padding: theme.spacing(15, 0, 12.5, 0),
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _b["& img"] = {
                position: "absolute",
                top: 0,
                objectFit: "cover",
                width: "100%",
            },
            _b["& p"] = (_c = {
                    fontSize: theme.typography.fontSize + 12,
                    textAlign: "center",
                    fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.body; },
                    padding: theme.spacing(2, 0)
                },
                _c[theme.breakpoints.down("sm")] = {
                    fontSize: theme.typography.fontSize + 4,
                },
                _c),
            _b),
        heading: (_d = {
                fontSize: theme.typography.fontSize + 24,
                textAlign: "center",
                fontWeight: theme.typography.fontWeightBold,
                fontFamily: function (props) { var _a; return (_a = props === null || props === void 0 ? void 0 : props.fonts) === null || _a === void 0 ? void 0 : _a.heading; }
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 16,
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 12,
            },
            _d),
        imgContainer: (_e = {
                position: "relative",
                marginTop: theme.spacing(8),
                height: 426
            },
            _e[theme.breakpoints.down("lg")] = {
                height: 333,
                marginTop: theme.spacing(6),
            },
            _e[theme.breakpoints.down("sm")] = {
                height: 183,
                marginTop: theme.spacing(3),
            },
            _e),
    });
});
