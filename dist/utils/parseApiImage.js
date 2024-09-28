export var parseApiImage = function (image) {
    if (!image)
        return {
            src: "",
            name: "",
        };
    if (typeof image === "object")
        return image;
    return JSON.parse(image);
};
