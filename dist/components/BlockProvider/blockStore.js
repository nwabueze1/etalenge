var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { legacy_createStore as createStore } from "redux";
import { createContext } from "react";
import { createSelectorHook } from "react-redux";
export var blockReducer = function (state, action) {
    switch (action.type) {
        case "GET_MAIN_PROPS":
            return __assign(__assign({}, state), { main: action.payload });
        default:
            return state;
    }
};
export var blockStore = function (mainConfig, buttonConfig, gatewayUrl, block_uuid) {
    return createStore(blockReducer, {
        mainConfig: mainConfig,
        buttonConfig: buttonConfig,
        gatewayUrl: gatewayUrl,
        block_uuid: block_uuid,
    });
};
export var blockContext = createContext({});
export var useBlockSelector = createSelectorHook(blockContext);
