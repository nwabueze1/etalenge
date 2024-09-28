import { FC } from "react";
import { useSelector } from "react-redux";
import { BlockProviderProps, TEleganteStore, useBlockSelector } from "../../../../components";
import { useOrderSummaryStyles } from "./useOrderSummaryStyles";
import { CustomThemeProps } from "../../../../type";
import { getCurrency } from "../../../../helper";
import { calculateCartSubTotal } from "../../../../utils/calculateCartItemsSumTotal";
import { CoreCartFields } from "../../../../models";
import clx from "classnames";
import { OrderSummaryProps } from "./types";

export const OrderSummary: FC<OrderSummaryProps> = ({ onProceedToCheckout }) => {
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const { mainConfig, buttonConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useOrderSummaryStyles(mainConfig as CustomThemeProps);
  const btnClasses = useOrderSummaryStyles(buttonConfig as CustomThemeProps);
  const cart = restaurant?.cart;
  const currency = getCurrency(cart?.restaurant?.bank_info?.currency ?? "");
  const subTotal = calculateCartSubTotal(cart as CoreCartFields);
  const deliveryFee = !cart?.guest?.firstname ? Number(cart?.restaurant?.bank_info?.delivery_fee) : cart?.guest?.address?.uuid ? Number(cart?.restaurant?.bank_info?.delivery_fee) : 0;
  const total = subTotal + deliveryFee;

  return (
    <div>
      <h5 className={classes.title}>Order summary</h5>
      <div className={classes.summaryContainer}>
        <div className={classes.summaryItem}>
          <p className={classes.summaryText}>Number of dishes</p>
          <p className={classes.summaryText}>{cart?.cartItems?.length}</p>
        </div>{" "}
        <div className={classes.summaryItem}>
          <p className={classes.summaryText}>Subtotal</p>
          <p className={classes.summaryText}>
            {currency} {new Intl.NumberFormat("en-US").format(subTotal)}
          </p>
        </div>
        <div className={classes.summaryItem}>
          <p className={classes.summaryText}>Delivery Fee</p>
          <p className={classes.summaryText}>
            {currency} {new Intl.NumberFormat("en-US").format(deliveryFee)}
          </p>
        </div>
        <div className={classes.divider} />
        <div className={classes.summaryItem}>
          <p className={classes.summaryText}>Total</p>
          <p className={clx(classes.summaryText, classes.summaryTextBold)}>
            {currency} {new Intl.NumberFormat("en-US").format(total)}
          </p>
        </div>
        <button className={btnClasses.checkoutButton} onClick={onProceedToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
