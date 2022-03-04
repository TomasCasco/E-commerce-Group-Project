import '../styles/globals.css'
import React from "react"
import { wrapper } from "../redux/store"
import { ChakraProvider } from '@chakra-ui/react'
import store from '../redux/store'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql } from '@apollo/client'

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3001",
  }),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client} >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default wrapper.withRedux(MyApp);