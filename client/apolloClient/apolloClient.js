import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
  } from "@apollo/client";
  import { ApolloLink } from "apollo-link";
  
  const myApi = new HttpLink({
    uri: "http://localhost:3001",
  });
  
  const cartApi = new HttpLink({
    uri: "https://api.cartql.com",
  });
  
  export const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: ApolloLink.split(
      (operation) => operation.getContext().clientName === "cartApi",
      cartApi,
      myApi
    ),
  });