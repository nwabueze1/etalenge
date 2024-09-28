import { CoreCartFields, CoreCategoriesFields, CoreMenuFields, CorePostFields, CoreSiteFields } from "../../models";
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
    fonts?: {
        [key: string]: string;
    };
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
type ActionTypes = "GET_KIAMONI" | "GET_MENU_ITEMS" | "SET_LOADING" | "SET_NETWORK_OPERATION" | "DELETE_CART_ITEM" | "UPDATE_CART_ITEM" | "ADD_CART_ITEM" | "SET_CART_ITEM_COUNT" | "GET_CART" | "GET_MENU" | "UPDATE_ORDER" | "GET_POSTS" | "SET_BLOG_PAGINATION" | "GET_BLOG";
export declare const eleganteReducer: (state: TEleganteStore, action: EleganteAction) => TEleganteStore | {
    main: any;
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
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
} | {
    loading: any;
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    restaurant?: RestaurantState;
    blog?: BlogState;
    networkOperation?: string;
} | {
    networkOperation: any;
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    restaurant?: RestaurantState;
    blog?: BlogState;
    loading?: boolean;
} | {
    restaurant: {
        cartItemCount: any;
        menu?: CoreMenuFields;
        cart?: CoreCartFields;
    };
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    blog?: BlogState;
    loading?: boolean;
    networkOperation?: string;
} | {
    restaurant: {
        cart: any;
        menu?: CoreMenuFields;
        cartItemCount?: number;
    };
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    blog?: BlogState;
    loading?: boolean;
    networkOperation?: string;
} | {
    restaurant: {
        menu: any;
        cart?: CoreCartFields;
        cartItemCount?: number;
    };
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    blog?: BlogState;
    loading?: boolean;
    networkOperation?: string;
} | {
    blog: any;
    gatewayUrl?: string;
    fonts?: {
        [key: string]: string;
    };
    colors?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    page?: PageState;
    restaurant?: RestaurantState;
    loading?: boolean;
    networkOperation?: string;
};
export declare const store: () => import("redux").Store<{
    gatewayUrl: string;
    colors: {
        primary: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
        };
        neutral: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
        };
        secondary: {
            main: string;
            100: string;
            200: string;
            300: string;
            400: string;
        };
        alert: {
            positive: string;
            general: string;
            error: string;
        };
    };
    restaurant: {
        cartItemCount: number;
        cart: {
            __typename: string;
            uuid: string;
            currency: string;
            cartItems: {
                __typename: string;
                uuid: string;
                options: string;
                quantity: number;
                detail: string;
                menuItem: {
                    __typename: string;
                    uuid: string;
                    name: string;
                    description: string;
                    menuCategory: {
                        __typename: string;
                        id: string;
                    };
                    options: never[];
                    image: {
                        src: string;
                        url: string;
                        width: number;
                        height: number;
                        source: string;
                        original: string;
                        __typename: string;
                        screenType: string;
                        coordinates: {
                            mobile: {
                                top: null;
                                left: null;
                                right: null;
                                bottom: null;
                            };
                            tablet: {
                                top: null;
                                left: null;
                                right: null;
                                bottom: null;
                            };
                            desktop: {
                                top: number;
                                left: number;
                                right: number;
                                bottom: number;
                            };
                        };
                        photographer: {
                            url: string;
                            name: string;
                        };
                    };
                    price: number;
                };
            }[];
            restaurant: {
                __typename: string;
                uuid: string;
                site: {
                    __typename: string;
                    uuid: string;
                };
                bank_info: {
                    __typename: string;
                    currency: string;
                    delivery_fee: number;
                };
            };
            guest: {
                __typename: string;
                uuid: string;
                firstname: string;
                lastname: string;
                email: string;
                phone: string;
                address: {
                    __typename: string;
                    uuid: string;
                    addressline1: string;
                    city: string;
                    state: string;
                    country: string;
                    postcode: string;
                };
            };
        };
    };
    fonts: {
        heading: string;
        body: string;
    };
    blog: {
        categories: {
            name: string;
            uuid: string;
        }[];
        postsPaginatorInfo: null;
        uuid: string;
        posts: {
            title: string;
            slug: string;
            featured_image: string;
            excerpt: string;
            created_at: string;
            published_at: string;
            categories: {
                name: string;
                uuid: string;
                __typename: string;
            }[];
            __typename: string;
        }[];
    };
    networkOperation: string;
}, import("redux").Action<any>>;
export {};
