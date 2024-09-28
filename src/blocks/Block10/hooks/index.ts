import { useDispatch, useSelector } from "react-redux";
import { TEleganteStore } from "../../../components";
import { createApolloClient } from "../../../helper";
import { GQL_GET_MENU_ITEM } from "../gql";
import { Dispatch, SetStateAction } from "react";
import { CoreMenuItemFields } from "../../../models";

export const useGetMenuItem = (setLoading: Dispatch<SetStateAction<boolean>>) => {
  const { gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((state) => state);
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? "");

  return async (uuid: string, setSsrMenuItem: Dispatch<SetStateAction<CoreMenuItemFields>>) => {
    try {
      setLoading(true);
      const { data, errors } = await client.query({
        query: GQL_GET_MENU_ITEM,
        variables: { uuid },
        fetchPolicy: "network-only",
      });
      if (errors) {
        return;
      }
      setSsrMenuItem(data?.getMenuItem);
      dispatch({ type: "GET_MENU_ITEMS", payload: [data?.getMenuItem] });
    } catch (ex) {
      //TODO: LOG THIS SENTRY
    } finally {
      setLoading(false);
    }
  };
};
