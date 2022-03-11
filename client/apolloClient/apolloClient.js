import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client";

  
  const myApi = new HttpLink({
    uri: "http://localhost:3001",
  });
  

  
  export const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: myApi
  });