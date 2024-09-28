export declare const useLayoutParameter: (layouts: {
    name: string;
    isSelected: boolean;
}[] | undefined) => {
    path: string;
    selectedLayout: string | undefined;
    layoutClass: string | undefined;
    theme: import("@mui/material").Theme;
    lg: boolean;
    sm: boolean;
    md: boolean;
    xmd: boolean;
};
