export type TTemplate = {
    name: string;
    label: string;
    uuid: string;
    image: string;
    blocks: string[];
    colors: {
        [key: string]: any;
    };
    fonts: {
        [key: string]: any;
    };
    hive_identifiers?: {
        block: string;
        field: string;
    }[];
    type?: string;
    unique_identifier?: string;
};
export declare const templateConfig: TTemplate[];
export declare const cartTemplate: TTemplate;
export declare const blogTemplate: TTemplate;
export declare const menuItemTemplate: TTemplate;
export declare const blogPostTemplate: TTemplate;
export declare const searchTemplate: TTemplate;
export declare const errorTemplate: {
    name: string;
    label: string;
    uuid: string;
    image: string;
    blocks: string[];
    colors: {
        primary: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
        };
        neutral: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
        };
        secondary: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
        };
        alert: {
            positive: string;
            general: string;
            error: string;
        };
    };
    fonts: {
        heading: {
            options: string[];
            selected: string;
        };
        body: {
            options: string[];
            selected: string;
        };
    };
};
