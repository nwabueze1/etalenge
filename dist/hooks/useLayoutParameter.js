import { useMediaQuery, useTheme } from '@mui/material';
export var useLayoutParameter = function (layouts) {
    var _a, _b;
    var params = typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : undefined;
    var queryParam = params ? params.get('layout') : undefined;
    var selectedLayout = !queryParam
        ? (_a = layouts === null || layouts === void 0 ? void 0 : layouts.find(function (c) { return c.isSelected; })) === null || _a === void 0 ? void 0 : _a.name
        : ((_b = layouts === null || layouts === void 0 ? void 0 : layouts.find(function (c) { return c.name === queryParam; })) === null || _b === void 0 ? void 0 : _b.name) || undefined;
    var layoutClass = selectedLayout === null || selectedLayout === void 0 ? void 0 : selectedLayout.replace(/-/g, '_');
    var theme = useTheme();
    var lg = useMediaQuery(theme.breakpoints.down('lg'));
    var sm = useMediaQuery(theme.breakpoints.down('sm'));
    var md = useMediaQuery(theme.breakpoints.down(600));
    var xmd = useMediaQuery(theme.breakpoints.down(700));
    var path = typeof window !== 'undefined' ? window.location.pathname : '';
    return { path: path, selectedLayout: selectedLayout, layoutClass: layoutClass, theme: theme, lg: lg, sm: sm, md: md, xmd: xmd };
};
