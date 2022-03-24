import React from "react";
import {
  Button,
  Flex,
  Box,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Router from "next/router";

export default function Cart() {
  const data = useSelector((state) => state.cartReducer.cart);
  const userIsLogged = useSelector((state) => state.usersReducer.isLogged);
  const toast = useToast();

  const handleCheckout = () => {
    if (userIsLogged) {
      return Router.push("/checkout");
    }
    toast({
      title: "Attention !",
      description: "You must be logged in",
      status: "warning",
      position:"top",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex
      display={"flex"}
      direction="column"
      justify="center"
      align="center"
      maxWidth="900px"
      padding={"10px"}
    >
      <Box
        fontSize="xx-large"
        fontWeight="semibold"
        paddingBottom="20px"
        lineHeight="5"
      >
        Products
        {` (` +
          data.map((el) => el.qty).reduce((prev, curr) => prev + curr, 0) +
          ` items) `}
      </Box>

      <Flex justify="center" align="center" direction="column">
        <Box
          w="100%"
          maxHeight="280px"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#44B8FC",
              borderRadius: "24px",
            },
          }}
        >
          {data.length !== 0
            ? data.map((product, index) => {
                return (
                  <Box m="20" key={index} margin="0" marginBottom={"20px"}>
                    <CartItem itemProduct={product} />
                  </Box>
                );
              })
            : null}
        </Box>

        <Box
          m="1"
          bg={useColorModeValue("white", "gray.800")}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          padding={"30px"}
        >
          <Box
            m="auto"
            align="center"
            justify="center"
            minWidth={"500px"}
            maxHeight="190px"
          >
            <Box fontSize="20px" fontWeight="bolder">
              Order Summary
            </Box>
            <Flex mt="2" justify="space-between">
              <Box mb="3" mr="10" fontSize="x-large">
                Subtotal
                {` (` +
                  data
                    .map((el) => el.qty)
                    .reduce((prev, curr) => prev + curr, 0) +
                  ` items) `}
              </Box>
              <Box fontSize="x-large">
                {`$` +
                  data
                    .map((el) => el.qty * el.product.price)
                    .reduce((prev, curr) => prev + curr, 0)}
              </Box>
            </Flex>
            <Box fontSize="x-large">
              <Button
                background="#44B8FC"
                color="white"
                _hover={{
                  background: "transparent",
                  color: "#44B8FC",
                  border: "2px solid",
                  borderColor: "#44B8FC",
                }}
                w="300px"
                size="md"
                fontSize="md"
                rightIcon={<FaArrowRight />}
                onClick={handleCheckout}
              >
                Go to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
