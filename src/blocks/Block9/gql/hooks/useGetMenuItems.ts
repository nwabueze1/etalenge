import { createApolloClient, notify } from "../../../../helper";
import { useSelector } from "react-redux";
import { CorePaginatorInfoProps, TEleganteStore } from "../../../../components";
import { GET_MENU_ITEMS } from "../index";
import { CoreMenuItemFields } from "../../../../models";

export type TGetMenuItemsVariables = {
  page?: number;
  first?: number;
  search?: string;
  filter?: {
    column: string;
    value: string;
    operator: string;
  }[];
  onDataReceived?: (data: TResponse) => void;
};

export type TResponse = {
  items: CoreMenuItemFields[];
  paginatorInfo: CorePaginatorInfoProps;
};

export const useGetMenuItems = (menu_uuid: string) => {
  const { gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((state) => state);
  const client = createApolloClient(gatewayUrl ?? "");

  return async ({ onDataReceived, ...variables }: TGetMenuItemsVariables): Promise<TResponse | void> => {
    try {
      const { error, data } = await client.query({
        query: GET_MENU_ITEMS,
        variables: { ...variables, menu_uuid },
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      });

      if (error || !data) notify("error", "failed to get menu items");
      else
        onDataReceived?.({
          items: data.getMenuItems.data,
          paginatorInfo: data?.getMenuItems.paginatorInfo,
        });
    } catch (e) {
      notify("error", "Failed to get menu items");
    }
  };
};
