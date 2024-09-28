import { useDispatch, useSelector } from "react-redux";
import { TEleganteStore } from "../components";
import { CoreMenuFields } from "../models";
import Cookies from "universal-cookie";
import { useCreateCart } from "./useCreateCart";
import { createApolloClient, useRecordAddToCart } from "../helper";
import { CREATE_CART_ITEM } from "./dql";
import { useUpdateCartCount } from "./useUpdateCartCount";
import { notify } from "../helper/notify";
import block10 from "../mappings/block10";

const { uuid: BLOCK_UUID } = block10;

export type TAddToCartVariables = {
  detail: string;
  quantity: number;
  options?: string;
  menu_item_uuid: string;
};

export const useAddToCart = () => {
  const { restaurant, gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();
  const createCart = useCreateCart();
  const client = createApolloClient(gatewayUrl ?? "");
  const updateCartCount = useUpdateCartCount();
  const dispatch = useDispatch();
  const recordAddToCart = useRecordAddToCart();

  return async (variables: TAddToCartVariables) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const cartCookie = cookies.get("cart");
    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site?.uuid ?? "";

    let cartUuid: string;
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      if (!cartCookie || !cartCookie[siteUuid]) cartUuid = await createCart();
      else cartUuid = cartCookie[siteUuid];
      const { data, errors } = await client.mutate({
        mutation: CREATE_CART_ITEM,
        variables: { ...variables, cart_uuid: cartUuid },
      });

      if (!data || errors) {
        const error = new Error("We could not complete that operation");
        throw error;
      }

      recordAddToCart(variables.menu_item_uuid, BLOCK_UUID);
      dispatch({ type: "SET_LOADING", payload: false });
      updateCartCount();
      return data;
    } catch (error) {
      //TODO: log this sentry
      notify("error", "There was a problem adding to cart");
      dispatch({ type: "SET_LOADING", payload: false });
      return undefined;
    }
  };
};
