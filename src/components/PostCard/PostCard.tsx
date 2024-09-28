import { CorePostFields } from "../../models";
import { FC } from "react";
import { BlockProviderProps, useBlockSelector } from "../BlockProvider";
import { usePostCardStyles } from "./usePostCardStyles";
import { CustomThemeProps } from "../../type";
import { parsePostImage, useRecordLinkClick } from "../../helper";
import { createResponsiveImage } from "../../helper/responsiveImage";

type TPostCard = CorePostFields & {
  mode?: "view" | "edit";
  background?: string;
  block_uuid?: string;
  screenSize?: number;
};

export const PostCard: FC<TPostCard> = ({ mode, screenSize, background, ...post }) => {
  const { mainConfig, block_uuid } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = usePostCardStyles(mainConfig as CustomThemeProps);
  const parsedImage = parsePostImage(post?.featured_image);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text: string, url: string) => {
    mode === "view" && recordLinkClick(text, url, block_uuid);
  };

  return (
    <article className={classes.root} style={{ background }}>
      {createResponsiveImage(parsedImage, {
        screenSize,
        className: classes.image,
        classNames: {
          picture: classes.imageContainer,
        },
        styles: {
          picture: {
            display: "block",
          },
        },
      })}
      <div className={classes.cardBody}>
        <div className={classes.tagsContainer}>
          <div className={classes.tag}>{post?.slug?.split("/")[1]}</div>
        </div>
        <div className={classes.separator} />
        <div className={classes.textContainer}>
          <p className={classes.postTitle}>{post?.title}</p>
          <a
            href={mode === "view" ? post?.slug : undefined}
            onClick={() => handleClick(post?.title, post?.slug ?? "")}
            className={classes.postLink}
          >
            Read article
          </a>
        </div>
      </div>
    </article>
  );
};
