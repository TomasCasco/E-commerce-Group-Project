import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
  useToast,
  Button,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { IoMdCart } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { addItemQty, addToCart } from "../../redux/cart/cartActions";
import {
  removeFromFavorites,
  addToFavorites,
} from "../../redux/favorites/favoritesActions";

import Router from "next/router";

import { useEffect } from "react";

export default function Card({ data }) {
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  const cart = useSelector((state) => state.cartReducer.cart);
  const toast = useToast();

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favs", JSON.stringify(favorites));
  }, [cart, favorites]);

  const showToastCart = () => {
    return toast({
      title: "Success!",
      position: "top-right",
      description: "Item added to cart!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const noStockToast = () => {
    return toast({
      title: "No stock!",
      position: "top-right",
      description: "This product is out of stock!",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const showToastFav = (action) => {
    return toast({
      title: "Success!",
      position: "top-right",
      description: `Item ${action} to favorites!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const addCart = () => {
    if (cart.some((el) => el.product._id === data._id)) {
      dispatch(addItemQty(data._id));
      showToastCart();
    } else {
      dispatch(addToCart(data));
      showToastCart();
    }
  };

  const addFavourites = () => {
    if (favorites.some((el) => el._id === data._id)) {
      dispatch(removeFromFavorites(data._id));
      showToastFav("removed");
    } else {
      dispatch(addToFavorites(data));
      showToastFav("added");
    }
  };
  const isFavorite = () => {
    return favorites.some((el) => el._id === data._id);
  };

  return (
    <Flex w="100%" alignItems="center" justifyContent="center">
      <Box
        m="5"
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        h={"400px"}
        padding="15px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        display={"flex"}
        flexDirection="column"
        justifyContent={"space-between"}
        position="relative"
      >
        <Image
          src={data.image}
          maxH={"30%"}
          margin=" auto"
          onClick={() => Router.push(`/products/${data._id}`)}
          cursor="pointer"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between">
            <Text
              noOfLines={3}
              fontSize="xl"
              fontWeight={"semibold"}
              lineHeight="5"
              fontFamily={"sans-serif"}
              textTransform="capitalize"
              onClick={() => Router.push(`/products/${data._id}`)}
              cursor="pointer"
            >
              {data.name}
            </Text>
          </Flex>

          <Flex mt="5" justify={"space-between"} alignContent="center">
            <Box fontSize="xl" color={useColorModeValue("")}>
              <Tooltip
                label="Add to favorite"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={".8em"}
              >
                <button onClick={addFavourites} href={"#"} display={"flex"}>
                  <Icon
                    as={!isFavorite() ? AiOutlineHeart : AiFillHeart}
                    h={5}
                    w={5}
                  />
                </button>
              </Tooltip>
            </Box>
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg" mr={1}>
                $
              </Box>
              {data.price}
            </Box>
            <Box fontSize="xl" color={useColorModeValue("")}>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={".8em"}
              >
                <button
                  onClick={data.stock ? addCart : noStockToast}
                  href={"#"}
                  display={"flex"}
                >
                  <Icon as={IoMdCart} h={5} w={5} />
                </button>
              </Tooltip>
            </Box>
          </Flex>
          <Box d="flex" alignItems="baseline">
            {!data.stock && (
              <Badge
                mt="3"
                rounded="full"
                px="2"
                fontSize="0.8em"
                colorScheme="red"
              >
                No Stock
              </Badge>
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
