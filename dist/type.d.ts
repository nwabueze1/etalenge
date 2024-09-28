import { FC } from "react";
export type TBlockConfig = {
    index?: number;
    mode?: "view" | "edit";
    activeElement?: string;
    handleSelect?: (key: string) => void;
    isSsr?: boolean;
    content: {
        [key: string]: any;
    };
    ssr_network_operation?: string;
    ssr_content_fields?: string[];
    ssr_network_identifier?: string;
    layouts?: {
        name: string;
        isSelected: boolean;
        content?: {
            [key: string]: any;
        };
    }[];
    animations?: {
        name: string;
        isSelected: boolean;
    }[];
    configuration?: {
        colors?: {
            [key: string]: {
                [key: string]: string;
            };
        };
        fonts?: Record<"heading" | "body", string>;
    };
    imageCropper?: TImageCropper;
    screenSize?: number;
};
export type TEleganteTemplateType = {
    name: string;
    component: FC<TBlockConfig>;
    props: TBlockConfig;
};
export type CustomThemeProps = {
    colors: {
        [key: string]: any;
    };
    fonts: Record<"heading" | "body", string>;
};
export type TElegantePageProps = {
    name: string;
    pages: string[];
};
export type TCropper = Record<"defaultSize" | "height" | "width", number>;
export type TImageCropper = Record<"desktop" | "tablet" | "mobile", TCropper>;
