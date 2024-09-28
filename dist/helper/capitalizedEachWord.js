export function capitalizeEveryWord(str) {
    return str === null || str === void 0 ? void 0 : str.replace(/\b\w/g, function (match) { return match.toUpperCase(); });
}
