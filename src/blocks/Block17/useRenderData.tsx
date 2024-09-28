import { CoreMenuItemFields, CorePostFields } from "../../models";
import { MenuItemCard, PostCard } from "../../components";
import { ClassNameMap } from "@mui/material";
import { CardSkeleton } from "./CardSkeleton";

export const useRenderData = (mode: "view" | "edit" = "view", classes: ClassNameMap<string>) => {
  const renderMenuItems = (menuItems: CoreMenuItemFields[]) =>
    menuItems?.map((menuItem, index) => (
      <MenuItemCard
        menuItem={menuItem}
        currency={menuItem?.menu?.restaurant?.bank_info?.currency ?? ""}
        mode={mode}
        key={index}
        isSsr={true}
      />
    ));

  const renderPosts = (posts: CorePostFields[]) =>
    posts?.map((post, index) => <PostCard background={"#fff"} {...post} key={index} mode={mode} />);

  const renderImageSkeleton = () => (
    <div className={classes.cardContainer}>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );

  return {
    renderMenuItems,
    renderPosts,
    renderImageSkeleton,
  };
};
