import { FC } from "react";
import { useSelector } from "react-redux";
import { BlockProviderProps, TEleganteStore, useBlockSelector } from "../../../../components";
import { getCurrency } from "../../../../helper";
import { useOrderDetailsStyles } from "./useOrderDetailsStyles";
import { CustomThemeProps } from "../../../../type";
import { calculateCartItemsSumTotal } from "../../../../utils/calculateCartItemsSumTotal";
import { CoreCartFields } from "../../../../models";
import clx from "classnames";

export const OrderDetails: FC<{ mode?: "view" | "edit" }> = ({}) => {
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useOrderDetailsStyles(mainConfig as CustomThemeProps);
  const cart = restaurant?.cart;
  const order_type = cart?.order?.order_type ?? "";
  const currency = getCurrency(cart?.currency ?? "");
  const deliveryFee = cart?.guest?.address?.uuid ? cart?.restaurant?.bank_info?.delivery_fee ?? 0 : 0;
  const orderDetails = {
    "Order ID": cart?.order?.uuid?.slice(0, 13) ?? "",
    "Number of Dishes": `${cart?.cartItems?.length ?? 0}`,
    Subtotal: `${currency} `.concat(String(calculateCartItemsSumTotal(cart as CoreCartFields))),
    "Delivery Fee": `${currency} `.concat(String(deliveryFee)),
  };

  const getContactDetails = () => {
    const contactDetails: Record<string, string> = {
      "Delivery Method": order_type.charAt(0).toUpperCase() + order_type.slice(1).toLowerCase(),
      "Contact Name": `${cart?.guest?.firstname} ${cart?.guest?.lastname}`,
      "Contact Phone": cart?.guest?.phone ?? "",
    };

    if (order_type === "dispatch" && cart?.guest?.address) {
      contactDetails["Address"] = cart?.guest?.address?.addressline1 ?? "";
    }

    return contactDetails;
  };

  const renderOrderInformation = (information: Record<string, string>) =>
    Object.entries(information).map(([key, value], index) => (
      <div key={index} className={classes.cardItem}>
        <p>{key}</p>
        <p className={"bold"}>{value}</p>
      </div>
    ));

  const renderOrderSuccessCard = () => (
    <div className={classes.orderPlacedSuccessfullyCard}>
      <img
        src={"https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/order-placed-successfully-icon-small.svg"}
        alt={"order-placed - icon"}
        width={220}
        height={147}
      />
      <p className={classes.orderPlacedSuccessfullyText}>Order has been placed successfully</p>
    </div>
  );

  const getPaymentMethod = () => {
    const paymentMethod = (cart?.order?.payment_type ?? "").toLowerCase()?.replace(/_/g, " ");
    return paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1).toLowerCase();
  };

  return (
    <div>
      <div>
        <p className={classes.cardHeader}>Order Details</p>
        <div className={classes.card}>
          {renderOrderInformation(orderDetails)}
          <div className={classes.separator} />
          <div className={classes.cardItem}>
            <p>Total</p>
            <p className={"bold total"}>
              {currency} {calculateCartItemsSumTotal(cart as CoreCartFields) + deliveryFee}
            </p>
          </div>
        </div>
        <div className={clx(classes.card, "guest")}>
          {renderOrderInformation(getContactDetails())}
        </div>
        <div className={clx(classes.card, "payment")}>
          <div className={classes.cardItem}>
            <p>Payment method</p>
            <p className={"bold"}>{getPaymentMethod()}</p>
          </div>
        </div>
      </div>
      {renderOrderSuccessCard()}
    </div>
  );
};
