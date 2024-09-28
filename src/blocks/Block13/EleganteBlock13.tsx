import { FC, useMemo, useState } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import {
  BlockProvider,
  CardSkeleton,
  Container,
  CorePaginatorInfoProps,
  PostCard,
  Section,
  TEleganteStore,
} from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock13Styles } from "./useBlock13Styles";
import { RiMenu3Fill } from "react-icons/ri";
import { Searchbar, BreadCrumbs, CategoryDrawer } from "./components";
import clx from "classnames";
import { useGetBlogPosts, useGetCategoryPosts } from "./gql/hooks";
import { useDispatch, useSelector } from "react-redux";
import { CoreCategoriesFields, CorePostFields } from "../../models";
import { CircularProgress } from "@mui/material";
import block13 from "../../mappings/block13";

const { uuid: BLOCK_UUID } = block13;

export const EleganteBlock13: FC<TBlockConfig> = ({
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
  const classes = useBlock13Styles(mainConfig as CustomThemeProps);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const loadBlogPosts = useGetBlogPosts();
  const loadCategoryPosts = useGetCategoryPosts();
  const [searchValue, setSearchValue] = useState<string>("");
  const { blog, loading, networkOperation } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const key = `blocks.${index}`;
  const dispatch = useDispatch();
  const blog_uuid = useMemo(() => {
    if (!blog?.posts || blog?.posts?.length === 0) return undefined;

    return JSON.parse(JSON.stringify(blog?.posts))[0]?.blog_uuid;
  }, []);
  const categories = [{ name: "all", uuid: "938263-all-372635" }, ...(blog?.categories || [])];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].name);
  const [breadCrumbs, setBreadCrumbs] = useState<string[]>(["Home", "Posts"]);

  const renderCategoryDrawer = () => (
    <CategoryDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {renderBlogCategories()}
    </CategoryDrawer>
  );

  const renderCardSkeleton = () =>
    Array(6)
      .fill(0)
      .map((_, index) => <CardSkeleton key={index} />);

  const renderPosts = () =>
    blog?.posts?.map((post: CorePostFields, index: number) => <PostCard {...post} key={index} mode={mode} />);

  const handleFilterByCategory = async (category: CoreCategoriesFields) => {
    setSearchValue("");
    if (category.name === "all") {
      setBreadCrumbs(["Home", "Menu"]);
      const data = await loadBlogPosts(blog_uuid, 1);

      updateBlogStore(data?.posts as CorePostFields[], data?.paginatorInfo as CorePaginatorInfoProps);
    } else {
      setBreadCrumbs(["Home", "Posts", category.name]);
      const data = await loadCategoryPosts(category?.uuid, 1);
      updateBlogStore(data?.posts, data?.paginatorInfo);
    }
    setActiveCategory(category.name);
  };

  const handleLoadMore = async () => {
    setNetworkOperation("loading.more.blog.posts");
    let posts: CorePostFields[] = blog?.posts || [];
    let paginatorInfo: CorePaginatorInfoProps = blog?.paginatorInfo as CorePaginatorInfoProps;
    if (activeCategory === "all") {
      const data = await loadBlogPosts(blog_uuid, (blog?.paginatorInfo?.currentPage || 0) + 1, searchValue);
      posts = [...posts, ...(data?.posts || [])];
      paginatorInfo = data?.paginatorInfo;
    } else {
      const category_uuid = categories.find((category) => category.name === activeCategory)?.uuid;
      const data = await loadCategoryPosts(category_uuid || "", (blog?.paginatorInfo?.currentPage || 0) + 1);
      posts = [...posts, ...(data?.posts || [])];
      paginatorInfo = data?.paginatorInfo;
    }
    updateBlogStore(posts, paginatorInfo);
    setNetworkOperation("");
  };

  const handleSearch = async (title: string) => {
    setActiveCategory("all");
    if (title.length === 0) return handleFilterByCategory(categories[0]);
    setNetworkOperation("searching");

    const data = await loadBlogPosts(blog_uuid, 1, title);

    updateBlogStore(data?.posts as CorePostFields[], data?.paginatorInfo as CorePaginatorInfoProps);
    setNetworkOperation("");
  };

  const setNetworkOperation = (title: string) => dispatch({ type: "SET_NETWORK_OPERATION", payload: title });

  const Loader = <CircularProgress color={"inherit"} size={16} />;

  const updateBlogStore = (posts: CorePostFields[], paginatorInfo: CorePaginatorInfoProps) => {
    dispatch({ type: "GET_POSTS", payload: posts });
    dispatch({ type: "SET_BLOG_PAGINATION", payload: paginatorInfo });
  };

  const renderBlogCategories = () => (
    <>
      <h6 className={classes.drawerTitle}>Categories</h6>

      {categories.map((category: CoreCategoriesFields, index: number) => (
        <li
          key={index}
          className={clx(classes.menuCategory, activeCategory === category.name && "active")}
          onClick={() => handleFilterByCategory(category)}
        >
          {category.name}
        </li>
      ))}
    </>
  );

  const renderHeader = () => (
    <div>
      <header className={classes.header}>
        <div className={classes.titleContainer}>
          <h4 className={classes.title}>{content?.text?.title}</h4>
          <RiMenu3Fill className={classes.menuBtn} onClick={() => setOpenDrawer(true)} />
          {renderCategoryDrawer()}
        </div>
        <Searchbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={networkOperation === "searching"}
          classes={classes}
          onSearch={handleSearch}
        />
      </header>
      <aside className={classes.subHeader}>
        <p className={classes.itemsCount}>
          Showing: <b>{blog?.posts?.length || 0} Items</b>
        </p>
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
              <BreadCrumbs crumbs={breadCrumbs} />
              {renderBlogCategories()}
            </div>
            <div>
              {renderHeader()}
              <div className={classes.menuItemsContainer}>
                {loading && networkOperation === "" ? renderCardSkeleton() : renderPosts()}
                {networkOperation === "loading.more.blog.posts" && renderCardSkeleton()}
              </div>
              {blog?.paginatorInfo?.currentPage !== blog?.paginatorInfo?.lastPage && (
                <div className={classes.buttonContainer}>
                  <button className={classes.loadMoreBtn} onClick={handleLoadMore}>
                    {networkOperation === "loading.more.blog.posts" ? Loader : "Load more"}
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
