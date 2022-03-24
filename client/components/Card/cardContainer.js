import React from "react";
import Card from "./card";
import { Grid, Flex, Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import SpinnerComponent from "../Spinner/Spinner";
import Link from "next/link";

export default function CardContainer(props) {
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const data = useSelector((state) => state.productsReducer.products);

  if (loadingData) {
    return <SpinnerComponent />;
  }

  if (!loadingData && data.length === 0) {
    return (
      <>
        <Box mx={20} my={20} h={"45vh"}>
          <Text fontSize="2em" mb={20}>
            The product you are looking for is not available
          </Text>
          <Link href="/products">
            <Button bg="#44b8fc">go back to products</Button>
          </Link>
        </Box>
      </>
    );
  }

  return (
    <Box padding={"100px"}>
      <Flex justify={"center"} flexDir={"column"} align="flex-end">
        <Box w="100%">
          <SimpleGrid minChildWidth="300px" spacing={30}>
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
