import React from "react";
import { Button, Grid, Flex, Box, useColorModeValue, MenuItem, Menu, Text, MenuButton, Icon, MenuList, } from "@chakra-ui/react";
import { FaArrowRight, FaAngleRight, FaTrash, IoMdCart } from 'react-icons/fa'
import Link from "next/link";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


export default function Cart() {

  const data = useSelector(state=>state.cartReducer.cart)

  return (
    <Flex  display={"flex"} direction="column" justify="center" align="center" maxWidth="900px" pb={"5px"} pl="5px" pr={"5px"}>
      <Box fontSize="xx-large"
              fontWeight="semibold"
              paddingBottom="20px"
              lineHeight='5'>Products
      {` (` + data
            .map((el) => el.qty)
            .reduce((prev, curr) => prev + curr, 0) + ` items) `}
        </Box>

        <Flex justify="center" align="center" direction="column">
          <Box w="100%" maxHeight="280px" overflowY="scroll">
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
          
          <Box m="1" h="140" w="300"
                bg={useColorModeValue('white', 'gray.800')}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                >

        <Box m='auto'  align="center" justify="center" minWidth={"500px"} maxHeight="190px">
            <Box fontSize="20px" fontWeight="bolder">Order Summary</Box>
            <Flex mt='2' justify="space-between">
                <Box mb="3" mr="10" fontSize="x-large">
                    Subtotal{` (` + data
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
                <Link href='/checkout'   _hover={{textDecoration:'none'}}>
                  <Button colorScheme="red" w="300px" size="md" fontSize="md" rightIcon={<FaArrowRight />}>Go to Cart</Button>  
                </Link>
              </Box>
            </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
