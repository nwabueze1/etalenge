import { makeStyles } from "@mui/styles";
export var useModalStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            position: "fixed",
            height: "100dvh",
            width: "100vw",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
        },
        modalContent: (_a = {
                padding: theme.spacing(2),
                maxHeight: "85vh"
            },
            _a[theme.breakpoints.up("md")] = {
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: theme.spacing(3),
                width: "70vw",
                maxWidth: 952,
                overflow: "hidden",
            },
            _a.background = theme.eleganteDesign.colors.white,
            _a.zIndex = 1,
            _a.borderRadius = theme.spacing(1),
            _a.position = "relative",
            _a),
        overlay: {
            height: "100vh",
            width: "100vw",
            position: "absolute",
            background: "rgba(0,0,0,0.3)",
        },
        closeButton: (_b = {
                cursor: "pointer",
                right: 5,
                top: 5,
                position: "absolute",
                fontSize: theme.typography.fontSize + 6,
                fill: theme.eleganteDesign.colors.dark
            },
            _b[theme.breakpoints.up("md")] = {
                right: 20,
                top: 20,
            },
            _b),
    });
});
