import { useDispatch, useSelector } from "react-redux";
import { TEleganteStore } from "../../../components";
import { createApolloClient } from "../../../helper";
import { GET_CART } from "../../queries/cart";
import Cookies from "universal-cookie";

export const useGetCart = () => {
  const { gatewayUrl, restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const dispatch = useDispatch();
  const menu = restaurant?.menu;
  const client = createApolloClient(gatewayUrl ?? "");
  const cookies = new Cookies();

  return async () => {
    const cartCookie = cookies.get("cart");
    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site?.uuid ?? "";
    const id_cart = cartCookie[siteUuid];
    console.log(cartCookie);
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data, errors } = await client.query({
        query: GET_CART,
        variables: { uuid: id_cart },
        fetchPolicy: "network-only",
      });
      if (data || !errors) {
        dispatch({ type: "GET_CART", payload: data.getCart });
        dispatch({ type: "SET_CART_ITEM_COUNT", payload: data.getCart.length });
      }
    } catch (ex) {
      //TODO : LOG THIS SENTRY
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
};
