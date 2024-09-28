import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock16Styles } from "./useBlock16Styles";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
import { createResponsiveImage } from "../../helper/responsiveImage";

export const EleganteBlock16: FC<TBlockConfig> = ({
  activeElement,
  handleSelect,
  index,
  configuration,
  content,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const classes = useBlock16Styles(mainConfig as CustomThemeProps);
  const key = `blocks.${index}`;

  const renderCards = () =>
    content?.cards?.map((card: { title: string; subtitle: string }, index: number) => (
      <article key={index}>
        <h6 className={classes.cardTitle}>{decodeText(card?.title)}</h6>
        <p className={classes.cardSubtitle}>{decodeText(card?.subtitle)}</p>
      </article>
    ));

  return (
    <Section
      isActive={activeElement === key}
      onClick={() => handleSelect?.(key)}
      background={backgroundConfig?.colors?.[100]}
    >
      <Container>
        <div className={classes.block}>
          {createResponsiveImage(content?.image, {
            className: classes.image,
            classNames: {
              picture: classes.content,
            },
            screenSize,
            styles: {
              picture: {
                display: "flex",
              },
            },
          })}
          <div className={classes.content}>
            <h3 className={classes.heading}>{decodeText(content?.text?.heading)}</h3>
            <p className={classes.subheading}>{decodeText(content?.text?.subheading)}</p>
            <div className={classes.cardContainer}>{renderCards()}</div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
