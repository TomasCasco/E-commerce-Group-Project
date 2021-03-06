import React from "react";
import { useSelector } from "react-redux";
import FavoritesItem from "./FavoritesItem";

import { Flex, Box, Text, Divider } from "@chakra-ui/react";

const Favorites = () => {
  const data = useSelector((state) => state.favoritesReducer.favorites);

  return (
    <Flex
      display={"flex"}
      direction="column"
      justify="center"
      align="center"
      maxWidth="900px"
      padding={"10px"}
    >
      <Box fontSize="2xl" fontWeight="bold" paddingBottom="20px" lineHeight="5">
        Favorites
        <Divider mt="10px" w="95%" />
      </Box>

      <Flex justify="center" align="center" direction="column">
        <Box
          w="100%"
          maxHeight="280px"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#44B8FC",
              borderRadius: "24px",
            },
          }}
        >
          {data.length !== 0 ? (
            data.map((product, index) => {
              return (
                <Box m="20" key={index} margin="0" marginBottom={"20px"}>
                  <FavoritesItem itemProduct={product} />
                </Box>
              );
            })
          ) : (
            <Text fontWeight="semibold">Add products to favorite</Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Favorites;
