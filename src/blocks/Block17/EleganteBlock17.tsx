import { FC, FormEvent, useEffect, useState } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { BackButton, BlockProvider, Button, Container, Section, TEleganteStore } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock17Styles } from "./useBlock17Styles";
import { useRenderData } from "./useRenderData";
import { useDispatch, useSelector } from "react-redux";
import { useSearchMenuItems, useSearchPosts } from "./hooks";
import { MdSearch } from "react-icons/md";
import block17 from "../../mappings/block17";

const { uuid: BLOCK_UUID } = block17;

export type TagType = "all" | "dishes" | "blog";

export const EleganteBlock17: FC<TBlockConfig> = ({ mode, index, activeElement, configuration, handleSelect }) => {
  const { restaurant, blog, loading, networkOperation } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  // This is the state param used to track the search param as the user is typing
  const [searchField, setSearchField] = useState("");
  // This is the displayed search parameter used once the user has selected search
  const [searchValue, setSearchValue] = useState("");
  const key = `blocks.${index}`;
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useBlock17Styles(mainConfig as CustomThemeProps);
  const searchPosts = useSearchPosts();
  const searchMenuItems = useSearchMenuItems();
  const [operation, setOperation] = useState<"search_menu_items" | "search_posts" | "">("");
  const { renderMenuItems, renderImageSkeleton, renderPosts } = useRenderData(mode, classes);

  const dispatch = useDispatch();
  const menuItems = restaurant?.menu?.menuItems ?? [];
  const storePosts = blog?.posts ?? [];
  const menuPaginatorInfo = restaurant?.menu?.paginatorInfo || { currentPage: 1, lastPage: 1 };
  const postsPaginatorInfo = blog?.paginatorInfo || { currentPage: 1, lastPage: 1 };
  const setNetworkOperation = (arg: string) => {
    dispatch({ type: "SET_NETWORK_OPERATION", payload: arg });
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchField.length === 0 || loading) return;

    setSearchValue(searchField);

    setNetworkOperation("loading.search");
    try {
      const posts = await searchPosts(searchField, postsPaginatorInfo.currentPage);
      if (posts) {
        dispatch({
          type: "GET_POSTS",
          payload: [...posts.posts],
        });
        dispatch({
          type: "SET_BLOG_PAGINATION",
          payload: posts.paginatorInfo,
        });
      }
      const menus = await searchMenuItems(searchField, menuPaginatorInfo.currentPage);
      if (menus) {
        dispatch({
          type: "GET_MENU_ITEMS",
          payload: [...menus.menuItems],
        });
        dispatch({
          type: "SET_MENU_PAGINATION",
          payload: menus.paginatorInfo,
        });
      }
    } catch (ex) {
      //TODO: LOG THIS SENTRY
    } finally {
      setNetworkOperation("");
    }
  };

  const handleLoadMore = async (tag: TagType) => {
    setOperation(tag === "dishes" ? "search_menu_items" : "search_posts");

    try {
      switch (tag) {
        case "dishes":
          const menu = await searchMenuItems(searchValue, menuPaginatorInfo.currentPage + 1);
          if (menu) {
            dispatch({
              type: "GET_MENU_ITEMS",
              payload: [...menuItems, ...menu.menuItems],
            });
            dispatch({
              type: "SET_MENU_PAGINATION",
              payload: menu.paginatorInfo,
            });
          }
          break;
        case "blog":
          const posts = await searchPosts(searchValue, postsPaginatorInfo.currentPage + 1);
          if (posts) {
            dispatch({
              type: "GET_POSTS",
              payload: [...storePosts, ...posts.posts],
            });
            dispatch({
              type: "SET_BLOG_PAGINATION",
              payload: posts.paginatorInfo,
            });
          }
          break;
        default:
          break;
      }
    } catch (ex) {
      //
    } finally {
      setOperation("");
    }
  };

  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query") ?? "";
    setSearchField(query);
    setSearchValue(query);
  }, []);

  const renderLoadMoreBtn = (tag: TagType, showLoadMoreBtn: boolean) => (
    <div className={classes.loadMoreBtnParent}>
      <p className={classes.paginationText}>
        showing page {tag === "dishes" ? menuPaginatorInfo.currentPage : postsPaginatorInfo.currentPage} of{" "}
        {tag === "dishes" ? menuPaginatorInfo.lastPage : postsPaginatorInfo.lastPage}
      </p>
      {showLoadMoreBtn && (
        <button className={classes.loadMoreBtn} onClick={() => handleLoadMore(tag)} disabled={loading}>
          Load more
        </button>
      )}
    </div>
  );

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig} block_uuid={BLOCK_UUID}>
      <Section
        background={mainConfig?.colors?.[500]}
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
      >
        <Container>
          <BackButton onClick={handleGoBack} />
          <form onSubmit={handleSearch} className={classes.searchContainer}>
            <input
              className={classes.searchInput}
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              type={"Type something.."}
              autoFocus
            />
            <Button size={"md"} variant={"contained"} type={"submit"}>
              Search <MdSearch />
            </Button>
          </form>
          {networkOperation === "loading.search" ? (
            renderImageSkeleton()
          ) : (
            <>
              <div>
                <header className={classes.header}>
                  <h3 className={classes.heading}>From our menu</h3>
                  <p className={classes.description}>Results for: &quot;{searchValue}&quot;</p>
                </header>
                <div>
                  <div className={classes.cardContainer}>{renderMenuItems(menuItems)}</div>
                  {operation === "search_menu_items" && renderImageSkeleton()}
                  {renderLoadMoreBtn(
                    "dishes",
                    menuPaginatorInfo?.currentPage !== menuPaginatorInfo?.lastPage && menuItems?.length > 0
                  )}
                </div>
              </div>
              <div className={classes.block}>
                <header className={classes.header}>
                  <h3 className={classes.heading}>From our blog</h3>
                  <p className={classes.description}>Results for: &quot;{searchValue}&quot;</p>
                </header>
                <div className={classes.cardContainer}>{renderPosts(storePosts)}</div>
                {operation === "search_posts" && renderImageSkeleton()}
                {renderLoadMoreBtn(
                  "blog",
                  postsPaginatorInfo?.currentPage !== postsPaginatorInfo?.lastPage && storePosts.length > 0
                )}
              </div>
            </>
          )}
        </Container>
      </Section>
    </BlockProvider>
  );
};
