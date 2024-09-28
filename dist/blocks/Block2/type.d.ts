export declare class SocialMedia {
    icon: "facebook" | "instagram" | "youtube" | "twitter";
    url: string;
}
export type TSocialMediaButton = {
    type: "facebook" | "instagram" | "youtube" | "twitter" | "linkedin" | "tiktok" | "github";
    url: string;
};
export type Link = {
    text: string;
    url: string;
    not_url?: boolean;
    name?: string;
    links?: {
        icon: string;
        url: string;
    }[];
};
export type TFooterLink = {
    name: string;
    url?: string;
    text?: string;
    links?: {
        text: string;
        url: string;
        not_url?: boolean;
        name?: string;
        icon: "facebook" | "instagram" | "youtube" | "twitter";
    }[];
};
