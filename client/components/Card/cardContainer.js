import React from "react";
import Card from "./card";
import { Grid, Flex, Box } from "@chakra-ui/react";

import {useSelector } from "react-redux";

export default function CardContainer() {
  const products = useSelector((state) => state.cartReducer.products);

  return (
    <>
      <Flex justifyContent="center">
        <Box w="90%">
          <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)">
            {products ? (
              products.map((p) => {
                return (
                  <div key={p.id}>
                    <Card p={p} />
                  </div>
                );
              })
            ) : (
              <p>No hay productos cargados</p>
            )}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}
