import { jsx as _jsx } from "react/jsx-runtime";
import { Provider as ReduxProvider } from "react-redux";
import { blockContext, blockStore } from ".";
export var BlockProvider = function (_a) {
    var children = _a.children, mainConfig = _a.mainConfig, buttonConfig = _a.buttonConfig, gatewayUrl = _a.gatewayUrl, block_uuid = _a.block_uuid;
    return (_jsx(ReduxProvider, { store: blockStore(mainConfig, buttonConfig, gatewayUrl, block_uuid), context: blockContext, children: children }));
};
