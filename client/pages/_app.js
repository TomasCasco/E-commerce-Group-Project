import '../styles/globals.css'
import React, { useEffect } from "react"
import { wrapper } from "../redux/store"
import { ChakraProvider } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartFromLocalStorage } from '../redux/cart/cartActions'


function MyApp({ Component, pageProps }) {

  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cartReducer.cart)

  useEffect(()=>{
    const cartLocalStorage=localStorage.getItem("cart")
    if(cartLocalStorage){
    dispatch(setCartFromLocalStorage(JSON.parse(cartLocalStorage)))
    }
    else {
      localStorage.setItem("cart",JSON.stringify([]))
    }
  },[])

  useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  return (

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>

  )
}

export default wrapper.withRedux(MyApp);