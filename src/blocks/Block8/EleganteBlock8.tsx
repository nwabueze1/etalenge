import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { useGetColor } from "../../hooks";
import { useBlock8Styles } from "./useBlock8Styles";
import { Container } from "../../components";
import clx from "classnames";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
import { createResponsiveImage } from "../../helper/responsiveImage";

export const EleganteBlock8: FC<TBlockConfig> = ({
  activeElement,
  configuration,
  screenSize,
  content,
  index,
  handleSelect,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const classes = useBlock8Styles(mainConfig as CustomThemeProps);
  const key = `blocks.${index}`;
  const image = content?.image;
  const image_source = image?.source?.includes("unsplash") ? "Unsplash" : "Pexels";

  return (
    <section
      className={clx(classes.root, activeElement === key && "active")}
      onClick={() => handleSelect?.(key)}
      style={{ background: backgroundConfig?.colors?.[100] }}
    >
      <Container>
        <div className={classes.block}>
          <div className={classes.contentCard}>
            <header className={classes.header}>
              <h1 className={classes.heading}>{decodeText(content?.text?.heading)}</h1>
              <p className={classes?.subheading}>{decodeText(content?.text?.subtitle)}</p>
              {image?.photographer && image?.source && (
                <p className={classes.featuredImageAttribution}>
                  <em>
                    Photo by{" "}
                    <a href={image?.photographer?.url} target="_blank">
                      {image?.photographer?.name}
                    </a>{" "}
                    on{" "}
                    <a href={image?.source} target="_blank">
                      {image_source}
                    </a>
                  </em>
                </p>
              )}
            </header>
          </div>
        </div>
      </Container>
      <div className={classes.overlay} />
      {createResponsiveImage(content?.image, {
        className: classes.backgroundImage,
        screenSize,
      })}
    </section>
  );
};
