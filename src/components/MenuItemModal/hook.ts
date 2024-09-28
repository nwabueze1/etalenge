import { useDispatch, useSelector } from "react-redux";
import { TEleganteStore } from "../Provider";
import { CoreCartFields, CoreCartItemFields } from "../../models";
import Cookies from "universal-cookie";
import { createApolloClient, notify } from "../../helper";
import { UPDATE_CART_ITEM } from "./gql";

export const useUpdateCartItemQuantity = () => {
  const { restaurant, gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const client = createApolloClient(gatewayUrl ?? "");
  const updateCartCount = useUpdateCartCount();

  return async (variables: { uuid: string; quantity: number; options?: string }) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_NETWORK_OPERATION", payload: `update.cart-item.${variables.uuid}` });

      const { data, errors } = await client.mutate({
        mutation: UPDATE_CART_ITEM,
        variables,
      });

      if (!data || errors) {
        notify("error", "We could not complete that operation");
      }

      const cartItem = cart?.cartItems?.find(({ uuid }) => uuid === variables?.uuid) as CoreCartItemFields;

      notify("success", variables.quantity === 0 ? "Item deleted successfully" : "Item updated successfully");
      variables.quantity === 0
        ? dispatch({ type: "DELETE_CART_ITEM", payload: cartItem })
        : dispatch({
            type: "UPDATE_CART_ITEM",
            payload: { ...cartItem, quantity: variables.quantity },
          });
      variables.quantity === 0 && updateCartCount();
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
  };
};

const useUpdateCartCount = () => {
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((state) => state);
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const cookies = new Cookies();

  return () => {
    const cartItemCountCookie = cookies.get("cartItemCount");
    const siteUuid = cart?.restaurant?.site?.uuid as string;
    const updatedCount = cartItemCountCookie[siteUuid] - 1;
    cartItemCountCookie[siteUuid] = updatedCount;
    dispatch({ type: "SET_CART_ITEM_COUNT", payload: updatedCount });

    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
    });
  };
};
