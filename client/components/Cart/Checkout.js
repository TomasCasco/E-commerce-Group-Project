import React from "react";
import { Grid, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/react";
import Summary from "./summary";

export default function Checkout() {
  const data = useSelector((state) => state.cartReducer.cart);

  return (
    <Flex w="100%" justify="center" alignContent="center">
      <Box
        mt={10}
        maxWidth="95%"
        bg={useColorModeValue("white", "gray.800")}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <Box
          fontSize="xx-large"
          fontWeight="semibold"
          lineHeight="5"
          my={10}
          pl={7}
        >
          Shopping Cart
          {` (` +
            data.map((el) => el.qty).reduce((prev, curr) => prev + curr, 0) +
            ` items) `}
        </Box>

        <Flex justify="space-between">
          <Grid pl={7}>
            {data.length !== 0
              ? data.map((product, index) => {
                  return (
                    <Box key={index}>
                      <CheckoutItem itemProduct={product} />
                      <Divider mt="10px" w="95%" />
                    </Box>
                  );
                })
              : null}
          </Grid>
          <Box mr={10} pb={20}>
            <Summary />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
