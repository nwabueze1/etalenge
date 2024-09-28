import { useSelector } from "react-redux";
import { CoreMenuItemFields, CorePostFields } from "../../../models";
import { SEARCH_MENU_ITEMS, SEARCH_POSTS } from "../data";
import { createApolloClient } from "../../../helper";
import { TEleganteStore } from "../../../components";

const extractCurrencyToMenuItems = (data: CoreMenuItemFields[]) => {
  return data.map((item) => {
    return {
      uuid: item.uuid,
      name: item.name,
      image: typeof item.image === "object" ? item.image : JSON.parse(item.image),
      menu: item.menu,
      price: item.price,
      slug: item.slug,
    };
  });
};
export const useSearchMenuItems = () => {
  const { gatewayUrl, restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const client = createApolloClient(gatewayUrl ?? "");

  return async (search: string, page: number) => {
    const menu_uuid = restaurant?.menu?.uuid as string;
    try {
      const { data, errors } = await client.query({
        query: SEARCH_MENU_ITEMS,
        variables: { menu_uuid, search, page },
      });

      if (!data || errors) {
        return undefined;
      }

      return {
        menuItems: extractCurrencyToMenuItems(data?.getMenuItems?.data),
        paginatorInfo: data?.getMenuItems?.paginatorInfo,
      };
    } catch (error) {
      //TODO: log this sentry
      return undefined;
    }
  };
};

export const useSearchPosts = () => {
  const { gatewayUrl, blog } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const client = createApolloClient(gatewayUrl ?? "");

  return async (search: string, page: number) => {
    const blog_uuid = blog?.uuid as string;
    try {
      const { data, errors } = await client.query({
        query: SEARCH_POSTS,
        variables: { blog_uuid, search, page },
      });
      if (!data?.getPostsByBlogUuid || errors) {
        return undefined;
      }

      return {
        posts: data?.getPostsByBlogUuid?.data?.map(
          (
            post: Omit<CorePostFields, "featured_image"> & {
              featured_image: string;
            }
          ) => ({
            ...post,
            featured_image: JSON.parse(post?.featured_image ?? "{}"),
          })
        ),
        paginatorInfo: data?.getPostsByBlogUuid?.paginatorInfo,
      };
    } catch (error) {
      //TODO: log this sentry
      return undefined;
    }
  };
};
