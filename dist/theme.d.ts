interface ExtendedThemeOptions {
    eleganteDesign: {
        font: Record<"inter", string>;
        colors: {
            [key: string]: string;
        };
        background: {
            [key: string]: string;
        };
        border: {
            [key: string]: string;
        };
        typography: {
            [key: string]: any;
        };
        shadows: {
            [key: string]: string;
        };
        overlay: {
            [key: string]: string;
        };
    };
    eleganteStyles: Record<"maxWidth" | "mobileMaxWidth" | "macBookWidth", number>;
}
declare module "@mui/material/styles" {
    interface Theme extends ExtendedThemeOptions {
    }
    interface ThemeOptions extends ExtendedThemeOptions {
    }
}
export declare const theme: any;
declare const _default: import("@mui/material/styles").Theme;
export default _default;
