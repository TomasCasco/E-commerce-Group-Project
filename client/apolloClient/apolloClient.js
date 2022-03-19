import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3001";

const myApi = new HttpLink({
  uri: API_URL,
});

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: myApi,
});
