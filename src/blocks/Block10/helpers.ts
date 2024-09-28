import { CoreMenuItemFields } from "../../models";

export type MenuConfigType = {
  name: string;
  uuid: string;
  options: { name: string; amount: number }[];
  selectedChoices: { name: string; amount: number }[];
  type: "selection" | "deselection" | "extras";
};

export const extractMenuItemOptions = (menu_item: CoreMenuItemFields) => {
  const options = menu_item?.options || [];

  const option_configs = menu_item.menu?.options_config?.filter((option) => options.includes(option.uuid));
  const initialState: MenuConfigType[] = [];

  option_configs?.forEach((option_config) => {
    initialState.push({
      name: option_config.name,
      uuid: option_config.uuid,
      selectedChoices: [],
      // @ts-ignore
      options: option_config.options[option_config.type as string] || {},
      type: option_config.type as "selection" | "deselection" | "extras",
    });
  });

  return {
    initialState,
  };
};

export const calculateSumOfOption = (options: MenuConfigType[]) => {
  return options?.reduce(
    (a, option) =>
      a + option.selectedChoices.reduce((a, b) => a + (option.type === "deselection" ? -b.amount : b.amount), 0),
    0
  );
};
