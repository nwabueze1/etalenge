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
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
export var createApolloClient = function (uri) {
    var httpLink = createUploadLink({ uri: uri });
    var authLink = setContext(function (_, _a) {
        var headers = _a.headers;
        return {
            headers: __assign({}, headers),
        };
    });
    return new ApolloClient({
        link: from([authLink, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });
};
