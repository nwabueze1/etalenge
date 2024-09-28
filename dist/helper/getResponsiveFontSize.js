export var getResponsiveFontSize = function (minFontSize, maxFontSize) {
    var minWidth = 300; // Set your minimum viewport width
    var maxWidth = 1720; // Set your maximum viewport width
    return "calc(".concat(minFontSize, "px + ").concat(maxFontSize - minFontSize, " * (100vw - ").concat(minWidth, "px) / ").concat(maxWidth - minWidth, ")");
};
