import { FC, useEffect, useState } from "react";
import { TMenuItemCardProps } from "./type";
import { BlockProviderProps, useBlockSelector } from "../BlockProvider";
import { useMenuItemCardStyles } from "./useMenuItemCardStyles";
import { CustomThemeProps } from "../../type";
import { getCurrency, parsePostImage } from "../../helper";
import { IoBagOutline, IoBag } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Modal } from "../Modal";
import { MenuItem } from "../../blocks/Block10/MenuItem";
import { Skeleton } from "@mui/material";
import { useGetMenuItem } from "../../blocks/Block10/hooks";
import { CoreMenuItemFields } from "../../models";
import { createResponsiveImage } from "../../helper/responsiveImage";

export const MenuItemCard: FC<TMenuItemCardProps> = ({ menuItem, screenSize, currency: currencyProp, mode, isSsr }) => {
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useMenuItemCardStyles(mainConfig as CustomThemeProps);
  const parseImage = parsePostImage(menuItem.image);
  const currency = getCurrency(currencyProp);
  const [isCartHovered, setIsCartHovered] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [ssrMenuItem, setSsrMenuItem] = useState<CoreMenuItemFields>(menuItem);
  const getMenuItem = useGetMenuItem(setLoading);

  const category = menuItem?.slug?.split("/")[1];
  const handleMouseEnter = () => setIsCartHovered(true);

  const handleMouseLeave = () => setIsCartHovered(false);

  const renderSkeleton = () => (
    <>
      <Skeleton height={200} width={"100%"} />
      <div>
        <Skeleton height={60} width={"100%"} />
        <Skeleton height={40} width={"100%"} />
        <Skeleton height={100} width={"100%"} />
      </div>
    </>
  );

  useEffect(() => {
    if (!isSsr) return;
    getMenuItem(menuItem.uuid ?? "", setSsrMenuItem);
  }, []);

  return (
    <article className={classes.root}>
      <div className={classes.cardContent}>
        {createResponsiveImage(parseImage, {
          className: classes.image,
          screenSize,
          classNames: {
            picture: classes.imageContainer,
          },
        })}

        <div className={classes.cardTextContainer}>
          <h4 className={classes.title}>{menuItem?.name}</h4>
          <p className={classes.subtitle}>{menuItem?.description}</p>
          <div className={classes.detailsContainer}>
            <a href={mode === "edit" ? "#" : menuItem?.slug} className={classes.moreInfo}>
              More info
              <IoIosArrowRoundForward className={classes.arrowRight} />
            </a>
            {category && <div className={classes.menuCategory}>{category}</div>}
          </div>
        </div>
        <div className={classes.cardFooter}>
          <h6 className={classes.price}>
            {currency} {menuItem?.price}
          </h6>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classes.cartIconContainer}
            onClick={() => setOpenModal(true)}
          >
            {!isCartHovered ? <IoBagOutline className={classes.cartIcon} /> : <IoBag className={classes.cartIcon} />}
          </div>
        </div>
      </div>
      {mode !== "edit" && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          {loading ? (
            renderSkeleton()
          ) : (
            <MenuItem
              isSsr={true}
              menu_item={isSsr ? ssrMenuItem : menuItem}
              onItemAddedToCart={() => setOpenModal(false)}
              screenSize={screenSize}
            />
          )}
        </Modal>
      )}
    </article>
  );
};
