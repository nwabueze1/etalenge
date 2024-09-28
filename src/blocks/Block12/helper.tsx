import { FaFacebookF, FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";
import { GetSocialMediaLinkPropsType, SocialMediaType } from "./type";
import { ClassNameMap } from "@mui/material";

export const getSocialMediaLinks = (
  platform: SocialMediaType,
  { slug, onCopyLink, feedBackText }: GetSocialMediaLinkPropsType,
  classes: ClassNameMap<string>
) => {
  if (typeof window === "undefined") return null;
  const websiteLink = window.location.origin;
  const postLink = `${websiteLink}${slug}`;

  switch (platform) {
    case "facebook":
      return (
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`} className={classes.postLink}>
          <FaFacebookF className={classes.icon} />
        </a>
      );
    case "twitter":
      return (
        <a href={`https://twitter.com/intent/tweet?url=${postLink}`} className={classes.postLink}>
          <FaTwitter className={classes.icon} />
        </a>
      );

    case "linkedin":
      return (
        <a href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${postLink}`} className={classes.postLink}>
          <FaLinkedin className={classes.icon} />
        </a>
      );
    case "copy":
      return (
        <button className={classes.copyLinkButton} onClick={() => onCopyLink(slug)}>
          <FaCopy className={classes.icon} /> <span>{feedBackText}</span>
        </button>
      );
    default:
      return null;
  }
};
