var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { BackButton, BlockProvider, Button, Container, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock17Styles } from "./useBlock17Styles";
import { useRenderData } from "./useRenderData";
import { useDispatch, useSelector } from "react-redux";
import { useSearchMenuItems, useSearchPosts } from "./hooks";
import { MdSearch } from "react-icons/md";
import block17 from "../../mappings/block17";
var BLOCK_UUID = block17.uuid;
export var EleganteBlock17 = function (_a) {
    var _b, _c, _d, _e, _f;
    var mode = _a.mode, index = _a.index, activeElement = _a.activeElement, configuration = _a.configuration, handleSelect = _a.handleSelect;
    var _g = useSelector(function (store) { return store; }), restaurant = _g.restaurant, blog = _g.blog, loading = _g.loading, networkOperation = _g.networkOperation;
    // This is the state param used to track the search param as the user is typing
    var _h = __read(useState(""), 2), searchField = _h[0], setSearchField = _h[1];
    // This is the displayed search parameter used once the user has selected search
    var _j = __read(useState(""), 2), searchValue = _j[0], setSearchValue = _j[1];
    var key = "blocks.".concat(index);
    var buttonConfig = useGetColor(configuration, "button");
    var mainConfig = useGetColor(configuration, "main");
    var classes = useBlock17Styles(mainConfig);
    var searchPosts = useSearchPosts();
    var searchMenuItems = useSearchMenuItems();
    var _k = __read(useState(""), 2), operation = _k[0], setOperation = _k[1];
    var _l = useRenderData(mode, classes), renderMenuItems = _l.renderMenuItems, renderImageSkeleton = _l.renderImageSkeleton, renderPosts = _l.renderPosts;
    var dispatch = useDispatch();
    var menuItems = (_c = (_b = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu) === null || _b === void 0 ? void 0 : _b.menuItems) !== null && _c !== void 0 ? _c : [];
    var storePosts = (_d = blog === null || blog === void 0 ? void 0 : blog.posts) !== null && _d !== void 0 ? _d : [];
    var menuPaginatorInfo = ((_e = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu) === null || _e === void 0 ? void 0 : _e.paginatorInfo) || { currentPage: 1, lastPage: 1 };
    var postsPaginatorInfo = (blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) || { currentPage: 1, lastPage: 1 };
    var setNetworkOperation = function (arg) {
        dispatch({ type: "SET_NETWORK_OPERATION", payload: arg });
    };
    var handleSearch = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var posts, menus, ex_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (searchField.length === 0 || loading)
                        return [2 /*return*/];
                    setSearchValue(searchField);
                    setNetworkOperation("loading.search");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, searchPosts(searchField, postsPaginatorInfo.currentPage)];
                case 2:
                    posts = _a.sent();
                    if (posts) {
                        dispatch({
                            type: "GET_POSTS",
                            payload: __spreadArray([], __read(posts.posts), false),
                        });
                        dispatch({
                            type: "SET_BLOG_PAGINATION",
                            payload: posts.paginatorInfo,
                        });
                    }
                    return [4 /*yield*/, searchMenuItems(searchField, menuPaginatorInfo.currentPage)];
                case 3:
                    menus = _a.sent();
                    if (menus) {
                        dispatch({
                            type: "GET_MENU_ITEMS",
                            payload: __spreadArray([], __read(menus.menuItems), false),
                        });
                        dispatch({
                            type: "SET_MENU_PAGINATION",
                            payload: menus.paginatorInfo,
                        });
                    }
                    return [3 /*break*/, 6];
                case 4:
                    ex_1 = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    setNetworkOperation("");
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleLoadMore = function (tag) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, menu, posts, ex_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setOperation(tag === "dishes" ? "search_menu_items" : "search_posts");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, 9, 10]);
                    _a = tag;
                    switch (_a) {
                        case "dishes": return [3 /*break*/, 2];
                        case "blog": return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 6];
                case 2: return [4 /*yield*/, searchMenuItems(searchValue, menuPaginatorInfo.currentPage + 1)];
                case 3:
                    menu = _b.sent();
                    if (menu) {
                        dispatch({
                            type: "GET_MENU_ITEMS",
                            payload: __spreadArray(__spreadArray([], __read(menuItems), false), __read(menu.menuItems), false),
                        });
                        dispatch({
                            type: "SET_MENU_PAGINATION",
                            payload: menu.paginatorInfo,
                        });
                    }
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, searchPosts(searchValue, postsPaginatorInfo.currentPage + 1)];
                case 5:
                    posts = _b.sent();
                    if (posts) {
                        dispatch({
                            type: "GET_POSTS",
                            payload: __spreadArray(__spreadArray([], __read(storePosts), false), __read(posts.posts), false),
                        });
                        dispatch({
                            type: "SET_BLOG_PAGINATION",
                            payload: posts.paginatorInfo,
                        });
                    }
                    return [3 /*break*/, 7];
                case 6: return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 10];
                case 8:
                    ex_2 = _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    setOperation("");
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    var handleGoBack = function () {
        if (typeof window !== "undefined") {
            window.history.back();
        }
    };
    useEffect(function () {
        var _a;
        var params = new URLSearchParams(window.location.search);
        var query = (_a = params.get("query")) !== null && _a !== void 0 ? _a : "";
        setSearchField(query);
        setSearchValue(query);
    }, []);
    var renderLoadMoreBtn = function (tag, showLoadMoreBtn) { return (_jsxs("div", { className: classes.loadMoreBtnParent, children: [_jsxs("p", { className: classes.paginationText, children: ["showing page ", tag === "dishes" ? menuPaginatorInfo.currentPage : postsPaginatorInfo.currentPage, " of", " ", tag === "dishes" ? menuPaginatorInfo.lastPage : postsPaginatorInfo.lastPage] }), showLoadMoreBtn && (_jsx("button", { className: classes.loadMoreBtn, onClick: function () { return handleLoadMore(tag); }, disabled: loading, children: "Load more" }))] })); };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: buttonConfig, block_uuid: BLOCK_UUID, children: _jsx(Section, { background: (_f = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _f === void 0 ? void 0 : _f[500], isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, children: _jsxs(Container, { children: [_jsx(BackButton, { onClick: handleGoBack }), _jsxs("form", { onSubmit: handleSearch, className: classes.searchContainer, children: [_jsx("input", { className: classes.searchInput, value: searchField, onChange: function (e) { return setSearchField(e.target.value); }, type: "Type something..", autoFocus: true }), _jsxs(Button, { size: "md", variant: "contained", type: "submit", children: ["Search ", _jsx(MdSearch, {})] })] }), networkOperation === "loading.search" ? (renderImageSkeleton()) : (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsxs("header", { className: classes.header, children: [_jsx("h3", { className: classes.heading, children: "From our menu" }), _jsxs("p", { className: classes.description, children: ["Results for: \"", searchValue, "\""] })] }), _jsxs("div", { children: [_jsx("div", { className: classes.cardContainer, children: renderMenuItems(menuItems) }), operation === "search_menu_items" && renderImageSkeleton(), renderLoadMoreBtn("dishes", (menuPaginatorInfo === null || menuPaginatorInfo === void 0 ? void 0 : menuPaginatorInfo.currentPage) !== (menuPaginatorInfo === null || menuPaginatorInfo === void 0 ? void 0 : menuPaginatorInfo.lastPage) && (menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) > 0)] })] }), _jsxs("div", { className: classes.block, children: [_jsxs("header", { className: classes.header, children: [_jsx("h3", { className: classes.heading, children: "From our blog" }), _jsxs("p", { className: classes.description, children: ["Results for: \"", searchValue, "\""] })] }), _jsx("div", { className: classes.cardContainer, children: renderPosts(storePosts) }), operation === "search_posts" && renderImageSkeleton(), renderLoadMoreBtn("blog", (postsPaginatorInfo === null || postsPaginatorInfo === void 0 ? void 0 : postsPaginatorInfo.currentPage) !== (postsPaginatorInfo === null || postsPaginatorInfo === void 0 ? void 0 : postsPaginatorInfo.lastPage) && storePosts.length > 0)] })] }))] }) }) }));
};
