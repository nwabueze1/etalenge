import { jsx as _jsx } from "react/jsx-runtime";
import { useContainer } from "./useContainer";
export var Container = function (_a) {
    var children = _a.children;
    var classes = useContainer();
    return _jsx("div", { className: classes.root, children: children });
};
