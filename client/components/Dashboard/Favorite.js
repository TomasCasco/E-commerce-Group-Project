import React from "react";
import { useSelector } from "react-redux";
import FavoritesItem from "../Favorites/FavoritesItem";
import { Container, Flex, Heading, Avatar, Text, Icon, Link, Box, useColorModeValue, Button, Center} from "@chakra-ui/react";
import { FiUser, FiEdit2, FiSmile, FiShoppingBag } from "react-icons/fi";



export default function Favorite() {
  
  const data = useSelector((state) => state.favoritesReducer.favorites);

  return (
    <Container>
       <Flex
          w="full"
          alignItems="center"
          justifyContent="center"
          position={"relative"}
        >
          <Flex justify="center" align="center" direction="column">
            <Box
              w="100%"
              maxHeight="620px"
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
              {data.length !== 0
                ? data.map((product, index) => {
                    return (
                      <Box m="20" key={index} margin="0" marginBottom={"20px"}>
                          <FavoritesItem itemProduct={product} />
                      </Box>
                    );
                  })
                : null}
            </Box>
          </Flex>
      </Flex>
    </Container>
  );
}
