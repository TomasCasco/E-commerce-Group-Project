import React from "react";
import Card from "./card";
import { Grid, Flex, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import SpinnerComponent from "../Spinner/Spinner";

export default function CardContainer(props) {
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const data = useSelector((state) => state.productsReducer.products);

  if (loadingData) {
    return <SpinnerComponent />;
  }

  if (!loadingData && data.length === 0) {
    return <Box padding={"100px"}>Products not found</Box>;
  }

  return (
    <Box padding={"100px"}>
      <Flex justify={"center"} flexDir={"column"} align="flex-end">
        <Box w="100%">
          <SimpleGrid minChildWidth="300px">
            {data
              ? data.map((data) => {
                  return (
                    <Grid key={data._id}>
                      <Card data={data} />
                    </Grid>
                  );
                })
              : null}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
