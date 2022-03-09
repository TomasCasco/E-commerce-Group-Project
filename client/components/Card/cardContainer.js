import React, { useEffect } from "react";
import Card from "./card";
import { Grid, Flex, Box, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import {
  getAllProducts,
  resetSearch,
} from "../../redux/products/productsActions";

export default function CardContainer() {
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const data = useSelector((state) => state.productsReducer.products);
  const searchValue = useSelector((state) => state.productsReducer.searchValue);
  const searchBoolean = useSelector((state) => state.productsReducer.search);

  const dispatch = useDispatch();

  useEffect(() => {
    return  dispatch(resetSearch());
  }, []);

  const dispatchResetSearch = () => {
    dispatch(resetSearch());
    dispatch(getAllProducts());
  };

  if (loadingData)
    return (
      <Flex justifyContent={"center"} paddingTop="150px">
        {
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      </Flex>
    );

  if (searchBoolean && data.length === 0)
    return (
      <Flex flexDirection="column" justify={"center"} align="center">
      <Flex
        justify={"center"}
        align="center"
        margin={"0 auto"}
        alignItems="center"
        padding={"10px"}
      >
        <Text padding={"10px"} fontSize="x-large">
          Resultados para: "{searchValue}"
          <Button onClick={dispatchResetSearch}>X</Button>
        </Text>
      </Flex>
        <Text fontSize="6xl">No se encontraron resultados.</Text>
      </Flex>
    );

  return (
    <>
      <Flex
        justifyContent={"center"}
        flexDirection="column"
        margin={"0 auto"}
        alignItems="center"
        padding={"10px"}
        hidden={!searchBoolean}
      >
        <Flex align="center" justify={"center"}>
          <Text padding={"10px"} fontSize="x-large">
            Resultados para: "{searchValue}"
          </Text>
          <Button onClick={dispatchResetSearch}>X</Button>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
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
    </>
  );
}
