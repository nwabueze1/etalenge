import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BlockProvider, Button, CardSkeleton, Container, MenuItemCard, Section } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock9Styles } from "./useBlock9Styles";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Searchbar, BreadCrumbs, CategoryDrawer } from "./components";
import clx from "classnames";
import Slider from "@mui/material/Slider";
import { CircularProgress } from "@mui/material";
import { useBlock9 } from "./useBlock9";
import block9 from "../../mappings/block9";
var BLOCK_UUID = block9.uuid;
export var EleganteBlock9 = function (_a) {
    var _b, _c;
    var activeElement = _a.activeElement, content = _a.content, index = _a.index, handleSelect = _a.handleSelect, configuration = _a.configuration, _d = _a.mode, mode = _d === void 0 ? "view" : _d;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var buttonConfig = useGetColor(configuration, "button");
    var classes = useBlock9Styles(mainConfig);
    var key = "blocks.".concat(index);
    var _e = useBlock9({ content: content }), handleSearch = _e.handleSearch, loadingState = _e.loadingState, handleLoadMore = _e.handleLoadMore, handleFilterByCategory = _e.handleFilterByCategory, handleFilterByPrice = _e.handleFilterByPrice, maxFilter = _e.maxFilter, minFilter = _e.minFilter, marks = _e.marks, handleChange = _e.handleChange, activeCategory = _e.activeCategory, menuCategories = _e.menuCategories, menuItems = _e.menuItems, paginationInfo = _e.paginationInfo, filterRange = _e.filterRange, openDrawer = _e.openDrawer, handleToggleDrawer = _e.handleToggleDrawer, setOpenDrawer = _e.setOpenDrawer, sortOptions = _e.sortOptions, handleSort = _e.handleSort, sort = _e.sort, openSortModal = _e.openSortModal, toggleOpenSortModal = _e.toggleOpenSortModal;
    var renderMenuItems = function () {
        return menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (menu_item, index) {
            var _a, _b, _c, _d;
            return (_jsx(MenuItemCard, { mode: mode, currency: (_d = (_c = (_b = (_a = menu_item === null || menu_item === void 0 ? void 0 : menu_item.menu) === null || _a === void 0 ? void 0 : _a.restaurant) === null || _b === void 0 ? void 0 : _b.bank_info) === null || _c === void 0 ? void 0 : _c.currency) !== null && _d !== void 0 ? _d : "", menuItem: menu_item, isSsr: true }, index));
        });
    };
    var renderCategoryDrawer = function () { return (_jsx(CategoryDrawer, { open: openDrawer, onClose: function () { return setOpenDrawer(false); }, children: renderCategoryAndFilter() })); };
    var renderSortOptions = function () {
        return sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map(function (option, index) { return (_jsx("li", { className: classes.sortOption, onClick: function () { return handleSort(option); }, children: option }, index)); });
    };
    var renderCardSkeleton = function () {
        return Array(6)
            .fill(0)
            .map(function (_, index) { return _jsx(CardSkeleton, {}, index); });
    };
    var progress = _jsx(CircularProgress, { size: 15 });
    //@ts-ignore
    var renderFilterSlider = function () {
        var _a;
        return (_jsxs("div", { className: classes.filterContainer, children: [_jsx("h6", { className: classes.drawerTitle, children: "Filter by Price" }), _jsx(Slider, { value: filterRange, onChange: handleChange, max: maxFilter, min: minFilter, valueLabelDisplay: "auto", sx: {
                        "& .MuiSlider-track": {
                            backgroundColor: (_a = mainConfig === null || mainConfig === void 0 ? void 0 : mainConfig.colors) === null || _a === void 0 ? void 0 : _a[100], // replace with your chosen color
                        },
                    }, className: classes.rangerSelector, marks: marks }), _jsx(Button, { className: clx(classes.filterBtn, classes.button), onClick: handleFilterByPrice, size: "md", variant: "contained", children: loadingState.filtering ? progress : "Filter" })] }));
    };
    var renderCategoryAndFilter = function () { return (_jsxs(_Fragment, { children: [_jsx("h6", { className: classes.drawerTitle, children: "Categories" }), renderMenuCategories()] })); };
    var renderMenuCategories = function () {
        return menuCategories === null || menuCategories === void 0 ? void 0 : menuCategories.map(function (category, index) { return (_jsx("li", { className: clx(classes.menuCategory, activeCategory === category.title && "active"), onClick: function () { return handleFilterByCategory(category); }, children: category === null || category === void 0 ? void 0 : category.title }, index)); });
    };
    var renderHeader = function () {
        var _a;
        return (_jsxs("div", { children: [_jsxs("header", { className: classes.header, children: [_jsxs("div", { className: classes.titleContainer, children: [_jsx("h4", { className: classes.title, children: (_a = content === null || content === void 0 ? void 0 : content.text) === null || _a === void 0 ? void 0 : _a.title }), _jsx(RiMenu3Fill, { className: classes.menuBtn, onClick: handleToggleDrawer }), renderCategoryDrawer()] }), _jsx(Searchbar, { loading: loadingState.search, classes: classes, onSearch: handleSearch })] }), _jsxs("aside", { className: classes.subHeader, children: [_jsxs("p", { className: classes.itemsCount, children: ["Showing: ", _jsxs("b", { children: [menuItems === null || menuItems === void 0 ? void 0 : menuItems.length, " Items"] })] }), (menuItems === null || menuItems === void 0 ? void 0 : menuItems.length) > 1 && (_jsxs("div", { className: classes.sortContainer, children: [_jsx("span", { children: "Sort by:" }), _jsxs("div", { className: classes.sortBox, onClick: toggleOpenSortModal, children: [_jsx("span", { className: classes.sortText, children: sort !== null && sort !== void 0 ? sort : "Relevance" }), _jsx(FaChevronDown, { className: clx(classes.sortChevron, openSortModal && "active") })] }), _jsx("div", { className: clx(classes.sortOptionsModal, openSortModal && "active"), children: renderSortOptions() })] }))] })] }));
    };
    return (_jsx(BlockProvider, { mainConfig: mainConfig, buttonConfig: buttonConfig, block_uuid: BLOCK_UUID, children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsxs("div", { className: classes.menuCategoryContainerWeb, children: [_jsx(BreadCrumbs, { crumbs: ["Home", (_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.overline] }), renderCategoryAndFilter()] }), _jsxs("div", { children: [renderHeader(), _jsx("div", { className: classes.menuItemsContainer, children: loadingState.search || loadingState.filtering ? (renderCardSkeleton()) : (_jsxs(_Fragment, { children: [renderMenuItems(), (loadingState === null || loadingState === void 0 ? void 0 : loadingState.pagination) && renderCardSkeleton()] })) }), paginationInfo && (paginationInfo === null || paginationInfo === void 0 ? void 0 : paginationInfo.currentPage) !== (paginationInfo === null || paginationInfo === void 0 ? void 0 : paginationInfo.lastPage) && (_jsx("div", { className: classes.buttonContainer, children: _jsx("button", { className: classes.loadMoreBtn, onClick: handleLoadMore, disabled: loadingState.pagination, children: loadingState.pagination ? progress : "Load more" }) }))] })] }) }) }) }));
};
