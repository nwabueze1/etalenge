import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
export var useUpdateCartCount = function () {
    var cookies = new Cookies();
    var dispatch = useDispatch();
    var restaurant = useSelector(function (state) { return state; }).restaurant;
    var menu = restaurant === null || restaurant === void 0 ? void 0 : restaurant.menu;
    return function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var cartItemCountCookie = cookies.get("cartItemCount");
        var siteUuid = (_f = (_e = (_d = (_c = (_b = (_a = menu === null || menu === void 0 ? void 0 : menu.menuItems) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.menu) === null || _c === void 0 ? void 0 : _c.restaurant) === null || _d === void 0 ? void 0 : _d.site) === null || _e === void 0 ? void 0 : _e.uuid) !== null && _f !== void 0 ? _f : "";
        var updatedCount = ((_g = cartItemCountCookie[siteUuid]) !== null && _g !== void 0 ? _g : 0) + 1;
        cartItemCountCookie[siteUuid] = updatedCount;
        dispatch({ type: "SET_CART_ITEM_COUNT", payload: updatedCount });
        cookies.set("cartItemCount", cartItemCountCookie, {
            path: "/",
            expires: new Date(Date.now() + 86400000),
        });
    };
};
