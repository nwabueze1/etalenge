import { CustomThemeProps, TBlockConfig } from "../type";
export declare const useGetColor: (configuration: CustomThemeProps, type: string) => {
    colors: Record<string, string>;
    fonts: {
        [key: string]: string;
    };
};
export declare const useGetFonts: () => (configuration: TBlockConfig["configuration"]) => {
    [key: string]: string;
};
