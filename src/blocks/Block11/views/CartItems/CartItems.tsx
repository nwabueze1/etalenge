import { useState } from "react";
import { useSelector } from "react-redux";
import {
  BlockProviderProps,
  TEleganteStore,
  useBlockSelector,
  useUpdateCartItemQuantity,
} from "../../../../components";
import { useCartItemsStyles } from "./useCartItemsStyles";
import { CustomThemeProps } from "../../../../type";
import { CartMenuItemCard } from "../../components";
import { CoreCartItemFields } from "../../../../models";

export const CartItems = () => {
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useCartItemsStyles(mainConfig as CustomThemeProps);
  const cart = restaurant?.cart;
  const [action, setAction] = useState<"increment" | "decrement" | "delete" | "">("");
  const updateCartItem = useUpdateCartItemQuantity();

  const resetAction = () => {
    setAction("");
  };

  const handleUpdateCartQuantity = async (
    cartItem: CoreCartItemFields,
    actionType: "increment" | "decrement" | "delete"
  ) => {
    try {
      setAction(actionType);

      const quantity =
        cartItem.quantity + (actionType === "increment" ? 1 : actionType === "decrement" ? -1 : -cartItem.quantity);
      await updateCartItem({
        quantity,
        options: cartItem.options,
        uuid: cartItem?.uuid ?? "",
      });
    } catch (ex) {
      //
    } finally {
      resetAction();
    }
  };

  const renderCartItems = () =>
    cart?.cartItems?.map((cartItem, index: number) => (
      <CartMenuItemCard
        currency={cart?.currency}
        cartItem={cartItem}
        key={index}
        action={action}
        onDecrement={() => handleUpdateCartQuantity(cartItem, "decrement")}
        onDelete={() => handleUpdateCartQuantity(cartItem, "delete")}
        onIncrement={() => handleUpdateCartQuantity(cartItem, "increment")}
      />
    ));

  return (
    <div className={classes.block}>
      <div className={classes.cartItems}>
        <header>
          <h4 className={classes.title}>Checkout ({cart?.cartItems?.length} items)</h4>
        </header>
        {renderCartItems()}
      </div>
    </div>
  );
};
