import React from "react";
import Card from "./card";
import { Grid, Flex, Box, Text, Button, Container } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import SpinnerComponent from "../Spinner/Spinner";
import Router  from "next/router";

export default function CardContainer({searchValue}) {
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const data = useSelector((state) => state.productsReducer.products);

  if (loadingData)
    return (
      <SpinnerComponent/>
    );

  if (searchValue && data.length === 0)
    return (
      <Flex flexDirection="column" justify={"center"} align="center" padding={"100px"}>
      <Flex
        justify={"center"}
        align="center"
        margin={"0 auto"}
        alignItems="center"
        padding={"10px"}
      >
        <Text padding={"10px"} fontSize="x-large" display={"flex"}>
          Resultados para: "{searchValue}"
          <Button onClick={()=>Router.push("/products")} marginLeft="20px">X</Button>
        </Text>
      </Flex>
        <Text fontSize="6xl">No se encontraron resultados.</Text>
      </Flex>
    );

  return (
    <Box padding={"100px"}>
      <Flex
        justifyContent={"center"}
        flexDirection="column"
        margin={"0 auto"}
        alignItems="center"
        paddingBottom={"30px"}
        hidden={!searchValue?true:false}
      >
        <Flex align="center" justify={"center"}>
          <Text padding={"10px"} fontSize="x-large">
            Resultados para: "{searchValue}"
          </Text>
          <Button onClick={()=>Router.push("/products")} marginLeft="20px">X</Button>
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
    </Box>
  );
}
