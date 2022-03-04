import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Flex, Box, useColorModeValue, Link } from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cart);

  return (
    <Flex direction="column" justify="center" align="center">
      <Box fontSize="xl"
              fontWeight="semibold"
              lineHeight='5'>My Products
      {` (` + cartItems
            .map((el) => el.qty)
            .reduce((prev, curr) => prev + curr, 0) + ` items) `}
        </Box>

      <div>
        <Flex justify="center" align="center" mt='3'>
          <Box >
              {cartItems ? (
                cartItems.map((p, index) => {
                  return (
                    <Box  m="20" key={index}>
                      <CartItem p={p} />
                    </Box>
                  );
                })
              ) : (
                <p>The cart is empty</p>
              )}
          </Box>
          
          <Box m="1" h="200" w="300"
                bg={useColorModeValue('white', 'gray.800')}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">

        <Box m='auto'p='4' align="center" justify="center">
            <Box fontSize="16"
              fontWeight="semibold"
            >CART</Box>
            <Flex mt='6'>
                <Box mb="8" mr="10">
                    TOTAL{` (` + cartItems
                    .map((el) => el.qty)
                    .reduce((prev, curr) => prev + curr, 0) + ` items) `}
                </Box>
                <Box>
                    {`$` +  cartItems
                    .map((el) => el.qty * el.price)
                    .reduce((prev, curr) => prev + curr, 0) + `.00 `}
                </Box>
            </Flex>
            <Box>
                <Link href='/checkout' px='2'  border="1px solid black" borderRadius="20" _hover={{bgColor:'gray.200', textDecoration:'none' }} >
                  
                  CHECKOUT
                 
                </Link>
            </Box>

            </Box>
        </Box>
    </Flex>
      </div>
      

    </Flex>
  );
}
