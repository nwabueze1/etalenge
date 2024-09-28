export var parsePostImage = function (image) {
    if (typeof image === "string") {
        return JSON.parse(image);
    }
    return image;
};
