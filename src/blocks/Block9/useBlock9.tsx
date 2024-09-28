import { TBlockConfig } from "../../type";
import { useState } from "react";
import { CoreMenuFields, CoreMenuFields_menuCategories, CoreMenuItemFields } from "../../models";
import { CorePaginatorInfoProps } from "../../components";
import { TGetMenuItemsVariables, TResponse, useGetMenuItems } from "./gql/hooks/useGetMenuItems";
import { getCurrency } from "../../helper";

type SortParams = "Price (High to Low)" | "Price (Low to High)" | "Name (A to Z)" | "Name (Z to A)";
export const useBlock9 = ({ content }: TBlockConfig) => {
  const initialCategory: CoreMenuFields_menuCategories = {
    title: "All products",
    id: "all-categories-0",
  };
  const firstMenuCategory = "All products";
  const [activeCategory, setActiveCategory] = useState<string>(firstMenuCategory);
  const menu: CoreMenuFields = content?.menu;
  const menuCategories: CoreMenuFields_menuCategories[] = [
    { title: firstMenuCategory, id: "all-categories-0" },
    ...(content?.menu as CoreMenuFields).menuCategories,
  ];
  const [filterRange, setFilterRange] = useState<number[]>([4, 400]);
  const [menuItemModalData, setMenuItemModalData] = useState<{ menuItem: CoreMenuItemFields | null; open: boolean }>({
    open: false,
    menuItem: null,
  });
  const [filteredData, setFilteredData] = useState<CoreMenuItemFields[]>([]);
  const [breadCrumbs, setBreadCrumbs] = useState<string[]>(["Home", content?.text?.overline]);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [paginationInfo, setPaginationInfo] = useState<CorePaginatorInfoProps>(
    menu?.paginatorInfo ?? { currentPage: 0, lastPage: 0 }
  );
  const loadMenuItems = useGetMenuItems(menu?.uuid);
  const [loadingState, setLoadingState] = useState<Record<"pagination" | "search" | "filtering", boolean>>({
    pagination: false,
    search: false,
    filtering: false,
  });
  const [sort, setSort] = useState<SortParams | null>(null);
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);
  const sortOptions: SortParams[] = ["Price (High to Low)", "Price (Low to High)", "Name (A to Z)", "Name (Z to A)"];

  const handleOpenSortModal = () => setOpenSortModal(true);
  const handleCloseSortModal = () => setOpenSortModal(false);
  const currency = getCurrency(menu?.restaurant?.bank_info?.currency ?? "");
  const minFilter = 0;
  const maxFilter = 2000;
  const midFilter = Math.abs(maxFilter / 2);

  const marks = [
    {
      value: minFilter,
      label: `${currency} ${minFilter}`,
    },
    {
      value: midFilter,
      label: `${currency} ${midFilter}`,
    },
    {
      value: maxFilter,
      label: `${currency} ${maxFilter}`,
    },
  ];

  const handleOpenMenuItemModal = (menu_item: CoreMenuItemFields) =>
    setMenuItemModalData({ open: true, menuItem: menu_item });

  const handleCloseMenuItemModal = () => setMenuItemModalData({ open: false, menuItem: null });

  const handleToggleDrawer = () => setOpenDrawer(!openDrawer);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setFilterRange(newValue as number[]);
  };

  const handleSort = (value: SortParams) => {
    setSort(value);
    let sortedMenuItems: CoreMenuItemFields[] = [];
    const data = filteredData.length > 0 ? filteredData : menu?.menuItems;
    switch (value) {
      case "Name (A to Z)":
        sortedMenuItems = data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name (Z to A)":
        sortedMenuItems = data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price (High to Low)":
        sortedMenuItems = data.sort((a, b) => b.price - a.price);
        break;
      case "Price (Low to High)":
        sortedMenuItems = data.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setFilteredData(sortedMenuItems);
  };

  const handleFilterByCategory = async (category: CoreMenuFields_menuCategories) => {
    if (category.title === menuCategories[0].title) {
      //all products selected
      //reset pagination
      setPaginationInfo({ currentPage: 0, lastPage: 1 });
      setBreadCrumbs(breadCrumbs.filter((_, index) => index !== 2));
      setActiveCategory(initialCategory.title);
      setFilteredData([]);
    } else {
      setActiveCategory(category.title);
      setBreadCrumbs(["Home", "Menu", category.title]);
      const filteredMenuItems = menu?.menuItems?.filter((menu_item) => menu_item.menuCategory?.uuid === category.uuid);
      setFilteredData(filteredMenuItems);
      //reset pagination
      setPaginationInfo({ currentPage: 0, lastPage: 1 });
    }
  };

  const filter = [
    {
      column: "price",
      value: String(filterRange[0]),
      operator: ">=",
    },
    {
      column: "price",
      value: String(filterRange[1]),
      operator: "<=",
    },
  ];

  const handleFilterByPrice = async () => {
    setLoadingState({ ...loadingState, filtering: true });
    await loadMenuItems({
      filter,
      page: 1,
      first: 50,
      onDataReceived: handleDataReceived,
    });
    setLoadingState({ ...loadingState, filtering: false });
  };

  const handleDataReceived = (data: TResponse) => {
    setFilteredData(data.items);
    setPaginationInfo(data.paginatorInfo);
    setOpenDrawer(false);
  };

  const handleSearch = async (value: string) => {
    const args: TGetMenuItemsVariables = {
      page: 1,
      first: 50,
      search: value,
      onDataReceived: handleDataReceived,
    };
    setLoadingState({ ...loadingState, search: true });
    await loadMenuItems(args);
    setLoadingState({ ...loadingState, search: false });
  };

  const handleLoadMore = async () => {
    setLoadingState({ ...loadingState, pagination: true });

    const args: TGetMenuItemsVariables = {
      page: paginationInfo?.currentPage + 1,
      first: 20,
      onDataReceived: (data) => {
        const lastItemIndex = data.items.length - 1;
        const firstMenuItem = menu?.menuItems[lastItemIndex];
        if (data.items[lastItemIndex].uuid !== firstMenuItem?.uuid) {
          //check if the last item is the same as the last item in the menuItems which means we reached the end
          const items = filteredData.length > 0 ? filteredData : menu?.menuItems;

          const spreadData = !paginationInfo || paginationInfo.currentPage === 0 ? [] : items;
          setFilteredData([...spreadData, ...data.items]);
        }
        setPaginationInfo({
          ...data?.paginatorInfo,
        });
      },
    };

    await loadMenuItems(args);
    setLoadingState({ ...loadingState, pagination: false });
  };

  return {
    firstMenuCategory,
    activeCategory,
    menu,
    menuCategories,
    menuItems: filteredData.length > 0 ? filteredData : menu?.menuItems,
    filterRange,
    menuItemModalData,
    breadCrumbs,
    openDrawer,
    paginationInfo,
    loadMenuItems,
    loadingState,
    marks,
    minFilter,
    maxFilter,
    handleCloseMenuItemModal,
    handleOpenMenuItemModal,
    handleToggleDrawer,
    handleChange,
    handleFilterByCategory,
    handleFilterByPrice,
    handleDataReceived,
    handleSearch,
    handleLoadMore,
    setOpenDrawer,
    handleSort,
    sort,
    sortOptions,
    openSortModal,
    handleOpenSortModal,
    handleCloseSortModal,
    toggleOpenSortModal: () => setOpenSortModal(!openSortModal),
  };
};
