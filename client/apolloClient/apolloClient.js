import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const myApi = new HttpLink({
  uri: "http://127.0.0.1:3001",
});

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: myApi,
});
