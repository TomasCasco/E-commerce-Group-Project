import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartReducer.cart);

  return (
    <Flex direction="column" justify="center" align="center">
      <Box fontSize="xl"
              fontWeight="semibold"
              lineHeight='5'>Mis productos
      {` (` + data
            .map((el) => el.qty)
            .reduce((prev, curr) => prev + curr, 0) + ` items) `}
        </Box>

      <div>
        <Flex justify="center" align="center" direction="row">
          <Box w="72%">
              {data ? (
                data.map((data, index) => {
                  return (
                    <Box  m="20" key={index}>
                      <CartItem data={data} />
                    </Box>
                  );
                })
              ) : (
                <p>No hay productos cargados</p>
              )}
          </Box>
          
          <Box m="1" h="200" w="300"
                bg={useColorModeValue('white', 'gray.800')}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">

        <Grid ml="3" mr="3" align="center" justify="center">
            <Box m="8">CARRITO</Box>
            <Flex>
                <Box mb="8" mr="10">
                    TOTAL{` (` + data
                    .map((el) => el.qty)
                    .reduce((prev, curr) => prev + curr, 0) + ` items) `}
                </Box>
                <Box>
                    {`$` +  data
                    .map((el) => el.qty * el.price)
                    .reduce((prev, curr) => prev + curr, 0) + `.00 `}
                </Box>
            </Flex>

            <Box>
                <Box w="20" border="1px solid black" borderRadius="20">COMPRAR</Box>
            </Box>
            </Grid>
        </Box>
    </Flex>
      </div>
      

    </Flex>
  );
}
