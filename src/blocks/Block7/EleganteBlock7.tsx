import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { CoreMenuItemFields } from "../../models";
import { useGetColor } from "../../hooks";
import { BlockProvider, Button, Container, MenuItemCard } from "../../components";
import { useBlock7Styles } from "./useBlock7Styles";
import { useMediaQuery, useTheme } from "@mui/material";
import clx from "classnames";
import block7 from "../../mappings/block7";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

const { uuid: BLOCK_UUID } = block7;

export const EleganteBlock7: FC<TBlockConfig> = ({
  activeElement,
  handleSelect,
  index,
  content,
  mode = "view",
  configuration,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const btnConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock7Styles(mainConfig as CustomThemeProps);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const key = `blocks.${index}`;

  const renderMenuItems = () =>
    (content?.menu_items || []).map((menu_item: CoreMenuItemFields, index: number) => (
      <MenuItemCard
        menuItem={menu_item}
        currency={menu_item?.menu?.restaurant?.bank_info?.currency ?? ""}
        key={index}
        mode={mode}
        isSsr={true}
        screenSize={screenSize}
      />
    ));
  const renderButtons = () =>
    content?.buttons?.map((button: { text: string; url: string }, index: number) => (
      <Button size={"md"} variant={"contained"} href={button?.url} mode={mode} key={index}>
        {button?.text}
      </Button>
    ));

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={btnConfig} block_uuid={BLOCK_UUID}>
      <section
        style={{ background: backgroundConfig?.colors?.[100] }}
        className={clx(classes.root, activeElement === key && "active")}
        onClick={() => handleSelect?.(key)}
      >
        <Container>
          <header className={classes.header}>
            <h4 className={classes.heading}>{decodeText(content?.text?.title)}</h4>
            {md && renderButtons()}
          </header>
          <article className={classes.cardContainer}>{renderMenuItems()}</article>
          <div className={classes.btnMobileContainer}>{!md && renderButtons()}</div>
        </Container>
      </section>
    </BlockProvider>
  );
};
