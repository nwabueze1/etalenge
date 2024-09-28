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
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { BlockProvider, CardSkeleton, Container, PostCard, Section, } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock13Styles } from "./useBlock13Styles";
import { RiMenu3Fill } from "react-icons/ri";
import { Searchbar, BreadCrumbs, CategoryDrawer } from "./components";
import clx from "classnames";
import { useGetBlogPosts, useGetCategoryPosts } from "./gql/hooks";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import block13 from "../../mappings/block13";
var BLOCK_UUID = block13.uuid;
export var EleganteBlock13 = function (_a) {
    var _b, _c, _d;
    var activeElement = _a.activeElement, content = _a.content, index = _a.index, handleSelect = _a.handleSelect, configuration = _a.configuration, _e = _a.mode, mode = _e === void 0 ? "view" : _e;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var buttonConfig = useGetColor(configuration, "button");
    var classes = useBlock13Styles(mainConfig);
    var _f = __read(useState(false), 2), openDrawer = _f[0], setOpenDrawer = _f[1];
    var loadBlogPosts = useGetBlogPosts();
    var loadCategoryPosts = useGetCategoryPosts();
    var _g = __read(useState(""), 2), searchValue = _g[0], setSearchValue = _g[1];
    var _h = useSelector(function (store) { return store; }), blog = _h.blog, loading = _h.loading, networkOperation = _h.networkOperation;
    var key = "blocks.".concat(index);
    var dispatch = useDispatch();
    var blog_uuid = useMemo(function () {
        var _a, _b;
        if (!(blog === null || blog === void 0 ? void 0 : blog.posts) || ((_a = blog === null || blog === void 0 ? void 0 : blog.posts) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return undefined;
        return (_b = JSON.parse(JSON.stringify(blog === null || blog === void 0 ? void 0 : blog.posts))[0]) === null || _b === void 0 ? void 0 : _b.blog_uuid;
    }, []);
    var categories = __spreadArray([{ name: "all", uuid: "938263-all-372635" }], __read(((blog === null || blog === void 0 ? void 0 : blog.categories) || [])), false);
    var _j = __read(useState(categories[0].name), 2), activeCategory = _j[0], setActiveCategory = _j[1];
    var _k = __read(useState(["Home", "Posts"]), 2), breadCrumbs = _k[0], setBreadCrumbs = _k[1];
    var renderCategoryDrawer = function () { return (_jsx(CategoryDrawer, { open: openDrawer, onClose: function () { return setOpenDrawer(false); }, children: renderBlogCategories() })); };
    var renderCardSkeleton = function () {
        return Array(6)
            .fill(0)
            .map(function (_, index) { return _jsx(CardSkeleton, {}, index); });
    };
    var renderPosts = function () { var _a; return (_a = blog === null || blog === void 0 ? void 0 : blog.posts) === null || _a === void 0 ? void 0 : _a.map(function (post, index) { return _createElement(PostCard, __assign({}, post, { key: index, mode: mode })); }); };
    var handleFilterByCategory = function (category) { return __awaiter(void 0, void 0, void 0, function () {
        var data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSearchValue("");
                    if (!(category.name === "all")) return [3 /*break*/, 2];
                    setBreadCrumbs(["Home", "Menu"]);
                    return [4 /*yield*/, loadBlogPosts(blog_uuid, 1)];
                case 1:
                    data = _a.sent();
                    updateBlogStore(data === null || data === void 0 ? void 0 : data.posts, data === null || data === void 0 ? void 0 : data.paginatorInfo);
                    return [3 /*break*/, 4];
                case 2:
                    setBreadCrumbs(["Home", "Posts", category.name]);
                    return [4 /*yield*/, loadCategoryPosts(category === null || category === void 0 ? void 0 : category.uuid, 1)];
                case 3:
                    data = _a.sent();
                    updateBlogStore(data === null || data === void 0 ? void 0 : data.posts, data === null || data === void 0 ? void 0 : data.paginatorInfo);
                    _a.label = 4;
                case 4:
                    setActiveCategory(category.name);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        var posts, paginatorInfo, data, category_uuid, data;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    setNetworkOperation("loading.more.blog.posts");
                    posts = (blog === null || blog === void 0 ? void 0 : blog.posts) || [];
                    paginatorInfo = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo;
                    if (!(activeCategory === "all")) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadBlogPosts(blog_uuid, (((_a = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) === null || _a === void 0 ? void 0 : _a.currentPage) || 0) + 1, searchValue)];
                case 1:
                    data = _d.sent();
                    posts = __spreadArray(__spreadArray([], __read(posts), false), __read(((data === null || data === void 0 ? void 0 : data.posts) || [])), false);
                    paginatorInfo = data === null || data === void 0 ? void 0 : data.paginatorInfo;
                    return [3 /*break*/, 4];
                case 2:
                    category_uuid = (_b = categories.find(function (category) { return category.name === activeCategory; })) === null || _b === void 0 ? void 0 : _b.uuid;
                    return [4 /*yield*/, loadCategoryPosts(category_uuid || "", (((_c = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) === null || _c === void 0 ? void 0 : _c.currentPage) || 0) + 1)];
                case 3:
                    data = _d.sent();
                    posts = __spreadArray(__spreadArray([], __read(posts), false), __read(((data === null || data === void 0 ? void 0 : data.posts) || [])), false);
                    paginatorInfo = data === null || data === void 0 ? void 0 : data.paginatorInfo;
                    _d.label = 4;
                case 4:
                    updateBlogStore(posts, paginatorInfo);
                    setNetworkOperation("");
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSearch = function (title) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setActiveCategory("all");
                    if (title.length === 0)
                        return [2 /*return*/, handleFilterByCategory(categories[0])];
                    setNetworkOperation("searching");
                    return [4 /*yield*/, loadBlogPosts(blog_uuid, 1, title)];
                case 1:
                    data = _a.sent();
                    updateBlogStore(data === null || data === void 0 ? void 0 : data.posts, data === null || data === void 0 ? void 0 : data.paginatorInfo);
                    setNetworkOperation("");
                    return [2 /*return*/];
            }
        });
    }); };
    var setNetworkOperation = function (title) { return dispatch({ type: "SET_NETWORK_OPERATION", payload: title }); };
    var Loader = _jsx(CircularProgress, { color: "inherit", size: 16 });
    var updateBlogStore = function (posts, paginatorInfo) {
        dispatch({ type: "GET_POSTS", payload: posts });
        dispatch({ type: "SET_BLOG_PAGINATION", payload: paginatorInfo });
    };
    var renderBlogCategories = function () { return (_jsxs(_Fragment, { children: [_jsx("h6", { className: classes.drawerTitle, children: "Categories" }), categories.map(function (category, index) { return (_jsx("li", { className: clx(classes.menuCategory, activeCategory === category.name && "active"), onClick: function () { return handleFilterByCategory(category); }, children: category.name }, index)); })] })); };
    var renderHeader = function () {
        var _a, _b;
        return (_jsxs("div", { children: [_jsxs("header", { className: classes.header, children: [_jsxs("div", { className: classes.titleContainer, children: [_jsx("h4", { className: classes.title, children: (_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.title }), _jsx(RiMenu3Fill, { className: classes.menuBtn, onClick: function () { return setOpenDrawer(true); } }), renderCategoryDrawer()] }), _jsx(Searchbar, { searchValue: searchValue, setSearchValue: setSearchValue, loading: networkOperation === "searching", classes: classes, onSearch: handleSearch })] }), _jsx("aside", { className: classes.subHeader, children: _jsxs("p", { className: classes.itemsCount, children: ["Showing: ", _jsxs("b", { children: [((_b = blog === null || blog === void 0 ? void 0 : blog.posts) === null || _b === void 0 ? void 0 : _b.length) || 0, " Items"] })] }) })] }));
    };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: buttonConfig, block_uuid: BLOCK_UUID, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsxs("div", { className: classes.menuCategoryContainerWeb, children: [_jsx(BreadCrumbs, { crumbs: breadCrumbs }), renderBlogCategories()] }), _jsxs("div", { children: [renderHeader(), _jsxs("div", { className: classes.menuItemsContainer, children: [loading && networkOperation === "" ? renderCardSkeleton() : renderPosts(), networkOperation === "loading.more.blog.posts" && renderCardSkeleton()] }), ((_c = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) === null || _c === void 0 ? void 0 : _c.currentPage) !== ((_d = blog === null || blog === void 0 ? void 0 : blog.paginatorInfo) === null || _d === void 0 ? void 0 : _d.lastPage) && (_jsx("div", { className: classes.buttonContainer, children: _jsx("button", { className: classes.loadMoreBtn, onClick: handleLoadMore, children: networkOperation === "loading.more.blog.posts" ? Loader : "Load more" }) }))] })] }) }) }) }));
};
