import { CoreCartItemFields } from "../../../../models";

export type TCartItemCard = {
  cartItem: CoreCartItemFields;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
  action: "increment" | "decrement" | "delete" | "";
  currency: string;
};
