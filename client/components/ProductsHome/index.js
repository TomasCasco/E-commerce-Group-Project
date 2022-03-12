import React from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Card from "../Card/card";
import SpinnerComponent from "../Spinner/Spinner";

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

  if (loadingData) {
    return <SpinnerComponent />;
  }

  return (
    <Flex
      justifyContent="center"
      padding={"70px"}
      flexDir={"column"}
      align="center"
    >
      <Flex>
        <Heading pt={"10px"} pb="20px">
          Destacados
        </Heading>
      </Flex>
      <Flex>
        {data.length > 0 &&
          getRandom(data, 3).map((data) => {
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
