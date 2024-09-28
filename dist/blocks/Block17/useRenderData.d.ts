import { CoreMenuItemFields, CorePostFields } from "../../models";
import { ClassNameMap } from "@mui/material";
export declare const useRenderData: (mode: ("view" | "edit") | undefined, classes: ClassNameMap<string>) => {
    renderMenuItems: (menuItems: CoreMenuItemFields[]) => import("react/jsx-runtime").JSX.Element[];
    renderPosts: (posts: CorePostFields[]) => import("react/jsx-runtime").JSX.Element[];
    renderImageSkeleton: () => import("react/jsx-runtime").JSX.Element;
};
