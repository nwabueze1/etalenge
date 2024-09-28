import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });

  return new ApolloClient({
    link: from([authLink, ""]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};
