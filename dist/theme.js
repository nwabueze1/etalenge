var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createTheme } from "@mui/material/styles";
import { theme as wazTheme } from "@wazobia-tech/wazcom/dist/theme";
export var theme = __assign(__assign({}, wazTheme), { breakpoints: {
        values: {
            sm: 480,
            md: 769,
            lg: 1025,
            xl: 1440,
            xxl: 1728,
            xxxl: 1920,
        },
    }, eleganteStyles: {
        maxWidth: 1720,
        tabMaxWidth: 700,
        mobileMaxWidth: 300,
        macBookWidth: 1280,
    }, eleganteDesign: {
        typography: {
            fontWeightSmall: 400,
            fontWeightMedium: 600,
            fontSize: 12,
            h1: "3rem",
            h2: "2.5rem",
            h3: "2.25rem",
            h4: "2rem",
            h5: "1.5rem",
            h6: "1.25rem",
        },
        font: {
            inter: "'Inter', sans-serif",
        },
        colors: {
            white: "#FFFFFF",
            primary: "#0088AA",
            error: "#FF3842",
            dark: "#000001",
        },
        shadows: {},
        background: {},
    } });
export default createTheme(theme);
