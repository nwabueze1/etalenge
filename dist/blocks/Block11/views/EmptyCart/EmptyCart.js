import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlockSelector } from "../../../../components";
import { useEmptyCartStyles } from "./useEmptyCartStyles";
import clx from "classnames";
export var EmptyCart = function () {
    var mainConfig = useBlockSelector(function (store) { return store; }).mainConfig;
    var classes = useEmptyCartStyles(mainConfig);
    return (_jsxs("div", { className: classes.root, children: [_jsx("img", { src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Empty+Cart.svg", alt: "Empty cart icon", height: 400, width: 400, className: clx(classes.emptyCartIcon, classes.fadeIn) }), _jsxs("div", { className: classes.textContainer, children: [_jsx("h5", { children: "Your cart is empty" }), _jsx("p", { children: "You are are yet to add any item to cart, check out our awesome menu and place your order now." })] })] }));
};
