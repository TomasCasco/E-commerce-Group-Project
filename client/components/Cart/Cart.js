import React from "react";
import { Grid, Flex, Box, useColorModeValue, Link } from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


export default function Cart() {

  const data = useSelector(state=>state.cartReducer.cart)


  return (
    <Flex  display={"flex"} direction="column" justify="center" align="center" maxWidth="100%" padding={"50px"} paddingLeft="20px" paddingRight={"20px"}>
      <Box fontSize="xx-large"
              fontWeight="semibold"
              paddingBottom="20px"
              lineHeight='5'>Mis productos
      {` (` + data
            .map((el) => el.qty)
            .reduce((prev, curr) => prev + curr, 0) + ` items) `}
        </Box>

        <Flex justify="center" align="center" direction="column">
          <Box w="100%">
              {data.length!==0 ? (
                data.map((product, index) => {
                  return (
                    <Box  m="20" key={index} margin="0" marginBottom={"20px"}>
                      <CartItem itemProduct={product} />
                    </Box>
                  );
                })
              ) : (
                null
              )}
          </Box>
          
          <Box m="1" h="200" w="300"
                bg={useColorModeValue('white', 'gray.800')}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">

        <Box m='auto' p={"4"} align="center" justify="center">
            <Box fontSize="x-large"
              fontWeight="semibold"
            >CART</Box>
            <Flex mt='6'>
                <Box mb="8" mr="10" fontSize="x-large">
                    TOTAL{` (` + data
                    .map((el) => el.qty)
                    .reduce((prev, curr) => prev + curr, 0) + ` items) `}
                </Box>
                <Box fontSize="x-large">
                    {`$` +  data
                    .map((el) => el.qty * el.product.price)
                    .reduce((prev, curr) => prev + curr, 0) + `.00 `}
                </Box>
            </Flex>
            <Box fontSize="x-large">
                <Link href='/checkout' px='2'  padding={"5px"} border="1px solid black" borderRadius="20" _hover={{bgColor:'gray.200', textDecoration:'none' }} >
                  
                  CHECKOUT
                 
                </Link>
            </Box>

            </Box>
        </Box>
    </Flex>
      

    </Flex>
  );
}
