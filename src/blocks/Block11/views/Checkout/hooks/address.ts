import { useSelector, useDispatch } from "react-redux";
import { CREATE_ADDRESS } from "../graphql";
import { TCreateAddressVariables } from "../types";
import { createApolloClient, notify } from "../../../../../helper";
import { TEleganteStore } from "../../../../../components";
import { CoreGuestFields } from "../../../../../models";

export const useCreateAddress = () => {
  const { gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((state) => state);
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? "");

  return async (variables: TCreateAddressVariables, guest: CoreGuestFields, onSuccess?: () => void) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ADDRESS,
        variables: { ...variables, guest_uuid: guest.uuid },
      });

      if (!data || errors) throw new Error("We could not complete that operation");

      const address = data.createAddress;

      dispatch({ type: "UPDATE_GUEST", payload: { ...guest, address } });
      notify("success", "Delivery option set as dispatch");
      onSuccess?.();
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_NETWORK_OPERATION", payload: "" });
  };
};
