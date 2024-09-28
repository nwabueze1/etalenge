import { CorePostFields } from "../../models";
import { FC } from "react";
type TPostCard = CorePostFields & {
    mode?: "view" | "edit";
    background?: string;
    block_uuid?: string;
    screenSize?: number;
};
export declare const PostCard: FC<TPostCard>;
export {};
