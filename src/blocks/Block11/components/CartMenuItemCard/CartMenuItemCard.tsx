import { FC } from "react";
import { CustomThemeProps } from "../../../../type";
import { BlockProviderProps, TEleganteStore, useBlockSelector } from "../../../../components";
import { useCartMenuItemCardStyles } from "./useCartMenuItemCardStyles";
import { TCartItemCard } from "./type";
import { getCurrency } from "../../../../helper";
import { MdOutlineDelete } from "react-icons/md";
import { parseApiImage } from "../../../../utils";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { MenuConfigType } from "../../../Block10/helpers";
import { calculateCartSubTotal } from "../../../../utils/calculateCartItemsSumTotal";
import { CoreCartFields } from "../../../../models";
import clx from "classnames";
import { createResponsiveImage } from "../../../../helper/responsiveImage";

export const CartMenuItemCard: FC<TCartItemCard> = ({
  currency,
  cartItem,
  onDelete,
  onIncrement,
  onDecrement,
  action,
}) => {
  const { networkOperation, restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const { buttonConfig, mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useCartMenuItemCardStyles(mainConfig as CustomThemeProps);
  const buttonClass = useCartMenuItemCardStyles(buttonConfig as CustomThemeProps);
  const { menuItem, detail, quantity, options } = cartItem;
  const cart = restaurant?.cart;

  const image = parseApiImage(menuItem?.image);

  const parsedOptions: MenuConfigType[] = JSON.parse(options);

  const renderParsedOptions = () =>
    (parsedOptions ?? []).map((parsedOption, index) => (
      <div key={index}>
        <p className={classes.menuOptionHeader}>
          {parsedOption.name} ({parsedOption.type})
        </p>
        <ul className={classes.list}>
          {parsedOption.selectedChoices.map((choice, innerIndex) => (
            <li key={innerIndex} className={classes.badge}>
              {choice.name} -{" "}
              <b>
                {currencySymbol} {choice.amount}
              </b>
            </li>
          ))}
        </ul>
      </div>
    ));

  const sumTotal = calculateCartSubTotal(cart as CoreCartFields, cartItem?.uuid);
  const currencySymbol = getCurrency(currency);
  const showLoading = networkOperation === `update.cart-item.${cartItem?.uuid}`;

  const renderProgress = () => <CircularProgress color={"inherit"} size={16} />;

  return (
    <article className={classes.root}>
      {createResponsiveImage(image, {
        className: classes.image,
        classNames: {
          picture: classes.imageContainer,
        },
      })}
      <div className={classes.cardBody}>
        <h5 className={classes.title}>{menuItem.name}</h5>
        {(detail || menuItem.description) && <p className={classes.description}>{detail || menuItem.description}</p>}
        <div className={classes.menuOptionsContainer}>{renderParsedOptions()}</div>
        <p className={classes?.price}>
          {" "}
          {currencySymbol} {new Intl.NumberFormat("en-US").format(sumTotal)}
        </p>
        <div className={classes.cardFooter}>
          <div className={classes.actionButtonContainer}>
            <button className={clx(buttonClass?.actionBtn, cart?.order && "invisible")} onClick={onDecrement}>
              {showLoading && action === "decrement" ? renderProgress() : "-"}
            </button>
            <span className={buttonClass.counter}>{quantity}</span>
            <button className={clx(buttonClass?.actionBtn, cart?.order && "invisible")} onClick={onIncrement}>
              {showLoading && action === "increment" ? renderProgress() : "+"}
            </button>
          </div>
          {showLoading && action === "delete" ? (
            renderProgress()
          ) : (
            <MdOutlineDelete className={clx(buttonClass.deleteButton, cart?.order && "invisible")} onClick={onDelete} />
          )}
        </div>
      </div>
    </article>
  );
};
