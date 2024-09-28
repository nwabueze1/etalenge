import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { TEleganteStore } from "../components";
import { CoreMenuFields } from "../models";

export const useUpdateCartCount = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((state) => state);
  const menu = restaurant?.menu as CoreMenuFields;
  return () => {
    const cartItemCountCookie = cookies.get("cartItemCount");

    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site?.uuid ?? "";
    const updatedCount = (cartItemCountCookie[siteUuid] ?? 0) + 1;
    cartItemCountCookie[siteUuid] = updatedCount;
    dispatch({ type: "SET_CART_ITEM_COUNT", payload: updatedCount });
    cookies.set("cartItemCount", cartItemCountCookie, {
      path: "/",
      expires: new Date(Date.now() + 86400000),
    });
  };
};
