import { createTheme } from "@mui/material/styles";
export var theme = {
    breakpoints: {
        values: {
            sm: 480,
            md: 769,
            lg: 1025,
            xl: 1440,
            xxl: 1728,
            xxxl: 1920,
        },
    },
    eleganteStyles: {
        maxWidth: 1720,
        tabMaxWidth: 700,
        mobileMaxWidth: 300,
        macBookWidth: 1280,
    },
    eleganteDesign: {
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
    },
};
export default createTheme(theme);
