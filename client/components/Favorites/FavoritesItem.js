import { Flex, Box, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../redux/favorites/favoritesActions";
import { FaTrash } from "react-icons/fa";
import Router from "next/router";

export default function FavoritesItem({ itemProduct }) {
  const dispatch = useDispatch();

  const dispatchRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(itemProduct._id));
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      textAlign="center"
      maxWidth={"500px"}
      maxHeight="270px"
      padding={"40px"}
    >
      <Box>
        <Image
          onClick={() => Router.push(`/products/${itemProduct._id}`)}
          cursor="pointer"
          src={itemProduct.image}
          maxWidth={"200px"}
          maxHeight="100px"
          borderRadius={"1rem"}
        />
      </Box>

      <Box mr="10px" maxWidth={"270px"}>
        <Box
          fontSize="15px"
          fontWeight="semibold"
          lineHeight="5"
          textAlign="left"
          textTransform={"capitalize"}
          onClick={() => Router.push(`/products/${itemProduct._id}`)}
          cursor="pointer"
        >
          {itemProduct.name}
        </Box>
        <Flex direction="colum" justifyContent="center" mt="4" mb="2"></Flex>
        <Box
          onClick={dispatchRemoveFromFavorites}
          color="#c53030"
          fontSize="large"
        >
          <Button rightIcon={<FaTrash />}>Delete</Button>
        </Box>
      </Box>
    </Flex>
  );
}
