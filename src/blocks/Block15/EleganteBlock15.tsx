import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { BlockProvider, Button, Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock15Styles } from "./useBlock15Styles";
import block15 from "../../mappings/block15";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";

const { uuid: BLOCK_UUID } = block15;

export const EleganteBlock15: FC<TBlockConfig> = ({
  activeElement,
  handleSelect,
  index,
  content,
  configuration,
  mode,
  screenSize,
}) => {
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const classes = useBlock15Styles(mainConfig as CustomThemeProps);
  const buttonClass = useBlock15Styles(buttonConfig as CustomThemeProps);
  const key = `blocks.${index}`;
  const renderCards = () =>
    content?.cards?.map((item: { title: string; subtitle: string }, index: number) => (
      <article key={index} className={classes.card}>
        <h6 className={classes.cardHeader}>{item?.title}</h6>
        <p className={classes.cardDescription}>{item?.subtitle}</p>
      </article>
    ));

  const renderButtons = () =>
    content?.buttons?.map(
      (button: { text: string; url: string; variant: "text" | "contained" | "outlined" }, index: number) => (
        <Button
          size={"md"}
          className={button?.variant === "outlined" ? buttonClass.buttonOutlined : ""}
          variant={button?.variant}
          key={index}
          mode={mode}
          href={button.url}
        >
          {button.text}
        </Button>
      )
    );

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig} block_uuid={BLOCK_UUID}>
      <Section
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
        background={backgroundConfig?.colors?.[100]}
      >
        <Container>
          <div className={classes.block}>
            <div className={classes.content}>
              <h2 className={classes.heading}>{decodeText(content?.text?.heading)}</h2>
              <p className={classes.subheading}>{decodeText(content?.text?.subheading)}</p>
              <div className={classes.cardsContainer}>{renderCards()}</div>
              <div className={classes.buttonContainer}>{renderButtons()}</div>
            </div>
            {createResponsiveImage(content?.image, {
              className: classes.image,
              screenSize,
              classNames: {
                picture: classes.content,
              },
              styles: {
                picture: {
                  display: "flex",
                },
              },
            })}
          </div>
        </Container>
      </Section>
    </BlockProvider>
  );
};
