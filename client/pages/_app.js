import '../styles/globals.css'
import React from "react"
import { wrapper } from "../redux/store"
import { ChakraProvider } from '@chakra-ui/react'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp);