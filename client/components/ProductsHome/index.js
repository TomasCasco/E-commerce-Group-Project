import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Card from "../Card/card";
import SpinnerComponent from "../Spinner/Spinner";
import { getAllProducts } from "../../redux/products/productsActions";

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default function ProductsHome() {
  const data = useSelector((state) => state.productsReducer.products);
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  if (!loadingData && data.length>3){
    return (
      <Flex
        justifyContent="center"
        flexDir={"column"}
        align="center"
        h="100%"
        mt={20}
        mb={10}
      >
        <Flex mb={10}>
          <Heading>Destacados</Heading>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" rounded={10}>
          {
            getRandom(data, 4).map((data) => {
              return (
                <Box key={data._id}>
                  <Card data={data} />
                </Box>
              );
            })}
        </Flex>
      </Flex>
    );
  }
  else {
    return <SpinnerComponent />;
  }
}
