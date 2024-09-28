import { jsx as _jsx } from "react/jsx-runtime";
import { ReactReduxContext, Provider as ReduxProvider } from 'react-redux';
import { store } from '.';
export var Provider = function (_a) {
    var children = _a.children;
    return (_jsx(ReduxProvider, { store: store(), context: ReactReduxContext, children: children }));
};
