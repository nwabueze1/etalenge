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
import { useSelector } from "react-redux";
import { SEARCH_MENU_ITEMS, SEARCH_POSTS } from "../data";
import { createApolloClient } from "../../../helper";
var extractCurrencyToMenuItems = function (data) {
    return data.map(function (item) {
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
export var useSearchMenuItems = function () {
    var _a = useSelector(function (store) { return store; }), gatewayUrl = _a.gatewayUrl, restaurant = _a.restaurant;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (search, page) { return __awaiter(void 0, void 0, void 0, function () {
        var menu_uuid, _a, data, errors, error_1;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    menu_uuid = (_b = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu) === null || _b === void 0 ? void 0 : _b.uuid;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.query({
                            query: SEARCH_MENU_ITEMS,
                            variables: { menu_uuid: menu_uuid, search: search, page: page },
                        })];
                case 2:
                    _a = _e.sent(), data = _a.data, errors = _a.errors;
                    if (!data || errors) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, {
                            menuItems: extractCurrencyToMenuItems((_c = data === null || data === void 0 ? void 0 : data.getMenuItems) === null || _c === void 0 ? void 0 : _c.data),
                            paginatorInfo: (_d = data === null || data === void 0 ? void 0 : data.getMenuItems) === null || _d === void 0 ? void 0 : _d.paginatorInfo,
                        }];
                case 3:
                    error_1 = _e.sent();
                    //TODO: log this sentry
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
export var useSearchPosts = function () {
    var _a = useSelector(function (store) { return store; }), gatewayUrl = _a.gatewayUrl, blog = _a.blog;
    var client = createApolloClient(gatewayUrl !== null && gatewayUrl !== void 0 ? gatewayUrl : "");
    return function (search, page) { return __awaiter(void 0, void 0, void 0, function () {
        var blog_uuid, _a, data, errors, error_2;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    blog_uuid = blog === null || blog === void 0 ? void 0 : blog.uuid;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.query({
                            query: SEARCH_POSTS,
                            variables: { blog_uuid: blog_uuid, search: search, page: page },
                        })];
                case 2:
                    _a = _e.sent(), data = _a.data, errors = _a.errors;
                    if (!(data === null || data === void 0 ? void 0 : data.getPostsByBlogUuid) || errors) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, {
                            posts: (_c = (_b = data === null || data === void 0 ? void 0 : data.getPostsByBlogUuid) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.map(function (post) {
                                var _a;
                                return (__assign(__assign({}, post), { featured_image: JSON.parse((_a = post === null || post === void 0 ? void 0 : post.featured_image) !== null && _a !== void 0 ? _a : "{}") }));
                            }),
                            paginatorInfo: (_d = data === null || data === void 0 ? void 0 : data.getPostsByBlogUuid) === null || _d === void 0 ? void 0 : _d.paginatorInfo,
                        }];
                case 3:
                    error_2 = _e.sent();
                    //TODO: log this sentry
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
