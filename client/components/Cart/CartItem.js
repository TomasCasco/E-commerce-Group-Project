import React from "react";
import { Flex, Box, Button, Image, useColorModeValue } from "@chakra-ui/react";
import { FaTrash, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Router from "next/router";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQty,
  subtractItemQty,
} from "../../redux/cart/cartActions";

export default function CartItem({ itemProduct }) {
  const dispatch = useDispatch();

  const { product, qty } = itemProduct;

  const dispatchRemoveFromCart = () => {
    dispatch(removeFromCart(product?._id));
  };

  const dispatchAddItemQty = () => {
    dispatch(addItemQty(product?._id));
  };

  const dispatchSubstracItemQty = () => {
    dispatch(subtractItemQty(product?._id));
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
          onClick={() => Router.push(`/products/${product._id}`)}
          cursor="pointer"
          src={product?.image}
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
          onClick={() => Router.push(`/products/${product._id}`)}
          cursor="pointer"
          textTransform={"capitalize"}
        >
          {product?.name}
        </Box>
        <Box
          mt="2"
          fontWeight="semibold"
          fontSize={"large"}
          onClick={() => Router.push(`/products/${product._id}`)}
          cursor="pointer"
        >
          ${product?.price * qty}
        </Box>
        <Flex direction="colum" justifyContent="center" mt="4" mb="2">
          <Button
            cursor="pointer"
            onClick={dispatchSubstracItemQty}
            fontSize="x-large"
            pl="3"
            pr="3"
            pt="1"
            pb="1"
            border="1px solid #44B8FC"
            borderRadius="10px 0 0 10px"
            color="white"
            backgroundColor={"#44B8FC"}
            height="35px"
          >
            <FaChevronDown />
          </Button>
          <Box
            pl="3"
            pr="3"
            pt="-2"
            border="1px solid #44B8FC"
            type="text"
            value={qty}
            fontSize="x-large"
            height="35px"
          >
            {qty}
          </Box>
          <Button
            cursor="pointer"
            onClick={product.stock > qty ? dispatchAddItemQty : null}
            fontSize="x-large"
            pl="3"
            pr="3"
            pt="1"
            pb="1"
            border="1px solid #44B8FC"
            borderRadius="0 10px  10px 0"
            color="white"
            backgroundColor={"#44B8FC"}
            height="35px"
          >
            <FaChevronUp />
          </Button>
        </Flex>
        <Box onClick={dispatchRemoveFromCart} color="#c53030" fontSize="large">
          <Button rightIcon={<FaTrash />}>Delete</Button>
        </Box>
      </Box>
    </Flex>
  );
}
