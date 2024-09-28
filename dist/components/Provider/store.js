var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { legacy_createStore as createStore } from "redux";
import { dummyBlog } from "./dummyBlog";
// import { dummyRestuarant } from "./dummyRestuarant";
import * as Palettes from "../../palettes";
export var eleganteReducer = function (state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    switch (action.type) {
        case "GET_KIAMONI":
            return __assign(__assign({}, state), { main: action.payload });
        case "GET_MENU_ITEMS":
            return __assign(__assign({}, state), { restaurant: { menu: { menuItems: action.payload } } });
        case "SET_LOADING":
            return __assign(__assign({}, state), { loading: action.payload });
        case "DELETE_CART_ITEM":
            return __assign(__assign({}, state), { restaurant: __assign(__assign({}, state.restaurant), { cart: __assign(__assign({}, (_a = state === null || state === void 0 ? void 0 : state.restaurant) === null || _a === void 0 ? void 0 : _a.cart), { cartItems: (_d = (_c = (_b = state === null || state === void 0 ? void 0 : state.restaurant) === null || _b === void 0 ? void 0 : _b.cart) === null || _c === void 0 ? void 0 : _c.cartItems) === null || _d === void 0 ? void 0 : _d.filter(function (item) { var _a; return (item === null || item === void 0 ? void 0 : item.uuid) !== ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.uuid); }) }) }) });
        case "SET_NETWORK_OPERATION":
            return __assign(__assign({}, state), { networkOperation: action.payload });
        case "UPDATE_CART_ITEM":
            return __assign(__assign({}, state), { restaurant: __assign(__assign({}, state.restaurant), { cart: __assign(__assign({}, (_e = state === null || state === void 0 ? void 0 : state.restaurant) === null || _e === void 0 ? void 0 : _e.cart), { cartItems: (_h = (_g = (_f = state === null || state === void 0 ? void 0 : state.restaurant) === null || _f === void 0 ? void 0 : _f.cart) === null || _g === void 0 ? void 0 : _g.cartItems) === null || _h === void 0 ? void 0 : _h.map(function (item) {
                            return item.uuid === action.payload.uuid ? __assign(__assign({}, item), { quantity: action.payload.quantity }) : item;
                        }) }) }) });
        case "SET_CART_ITEM_COUNT":
            return __assign(__assign({}, state), { restaurant: __assign(__assign({}, state === null || state === void 0 ? void 0 : state.restaurant), { cartItemCount: action.payload }) });
        case "GET_CART":
            return __assign(__assign({}, state), { restaurant: __assign(__assign({}, state === null || state === void 0 ? void 0 : state.restaurant), { cart: action.payload }) });
        case "GET_MENU":
            return __assign(__assign({}, state), { restaurant: __assign(__assign({}, state === null || state === void 0 ? void 0 : state.restaurant), { menu: action.payload }) });
        case "UPDATE_ORDER":
            return __assign(__assign({}, state), { restaurant: __assign(__assign({}, state === null || state === void 0 ? void 0 : state.restaurant), { cart: __assign(__assign({}, (_j = state === null || state === void 0 ? void 0 : state.restaurant) === null || _j === void 0 ? void 0 : _j.cart), { order: __assign(__assign({}, (_l = (_k = state === null || state === void 0 ? void 0 : state.restaurant) === null || _k === void 0 ? void 0 : _k.cart) === null || _l === void 0 ? void 0 : _l.order), action.payload) }) }) });
        case "GET_POSTS":
            return __assign(__assign({}, state), { blog: __assign(__assign({}, state.blog), { posts: action.payload }) });
        case "SET_BLOG_PAGINATION":
            return __assign(__assign({}, state), { blog: __assign(__assign({}, state.blog), { paginatorInfo: action.payload }) });
        case "GET_BLOG":
            return __assign(__assign({}, state), { blog: action.payload });
        default:
            return state;
    }
};
export var store = function () {
    return createStore(eleganteReducer, {
        gatewayUrl: "https://ploutonion.hogfort.com/graphql",
        colors: __assign({}, Palettes.palette1.colors),
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
                                original: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQ4ODJ8MHwxfHNlYXJjaHwzfHxDaGlwc3xlbnwwfHx8fDE3MTY0NjM2NjN8MA&ixlib=rb-4.0.3&q=80&w=400",
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
};
