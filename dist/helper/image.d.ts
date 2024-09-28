export type TScreen = "desktop" | "tablet" | "mobile";
export type TCoordinates = Record<TScreen, any>;
export type MediaValue = {
    name?: string;
    description?: string;
    alternative_text?: string;
    caption?: string;
    src: string;
    coordinates?: TCoordinates;
};
export declare const imageSizes = "(min-width: 1024px) 1100px, (min-width: 500px) 750px, 450px";
export declare const createImageSrcset: (value: MediaValue) => string;
export declare const calculateCropCoordinates: (imageWidth: number, coordinates?: Record<"left" | "top" | "right" | "bottom", number>) => string;
