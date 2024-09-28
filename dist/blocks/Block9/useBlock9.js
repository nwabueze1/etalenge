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
import { useState } from "react";
import { useGetMenuItems } from "./gql/hooks/useGetMenuItems";
import { getCurrency } from "../../helper";
export var useBlock9 = function (_a) {
    var _b, _c, _d, _e, _f;
    var content = _a.content;
    var initialCategory = {
        title: "All products",
        id: "all-categories-0",
    };
    var firstMenuCategory = "All products";
    var _g = __read(useState(firstMenuCategory), 2), activeCategory = _g[0], setActiveCategory = _g[1];
    var menu = content === null || content === void 0 ? void 0 : content.menu;
    var menuCategories = __spreadArray([
        { title: firstMenuCategory, id: "all-categories-0" }
    ], __read((content === null || content === void 0 ? void 0 : content.menu).menuCategories), false);
    var _h = __read(useState([4, 400]), 2), filterRange = _h[0], setFilterRange = _h[1];
    var _j = __read(useState({
        open: false,
        menuItem: null,
    }), 2), menuItemModalData = _j[0], setMenuItemModalData = _j[1];
    var _k = __read(useState([]), 2), filteredData = _k[0], setFilteredData = _k[1];
    var _l = __read(useState(["Home", (_b = content === null || content === void 0 ? void 0 : content.text) === null || _b === void 0 ? void 0 : _b.overline]), 2), breadCrumbs = _l[0], setBreadCrumbs = _l[1];
    var _m = __read(useState(false), 2), openDrawer = _m[0], setOpenDrawer = _m[1];
    var _o = __read(useState((_c = menu === null || menu === void 0 ? void 0 : menu.paginatorInfo) !== null && _c !== void 0 ? _c : { currentPage: 0, lastPage: 0 }), 2), paginationInfo = _o[0], setPaginationInfo = _o[1];
    var loadMenuItems = useGetMenuItems(menu === null || menu === void 0 ? void 0 : menu.uuid);
    var _p = __read(useState({
        pagination: false,
        search: false,
        filtering: false,
    }), 2), loadingState = _p[0], setLoadingState = _p[1];
    var _q = __read(useState(null), 2), sort = _q[0], setSort = _q[1];
    var _r = __read(useState(false), 2), openSortModal = _r[0], setOpenSortModal = _r[1];
    var sortOptions = ["Price (High to Low)", "Price (Low to High)", "Name (A to Z)", "Name (Z to A)"];
    var handleOpenSortModal = function () { return setOpenSortModal(true); };
    var handleCloseSortModal = function () { return setOpenSortModal(false); };
    var currency = getCurrency((_f = (_e = (_d = menu === null || menu === void 0 ? void 0 : menu.restaurant) === null || _d === void 0 ? void 0 : _d.bank_info) === null || _e === void 0 ? void 0 : _e.currency) !== null && _f !== void 0 ? _f : "");
    var minFilter = 0;
    var maxFilter = 2000;
    var midFilter = Math.abs(maxFilter / 2);
    var marks = [
        {
            value: minFilter,
            label: "".concat(currency, " ").concat(minFilter),
        },
        {
            value: midFilter,
            label: "".concat(currency, " ").concat(midFilter),
        },
        {
            value: maxFilter,
            label: "".concat(currency, " ").concat(maxFilter),
        },
    ];
    var handleOpenMenuItemModal = function (menu_item) {
        return setMenuItemModalData({ open: true, menuItem: menu_item });
    };
    var handleCloseMenuItemModal = function () { return setMenuItemModalData({ open: false, menuItem: null }); };
    var handleToggleDrawer = function () { return setOpenDrawer(!openDrawer); };
    var handleChange = function (_, newValue) {
        setFilterRange(newValue);
    };
    var handleSort = function (value) {
        setSort(value);
        var sortedMenuItems = [];
        var data = filteredData.length > 0 ? filteredData : menu === null || menu === void 0 ? void 0 : menu.menuItems;
        switch (value) {
            case "Name (A to Z)":
                sortedMenuItems = data.sort(function (a, b) { return a.name.localeCompare(b.name); });
                break;
            case "Name (Z to A)":
                sortedMenuItems = data.sort(function (a, b) { return b.name.localeCompare(a.name); });
                break;
            case "Price (High to Low)":
                sortedMenuItems = data.sort(function (a, b) { return b.price - a.price; });
                break;
            case "Price (Low to High)":
                sortedMenuItems = data.sort(function (a, b) { return a.price - b.price; });
                break;
            default:
                break;
        }
        setFilteredData(sortedMenuItems);
    };
    var handleFilterByCategory = function (category) { return __awaiter(void 0, void 0, void 0, function () {
        var filteredMenuItems;
        var _a;
        return __generator(this, function (_b) {
            if (category.title === menuCategories[0].title) {
                //all products selected
                //reset pagination
                setPaginationInfo({ currentPage: 0, lastPage: 1 });
                setBreadCrumbs(breadCrumbs.filter(function (_, index) { return index !== 2; }));
                setActiveCategory(initialCategory.title);
                setFilteredData([]);
            }
            else {
                setActiveCategory(category.title);
                setBreadCrumbs(["Home", "Menu", category.title]);
                filteredMenuItems = (_a = menu === null || menu === void 0 ? void 0 : menu.menuItems) === null || _a === void 0 ? void 0 : _a.filter(function (menu_item) { var _a; return ((_a = menu_item.menuCategory) === null || _a === void 0 ? void 0 : _a.uuid) === category.uuid; });
                setFilteredData(filteredMenuItems);
                //reset pagination
                setPaginationInfo({ currentPage: 0, lastPage: 1 });
            }
            return [2 /*return*/];
        });
    }); };
    var filter = [
        {
            column: "price",
            value: String(filterRange[0]),
            operator: ">=",
        },
        {
            column: "price",
            value: String(filterRange[1]),
            operator: "<=",
        },
    ];
    var handleFilterByPrice = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoadingState(__assign(__assign({}, loadingState), { filtering: true }));
                    return [4 /*yield*/, loadMenuItems({
                            filter: filter,
                            page: 1,
                            first: 50,
                            onDataReceived: handleDataReceived,
                        })];
                case 1:
                    _a.sent();
                    setLoadingState(__assign(__assign({}, loadingState), { filtering: false }));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDataReceived = function (data) {
        setFilteredData(data.items);
        setPaginationInfo(data.paginatorInfo);
        setOpenDrawer(false);
    };
    var handleSearch = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = {
                        page: 1,
                        first: 50,
                        search: value,
                        onDataReceived: handleDataReceived,
                    };
                    setLoadingState(__assign(__assign({}, loadingState), { search: true }));
                    return [4 /*yield*/, loadMenuItems(args)];
                case 1:
                    _a.sent();
                    setLoadingState(__assign(__assign({}, loadingState), { search: false }));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoadingState(__assign(__assign({}, loadingState), { pagination: true }));
                    args = {
                        page: (paginationInfo === null || paginationInfo === void 0 ? void 0 : paginationInfo.currentPage) + 1,
                        first: 20,
                        onDataReceived: function (data) {
                            var lastItemIndex = data.items.length - 1;
                            var firstMenuItem = menu === null || menu === void 0 ? void 0 : menu.menuItems[lastItemIndex];
                            if (data.items[lastItemIndex].uuid !== (firstMenuItem === null || firstMenuItem === void 0 ? void 0 : firstMenuItem.uuid)) {
                                //check if the last item is the same as the last item in the menuItems which means we reached the end
                                var items = filteredData.length > 0 ? filteredData : menu === null || menu === void 0 ? void 0 : menu.menuItems;
                                var spreadData = !paginationInfo || paginationInfo.currentPage === 0 ? [] : items;
                                setFilteredData(__spreadArray(__spreadArray([], __read(spreadData), false), __read(data.items), false));
                            }
                            setPaginationInfo(__assign({}, data === null || data === void 0 ? void 0 : data.paginatorInfo));
                        },
                    };
                    return [4 /*yield*/, loadMenuItems(args)];
                case 1:
                    _a.sent();
                    setLoadingState(__assign(__assign({}, loadingState), { pagination: false }));
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        firstMenuCategory: firstMenuCategory,
        activeCategory: activeCategory,
        menu: menu,
        menuCategories: menuCategories,
        menuItems: filteredData.length > 0 ? filteredData : menu === null || menu === void 0 ? void 0 : menu.menuItems,
        filterRange: filterRange,
        menuItemModalData: menuItemModalData,
        breadCrumbs: breadCrumbs,
        openDrawer: openDrawer,
        paginationInfo: paginationInfo,
        loadMenuItems: loadMenuItems,
        loadingState: loadingState,
        marks: marks,
        minFilter: minFilter,
        maxFilter: maxFilter,
        handleCloseMenuItemModal: handleCloseMenuItemModal,
        handleOpenMenuItemModal: handleOpenMenuItemModal,
        handleToggleDrawer: handleToggleDrawer,
        handleChange: handleChange,
        handleFilterByCategory: handleFilterByCategory,
        handleFilterByPrice: handleFilterByPrice,
        handleDataReceived: handleDataReceived,
        handleSearch: handleSearch,
        handleLoadMore: handleLoadMore,
        setOpenDrawer: setOpenDrawer,
        handleSort: handleSort,
        sort: sort,
        sortOptions: sortOptions,
        openSortModal: openSortModal,
        handleOpenSortModal: handleOpenSortModal,
        handleCloseSortModal: handleCloseSortModal,
        toggleOpenSortModal: function () { return setOpenSortModal(!openSortModal); },
    };
};
