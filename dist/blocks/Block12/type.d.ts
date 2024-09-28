export type SocialMediaType = "facebook" | "linkedin" | "twitter" | "copy";
export type GetSocialMediaLinkPropsType = {
    slug: string;
    onCopyLink: (slug: string) => void;
    feedBackText?: string;
};
