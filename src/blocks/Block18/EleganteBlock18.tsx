import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { BlockProvider, Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock18Styles } from "./useBlock18Styles";

export const EleganteBlock18: FC<TBlockConfig> = ({
  activeElement,
  index,
  handleSelect,
  configuration,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock18Styles(mainConfig as CustomThemeProps);
  const key = `blocks.${index}`;

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <Section
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
        background={backgroundConfig?.colors?.[100]}
      >
        <Container>
          <div className={classes.box}>
            <h1 className={classes.heading}>Oops, we couldn’t find this page</h1>
            <p>
              Sorry the page you’re looking for does not exist or has been moved, try refreshing the page or go back
              home
            </p>
            <div className={classes.imgContainer}>
              <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Frame+8829+(1).png" alt="404" />
            </div>
          </div>
        </Container>
      </Section>
    </BlockProvider>
  );
};
