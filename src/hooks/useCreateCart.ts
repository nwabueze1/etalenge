import { createApolloClient } from "../helper";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { CoreMenuFields } from "../models";
import { TEleganteStore } from "../components";
import { CREATE_CART } from "./dql";

export const useCreateCart = () => {
  const { restaurant, gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();
  const client = createApolloClient(gatewayUrl ?? "");

  return async () => {
    const cartCookie: { [key: string]: string } = cookies.get("cart") ?? {};
    const cartItemCountCookie: { [key: string]: number } = cookies.get("cartItemCount") ?? {};
    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site?.uuid as string;
    const currency = menu?.menuItems?.[0]?.menu?.restaurant?.bank_info?.currency as string;
    const { data, errors } = await client.mutate({
      mutation: CREATE_CART,
      variables: { site_uuid: siteUuid, currency },
    });

    if (!data || errors) {
      const error = new Error("We could not complete that operation");
      throw error;
    }
    const { uuid, expires } = data.createCart;
    cartCookie[siteUuid] = uuid;
    cartItemCountCookie[siteUuid] = 0;
    cookies.set("cart", cartCookie, {
      path: "/",
      expires: new Date(expires),
    });
    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(expires),
    });
    return uuid;
  };
};
