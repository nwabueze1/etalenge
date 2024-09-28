export var extractMenuItemOptions = function (menu_item) {
    var _a, _b;
    var options = (menu_item === null || menu_item === void 0 ? void 0 : menu_item.options) || [];
    var option_configs = (_b = (_a = menu_item.menu) === null || _a === void 0 ? void 0 : _a.options_config) === null || _b === void 0 ? void 0 : _b.filter(function (option) { return options.includes(option.uuid); });
    var initialState = [];
    option_configs === null || option_configs === void 0 ? void 0 : option_configs.forEach(function (option_config) {
        initialState.push({
            name: option_config.name,
            uuid: option_config.uuid,
            selectedChoices: [],
            // @ts-ignore
            options: option_config.options[option_config.type] || {},
            type: option_config.type,
        });
    });
    return {
        initialState: initialState,
    };
};
export var calculateSumOfOption = function (options) {
    return options === null || options === void 0 ? void 0 : options.reduce(function (a, option) {
        return a + option.selectedChoices.reduce(function (a, b) { return a + (option.type === "deselection" ? -b.amount : b.amount); }, 0);
    }, 0);
};
