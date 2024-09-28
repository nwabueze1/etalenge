// POST VIEW BLOCK
import clx from "classnames";
import { FC, Fragment, useEffect } from "react";
import { Container, Section } from "../../components";
import { useRecordLinkClick, useRecordPostView } from "../../helper";
import { getFormattedDate } from "../../helper/getFormatedDate";
import { useGetColor } from "../../hooks";
import block12 from "../../mappings/block12";
import { CorePostFields } from "../../models";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { parseApiImage } from "../../utils";
import { EleganteBlock8 } from "../Block8";
import { getSocialMediaLinks } from "./helper";
import { useCalculateMinutesRead, useCopyTextToClipBoard } from "./hooks";
import { GetSocialMediaLinkPropsType, SocialMediaType } from "./type";
import { useBlock12Styles } from "./useBlock12Styles";
import { createResponsiveImage } from "../../helper/responsiveImage";

const { uuid: BLOCK_UUID } = block12;

export const EleganteBlock12: FC<TBlockConfig> = ({
  activeElement,
  handleSelect,
  index,
  mode = "view",
  content,
  configuration,
}) => {
  const heroContent = {
    image: parseApiImage(content?.post?.featured_image),
    text: {
      heading: content?.post?.title,
      subtitle: content?.post?.excerpt,
    },
  };
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const classes = useBlock12Styles(mainConfig as CustomThemeProps);
  const socialMediaPlatforms: SocialMediaType[] = ["copy", "facebook", "twitter", "linkedin"];
  const { feedBackText, copyToClipboard } = useCopyTextToClipBoard();
  const contentPost = content?.post as CorePostFields;
  const key = `blocks.${index}`;
  const recordPostView = useRecordPostView();
  const recordLinkClick = useRecordLinkClick();
  const calculateMinutesRead = useCalculateMinutesRead();
  const relatedPosts = content?.post?.related_posts || [];

  useEffect(() => {
    recordPostView(content?.post?.uuid);
  }, []);

  const handleRelatedPostClick = (text: string, url: string) => {
    mode === "view" && recordLinkClick(text, url, BLOCK_UUID);
  };

  const socialMediaProps: GetSocialMediaLinkPropsType = {
    slug: contentPost?.slug ?? "",
    feedBackText,
    onCopyLink: copyToClipboard,
  };

  const renderSocialMedia = () =>
    socialMediaPlatforms.map((platform, index) => (
      <Fragment key={index}>{getSocialMediaLinks(platform, socialMediaProps, classes)}</Fragment>
    ));

  const renderRelatedPosts = () =>
    relatedPosts.map((post: CorePostFields, index: number) => {
      const parsedImage = parseApiImage(post?.featured_image);

      return (
        <div className={classes.card} key={index}>
          {createResponsiveImage(parsedImage, {
            className: classes.image,
            classNames: {
              picture: classes.imageContainer,
            },
          })}
          <div>
            <p className={classes.postCategory}>{post?.category_name}</p>
            <h6 className={classes.postTitle}>
              <a
                href={mode === "view" ? post?.slug : undefined}
                onClick={() => handleRelatedPostClick(post?.title, post?.slug ?? "")}
              >
                {post?.title}
              </a>
            </h6>
          </div>
        </div>
      );
    });

  const getText = (subtitle: string, title: string) => {
    return (
      <div className={classes.authorBlock}>
        <p>{subtitle}</p>
        <h6>{title}</h6>
      </div>
    );
  };
  const renderAuthor = () => (
    <div className={classes.authorBlock}>{getText("Written by", contentPost?.author?.name ?? "")}</div>
  );

  const renderDate = () => (
    <div className={classes.authorBlock}>
      {getText("Published on", getFormattedDate(contentPost?.published_at ?? ""))}
    </div>
  );

  const renderReadTime = () => (
    <div className={classes.authorBlock}>{getText("Read Time", calculateMinutesRead(content?.post?.content))}</div>
  );

  return (
    <div
      className={clx(classes.root, activeElement === key && "active")}
      onClick={() => handleSelect?.(key)}
      style={{ background: backgroundConfig?.colors?.[100] }}
    >
      <EleganteBlock8 content={heroContent} configuration={configuration} />
      <Container>
        <div className={classes.headerBlock}>
          {renderAuthor()}
          {renderDate()}
          {renderReadTime()}
          <div className={classes.socialContainer}>{renderSocialMedia()}</div>
        </div>
      </Container>
      <Section background={""}>
        <Container>
          <div className={classes.block}>
            <div className={classes.content} dangerouslySetInnerHTML={{ __html: content?.post?.content }} />
            {relatedPosts.length > 0 && (
              <div className={classes.related}>
                <h5 className={classes.relatedHeading}>Related Posts</h5>
                {renderRelatedPosts()}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};
