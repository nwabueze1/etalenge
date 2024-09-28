// MENU BLOCK
import { FC, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { BlockProvider, Container, MenuItemCard, Section, TEleganteStore } from "../../components";
import { useRecordMenuItemView } from "../../helper";
import { useGetColor } from "../../hooks";
import block10 from "../../mappings/block10";
import { CoreMenuItemFields } from "../../models";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { MenuItem } from "./MenuItem";
import { useBlock10Styles } from "./useBlock10Styles";

const { uuid: BLOCK_UUID } = block10;

export const EleganteBlock10: FC<TBlockConfig> = ({
  activeElement,
  content,
  index,
  configuration,
  handleSelect,
  mode = "view",
}) => {
  const { gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const btnConfig = useGetColor(configuration as CustomThemeProps, "button");
  const menuItemData = content?.menu_item;
  const classes = useBlock10Styles(mainConfig as CustomThemeProps);
  const dispatch = useDispatch();
  const key = "blocks." + String(index);
  const recordMenuItemView = useRecordMenuItemView();
  const relatedMenuItems = (content?.menu_item?.related_menu_items || []) as CoreMenuItemFields[];

  const handleGoBack = () => {
    if (mode === "view" && typeof window !== "undefined") {
      window.history.back();
    }
  };

  useEffect(() => {
    dispatch({ type: "GET_MENU_ITEMS", payload: [menuItemData] });

    recordMenuItemView(menuItemData?.uuid);
  }, []);

  const renderRelatedMenuItems = () =>
    relatedMenuItems.map((item, index) => (
      <div key={index} className={"keen-slider__slide"}>
        <MenuItemCard menuItem={item} currency={menuItemData?.menu?.restaurant?.bank_info?.currency ?? ""} isSsr={true} />
      </div>
    ));

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={btnConfig} gatewayUrl={gatewayUrl} block_uuid={BLOCK_UUID}>
      <Section
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
        background={backgroundConfig?.colors?.[100]}
      >
        <Container>
          <div className={classes.back} onClick={handleGoBack}>
            <IoIosArrowRoundBack className={classes.backIcon} /> <span>Back</span>
          </div>
          <MenuItem menu_item={content?.menu_item} />
          {relatedMenuItems.length > 0 && (
            <div className={classes.relatedMenuItemsParent}>
              <div className={classes.footerHeader}>
                <h2 className={classes.relatedItems}>Related Items</h2>
              </div>
              <div className={classes.relatedMenuItemsContainer}>{renderRelatedMenuItems()}</div>
            </div>
          )}
        </Container>
      </Section>
    </BlockProvider>
  );
};
