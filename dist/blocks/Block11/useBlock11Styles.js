import { makeStyles } from "@mui/styles";
export var useBlock11Styles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: (_a = {
                display: "flex",
                flexDirection: "column-reverse"
            },
            _a[theme.breakpoints.up("lg")] = {
                flexDirection: "row",
                gap: theme.spacing(5),
            },
            _a),
        cartBackButton: {
            marginBottom: theme.spacing(3),
        },
        cartItems: (_b = {
                width: "100%"
            },
            _b[theme.breakpoints.up("lg")] = {
                width: "57%",
            },
            _b),
        cartSidebar: (_c = {
                width: "100%",
                marginBottom: theme.spacing(3)
            },
            _c[theme.breakpoints.up("lg")] = {
                width: "41%",
                marginBottom: 0,
            },
            _c),
        cartLoaderContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(5),
        }
    });
});
