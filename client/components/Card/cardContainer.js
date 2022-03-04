import React, { useEffect } from "react";
import Card from "./card";
import { Grid, Flex, Box } from "@chakra-ui/react";

import { gql, useQuery } from '@apollo/client'

import {useSelector } from "react-redux";

const getProducts = gql`query {
  getAllProducts {
    name
    brand
    description
    image
    price
    stock
  }
}
`

export default function CardContainer() {
  // const products = useSelector((state) => state.cartReducer.products);
 const {loading, error, data} = useQuery(getProducts)
 console.log(data)
 if (loading) return 'Loading...';
 if (error) return `Error! ${error.message}`;

  return (
    <>
      <Flex justifyContent="center">
        <Box w="90%">
          <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)">
            {data ? (
              data.getAllProducts.map((p) => {
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
