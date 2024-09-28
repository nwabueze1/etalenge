import { useLocation } from 'react-router-dom';
export var useAnimationParameter = function (animations) {
    var _a, _b;
    var location = useLocation();
    var queryString = location.search;
    var params = new URLSearchParams(queryString);
    var animationQueryParam = params.get('animation');
    var selectedAnimation = !animationQueryParam
        ? (_a = animations === null || animations === void 0 ? void 0 : animations.find(function (index) { return index.isSelected; })) === null || _a === void 0 ? void 0 : _a.name
        : (_b = animations === null || animations === void 0 ? void 0 : animations.find(function (index) { return index.name === animationQueryParam; })) === null || _b === void 0 ? void 0 : _b.name;
    var animationClass = selectedAnimation === null || selectedAnimation === void 0 ? void 0 : selectedAnimation.replace(/-/g, '_');
    return { animationClass: animationClass };
};
