import React from "react";
import Card from "./card";
import { Grid, Flex, Box, Button } from "@chakra-ui/react";
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
          <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)">
            {data
              ? data.map((data) => {
                  return (
                    <div key={data._id}>
                      <Card data={data} />
                    </div>
                  );
                })
              : null}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}
