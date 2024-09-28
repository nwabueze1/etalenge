import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import clx from "classnames";
import { FaChevronRight } from "react-icons/fa";
import { useBlockSelector } from "../../../../components";
import { useBreadCrumbtyles } from "./useBreadCrumbStyles";
export var BreadCrumbs = function (_a) {
    var crumbs = _a.crumbs;
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var classes = useBreadCrumbtyles(mainConfig);
    var renderBreadCrumbs = function () {
        return crumbs.map(function (crumb, index) {
            var hasNextItem = crumbs === null || crumbs === void 0 ? void 0 : crumbs[index + 1];
            return (_jsxs(Fragment, { children: [_jsx("p", { className: clx(classes.breadCrumb, hasNextItem && "prev"), children: _jsx("a", { href: index === 0 ? "/" : undefined, className: classes.breadCrumbLink, children: crumb }) }), hasNextItem && _jsx(FaChevronRight, { className: clx(classes === null || classes === void 0 ? void 0 : classes.chevronRight, hasNextItem && "prev") })] }, index));
        });
    };
    return _jsx("div", { className: classes.breadCrumbContainer, children: renderBreadCrumbs() });
};
