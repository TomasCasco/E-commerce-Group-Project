import React from "react";
import { Grid, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/react";
import Summary from "./summary";

export default function Checkout() {
  const data = useSelector((state) => state.cartReducer.cart);

  return (
    <Box
      maxWidth="95%"
      pb="40px"
      pl="20px"
      pt="20px"
      ml="30px"
      mt="20px"
      pr="10px"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Box fontSize="xx-large" fontWeight="semibold" lineHeight="5">
        Shopping Cart
        {` (` +
          data.map((el) => el.qty).reduce((prev, curr) => prev + curr, 0) +
          ` items) `}
      </Box>

      <Flex>
        <Grid>
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
        <Summary />
      </Flex>
    </Box>
  );
}
