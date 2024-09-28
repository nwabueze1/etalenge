import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useBlockSelector } from "../BlockProvider";
import { useBackButtonStyles } from "./UseBackButtonStyles";
import clx from "classnames";
export var BackButton = function (_a) {
    var onClick = _a.onClick, className = _a.className;
    var mainConfig = useBlockSelector(function (state) { return state; }).mainConfig;
    var classes = useBackButtonStyles(mainConfig);
    return (_jsxs("div", { className: clx(classes.root, className), onClick: onClick, children: [_jsx(IoIosArrowRoundBack, { className: classes.backIcon }), _jsx("p", { className: classes.text, children: "Back" })] }));
};
