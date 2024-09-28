import { FC } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { BlockProvider, Button, CardSkeleton, Container, MenuItemCard, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock9Styles } from "./useBlock9Styles";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Searchbar, BreadCrumbs, CategoryDrawer } from "./components";
import clx from "classnames";
import Slider from "@mui/material/Slider";
import { CircularProgress } from "@mui/material";
import { useBlock9 } from "./useBlock9";
import block9 from "../../mappings/block9";

const { uuid: BLOCK_UUID } = block9;

export const EleganteBlock9: FC<TBlockConfig> = ({
  activeElement,
  content,
  index,
  handleSelect,
  configuration,
  mode = "view",
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock9Styles(mainConfig as CustomThemeProps);
  const key = `blocks.${index}`;
  const {
    handleSearch,
    loadingState,
    handleLoadMore,
    handleFilterByCategory,
    handleFilterByPrice,
    maxFilter,
    minFilter,
    marks,
    handleChange,
    activeCategory,
    menuCategories,
    menuItems,
    paginationInfo,
    filterRange,
    openDrawer,
    handleToggleDrawer,
    setOpenDrawer,
    sortOptions,
    handleSort,
    sort,
    openSortModal,
    toggleOpenSortModal,
  } = useBlock9({ content });

  const renderMenuItems = () =>
    menuItems?.map((menu_item, index) => (
      <MenuItemCard
        mode={mode}
        currency={menu_item?.menu?.restaurant?.bank_info?.currency ?? ""}
        key={index}
        menuItem={menu_item}
        isSsr
      />
    ));

  const renderCategoryDrawer = () => (
    <CategoryDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {renderCategoryAndFilter()}
    </CategoryDrawer>
  );

  const renderSortOptions = () =>
    sortOptions?.map((option, index) => (
      <li key={index} className={classes.sortOption} onClick={() => handleSort(option)}>
        {option}
      </li>
    ));

  const renderCardSkeleton = () =>
    Array(6)
      .fill(0)
      .map((_, index) => <CardSkeleton key={index} />);

  const progress = <CircularProgress size={15} />;

  //@ts-ignore
  const renderFilterSlider = () => (
    <div className={classes.filterContainer}>
      <h6 className={classes.drawerTitle}>Filter by Price</h6>
      <Slider
        value={filterRange}
        onChange={handleChange}
        max={maxFilter}
        min={minFilter}
        valueLabelDisplay={"auto"}
        sx={{
          "& .MuiSlider-track": {
            backgroundColor: mainConfig?.colors?.[100], // replace with your chosen color
          },
        }}
        className={classes.rangerSelector}
        marks={marks}
      />
      <Button
        className={clx(classes.filterBtn, classes.button)}
        onClick={handleFilterByPrice}
        size={"md"}
        variant={"contained"}
      >
        {loadingState.filtering ? progress : "Filter"}
      </Button>
    </div>
  );

  const renderCategoryAndFilter = () => (
    <>
      <h6 className={classes.drawerTitle}>Categories</h6>
      {renderMenuCategories()}
      {/* filter slider should be rendered here*/}
    </>
  );

  const renderMenuCategories = () =>
    menuCategories?.map((category, index) => (
      <li
        className={clx(classes.menuCategory, activeCategory === category.title && "active")}
        key={index}
        onClick={() => handleFilterByCategory(category)}
      >
        {category?.title}
      </li>
    ));

  const renderHeader = () => (
    <div>
      <header className={classes.header}>
        <div className={classes.titleContainer}>
          <h4 className={classes.title}>{content?.text?.title}</h4>
          <RiMenu3Fill className={classes.menuBtn} onClick={handleToggleDrawer} />
          {renderCategoryDrawer()}
        </div>
        <Searchbar loading={loadingState.search} classes={classes} onSearch={handleSearch} />
      </header>
      <aside className={classes.subHeader}>
        <p className={classes.itemsCount}>
          Showing: <b>{menuItems?.length} Items</b>
        </p>
        {menuItems?.length > 1 && (
          <div className={classes.sortContainer}>
            <span>Sort by:</span>
            <div className={classes.sortBox} onClick={toggleOpenSortModal}>
              <span className={classes.sortText}>{sort ?? "Relevance"}</span>
              <FaChevronDown className={clx(classes.sortChevron, openSortModal && "active")} />
            </div>
            <div className={clx(classes.sortOptionsModal, openSortModal && "active")}>{renderSortOptions()}</div>
          </div>
        )}
      </aside>
    </div>
  );

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig} block_uuid={BLOCK_UUID}>
      <Section
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
        background={backgroundConfig?.colors?.[100]}
      >
        <Container>
          <div className={classes.block}>
            <div className={classes.menuCategoryContainerWeb}>
              <BreadCrumbs crumbs={["Home", content?.text?.overline]} />
              {renderCategoryAndFilter()}
            </div>
            <div>
              {renderHeader()}
              <div className={classes.menuItemsContainer}>
                {loadingState.search || loadingState.filtering ? (
                  renderCardSkeleton()
                ) : (
                  <>
                    {renderMenuItems()}
                    {loadingState?.pagination && renderCardSkeleton()}
                  </>
                )}
              </div>
              {paginationInfo && paginationInfo?.currentPage !== paginationInfo?.lastPage && (
                <div className={classes.buttonContainer}>
                  <button className={classes.loadMoreBtn} onClick={handleLoadMore} disabled={loadingState.pagination}>
                    {loadingState.pagination ? progress : "Load more"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </BlockProvider>
  );
};
