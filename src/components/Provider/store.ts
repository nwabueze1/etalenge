import { legacy_createStore as createStore } from "redux";
import { CoreCartFields, CoreCategoriesFields, CoreMenuFields, CorePostFields, CoreSiteFields } from "../../models";
import { dummyBlog } from "./dummyBlog";
// import { dummyRestuarant } from "./dummyRestuarant";
import * as Palettes from "../../palettes";

export type EleganteAction = {
  type: ActionTypes;
  payload: any;
};

export type RestaurantState = {
  menu?: CoreMenuFields;
  cart?: CoreCartFields;
  cartItemCount?: number;
};

export type PageState = {
  uuid: string;
  title: string;
  status: boolean;
  description: string | null;
  metadata: string | null;
  site: CoreSiteFields;
};

export type BlogState = {
  uuid?: string;
  posts?: CorePostFields[];
  paginatorInfo?: CorePaginatorInfoProps;
  categories?: CoreCategoriesFields[];
};

export type CorePaginatorInfoProps = {
  currentPage: number;
  lastPage: number;
};

export type TEleganteStore = {
  gatewayUrl?: string;
  fonts?: { [key: string]: string };
  colors?: {
    [key: string]: {
      [key: string]: string;
    };
  };
  page?: PageState;
  restaurant?: RestaurantState;
  blog?: BlogState;
  loading?: boolean;
  networkOperation?: string;
};

type ActionTypes =
  | "GET_KIAMONI"
  | "GET_MENU_ITEMS"
  | "SET_LOADING"
  | "SET_NETWORK_OPERATION"
  | "DELETE_CART_ITEM"
  | "UPDATE_CART_ITEM"
  | "ADD_CART_ITEM"
  | "SET_CART_ITEM_COUNT"
  | "GET_CART"
  | "GET_MENU"
  | "UPDATE_ORDER"
  | "GET_POSTS"
  | "SET_BLOG_PAGINATION"
  | "GET_BLOG";

export const eleganteReducer = (state: TEleganteStore, action: EleganteAction) => {
  switch (action.type) {
    case "GET_KIAMONI":
      return { ...state, main: action.payload };
    case "GET_MENU_ITEMS":
      return { ...state, restaurant: { menu: { menuItems: action.payload } } };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "DELETE_CART_ITEM":
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          cart: {
            ...state?.restaurant?.cart,
            cartItems: state?.restaurant?.cart?.cartItems?.filter((item) => item?.uuid !== action.payload?.uuid),
          },
        },
      };
    case "SET_NETWORK_OPERATION":
      return { ...state, networkOperation: action.payload };
    case "UPDATE_CART_ITEM":
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          cart: {
            ...state?.restaurant?.cart,
            cartItems: state?.restaurant?.cart?.cartItems?.map((item) =>
              item.uuid === action.payload.uuid ? { ...item, quantity: action.payload.quantity } : item
            ),
          },
        },
      };

    case "SET_CART_ITEM_COUNT":
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          cartItemCount: action.payload,
        },
      };

    case "GET_CART":
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          cart: action.payload,
        },
      };

    case "GET_MENU":
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          menu: action.payload,
        },
      };

    case "UPDATE_ORDER":
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          cart: {
            ...state?.restaurant?.cart,
            order: { ...state?.restaurant?.cart?.order, ...action.payload },
          },
        },
      };

    case "GET_POSTS":
      return {
        ...state,
        blog: {
          ...state.blog,
          posts: action.payload,
        },
      };

    case "SET_BLOG_PAGINATION":
      return {
        ...state,
        blog: {
          ...state.blog,
          paginatorInfo: action.payload,
        },
      };

    case "GET_BLOG":
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
};

export const store = () =>
  createStore(eleganteReducer as any, {
    gatewayUrl: "https://ploutonion.hogfort.com/graphql",
    colors: {
      ...Palettes.palette1.colors,
    },
    restaurant: {
      cartItemCount: 1,
      cart: {
        __typename: "Cart",
        uuid: "d6d43bc6-6ef7-416f-bbcf-3603c59b2a7d",
        currency: "GBP",
        cartItems: [
          {
            __typename: "CartItem",
            uuid: "899c1dc0-ced5-4ad7-8c2d-4cd251b6c097",
            options: "[]",
            quantity: 1,
            detail: "Absolutely incredible Chicken and Chips made with love",
            menuItem: {
              __typename: "MenuItem",
              uuid: "79562225-74c9-4b3e-8fee-14de57be587c",
              name: "Chicken and Chips",
              description: "Absolutely incredible Chicken and Chips made with love",
              menuCategory: {
                __typename: "MenuCategory",
                id: "85",
              },
              options: [],
              image: {
                src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?tr=w-400,cr-0.0.400.268",
                url: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHNlYXJjaHwzfHxDaGlwc3xlbnwwfHx8fDE3MTY0NjM2NjN8MA&ixlib=rb-4.0.3&q=80&w=400",
                width: 400,
                height: 267,
                source: "https://unsplash.com",
                original:
                  "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHNlYXJjaHwzfHxDaGlwc3xlbnwwfHx8fDE3MTY0NjM2NjN8MA&ixlib=rb-4.0.3&q=80&w=400",
                __typename: "ExternalImage",
                screenType: "desktop",
                coordinates: {
                  mobile: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  tablet: {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null,
                  },
                  desktop: {
                    top: 0,
                    left: 0,
                    right: 1,
                    bottom: 0.67,
                  },
                },
                photographer: {
                  url: "https://unsplash.com/@jeffsiepman",
                  name: "Jeff Siepman",
                },
              },
              price: 105,
            },
          },
        ],
        restaurant: {
          __typename: "Restaurant",
          uuid: "e522f2f8-e06c-44a0-b958-c2c9702003a7",
          site: {
            __typename: "Site",
            uuid: "dff6ba2f-99eb-4aa3-a573-affdc4964070",
          },
          bank_info: {
            __typename: "BankInfo",
            currency: "GBP",
            delivery_fee: 10,
          },
        },
        guest: {
          __typename: "Guest",
          uuid: "feca4d87-81df-4648-86a0-92f4b800ea80",
          firstname: "Olaleke",
          lastname: "Fambegbe",
          email: "olamileke.f@gmail.com",
          phone: "+2348075814626",
          address: {
            __typename: "Address",
            uuid: "5d71be2c-c54c-45b1-8852-35e77df76fe1",
            addressline1: "35, Alakija Close, Ologolo, Lekki",
            city: "Lekki",
            state: "Lagos",
            country: "Nigeria",
            postcode: "101010",
          },
        },
      },
    },
    fonts: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
    },
    blog: dummyBlog,
    networkOperation: "",
  });
