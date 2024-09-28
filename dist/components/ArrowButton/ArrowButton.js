import { jsx as _jsx } from "react/jsx-runtime";
import { useBlockSelector } from "../BlockProvider";
import { useArrowButtonStyles } from "./useArrowButtonStyles";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import clx from "classnames";
export var ArrowButton = function (_a) {
    var orientation = _a.orientation, className = _a.className, onClick = _a.onClick;
    var buttonConfig = useBlockSelector(function (store) { return store; }).buttonConfig;
    var classes = useArrowButtonStyles(buttonConfig);
    var renderElement = function () {
        var element;
        switch (orientation) {
            case "left":
                element = _jsx(MdArrowBack, { className: classes.arrow });
                break;
            case "right":
                element = _jsx(MdArrowForward, { className: classes.arrow });
                break;
            default:
                element = null;
                break;
        }
        return (_jsx("button", { className: clx(classes.root, className), onClick: onClick, children: element }));
    };
    return renderElement();
};
