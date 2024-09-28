export type TMenuCategory = {
  id: string;
  uuid: string;
  created_at: string;
  description: string;
  menu_items_count: number;
  position: number;
  status: boolean;
  title: string;
  updated_at: string;
  menu: TMenu;
  menuItems: TMenuItem[];
};

export type TPage = {
  created_at: string;
  description: string;
  id: string;
  metadata: string;
  route: string;
};

export type TMenuItem = {
  calories: string;
  created_at: string;
  description: string;
  id: string;
  image_url: string;
  menuCategory: TMenuCategory;
  name: string;
  options: string[];
  price: number;
  related_menu_items: TMenuItem[];
  slug: string;
  status: number;
  updated_at: string;
  uuid: string;
};

export type TDishOption = {
  amount: number;
  name: string;
};

export type TOptionsConfig = {
  deselection: Partial<TDishOption>[];
  extras: Partial<TDishOption>[];
  selection: Partial<TDishOption>[];
};

export type TMenuOptionsConfig = {
  name: string;
  type: string;
  uuid: string;
  options: Partial<TOptionsConfig>;
};

export type TMenu = {
  activeMenuCategories: Partial<TMenuCategory>[];
  activeMenuItems: Partial<TMenuItem>[];
  created_at: string;
  id: string;
  is_active?: boolean;
  menuCategories: Partial<TMenuCategory[]>;
  menuItems: Partial<TMenuItem>[];
  name: string;
  options_config: Partial<TMenuOptionsConfig>[];
  uuid: string;
  updated_at: string;
};
