export var create2dMatrixFromStringArray = function (images, currentIndex, result) {
    if (currentIndex === void 0) { currentIndex = 0; }
    if (result === void 0) { result = []; }
    if (!images || !images[currentIndex])
        return result;
    var endIndex = currentIndex + 8;
    result.push(images.slice(currentIndex, endIndex));
    return create2dMatrixFromStringArray(images, endIndex, result);
};
