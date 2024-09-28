import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { useGetColor } from "../../hooks";
import { BlockProvider, Button, Container, PostCard, Section } from "../../components";
import { useBlock4Styles } from "./useBlock4Styles";
import { CorePostFields } from "../../models";
import block4 from "../../mappings/block4";
import { decodeText } from "../../helper/decodeText";

const { uuid: BLOCK_UUID } = block4;

export const EleganteBlock4: FC<TBlockConfig> = ({
  activeElement,
  content,
  mode,
  configuration,
  handleSelect,
  index,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const btnConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock4Styles(mainConfig as CustomThemeProps);
  const contentPosts = (content?.posts as CorePostFields[]) ?? [];
  const key = `blocks.${index}`;

  const renderButtons = () =>
    content?.buttons?.map((button: { text: string; url: string }, index: number) => (
      <Button mode={mode} href={button.url} size={"md"} variant={"contained"} key={index}>
        {button.text}
      </Button>
    ));

  const renderPosts = () =>
    contentPosts?.map((post, index) => <PostCard screenSize={screenSize} {...post} key={index} mode={mode} />);

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={btnConfig} block_uuid={BLOCK_UUID}>
      <Section
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
        styles={{ background: backgroundConfig?.colors?.[100] }}
        background={mainConfig?.colors?.[100]}
      >
        <Container>
          <header className={classes.header}>
            <h4 className={classes.heading}>{decodeText(content?.text?.heading)}</h4>
            {renderButtons()}
          </header>
          <div className={classes.cardContainer}>{renderPosts()}</div>
        </Container>
      </Section>
    </BlockProvider>
  );
};
