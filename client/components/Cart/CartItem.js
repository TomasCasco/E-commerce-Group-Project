import React from "react";
import { Flex, Box, Button, Image, useColorModeValue } from "@chakra-ui/react";
import { FaTrash, FaChevronUp, FaChevronDown } from "react-icons/fa";

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
          textTransform={"capitalize"}
        >
          {product?.name}
        </Box>
        <Box mt="2" fontWeight="semibold" fontSize={"large"}>
          ${product?.price * qty}
        </Box>
        <Flex direction="colum" justifyContent="center" mt="4" mb="2">
          <Box
            cursor="pointer"
            onClick={dispatchSubstracItemQty}
            fontSize="x-large"
            pl="3"
            pr="3"
            pt="1"
            pb="1"
            border="1px solid #44B8FC"
            borderTopLeftRadius="10px"
            borderBottomLeftRadius="10px"
            color="white"
            backgroundColor={"#44B8FC"}
            height="35px"
          >
            <FaChevronDown />
          </Box>
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
          <Box
            cursor="pointer"
            onClick={product.stock > qty ? dispatchAddItemQty : null}
            fontSize="x-large"
            pl="3"
            pr="3"
            pt="1"
            pb="1"
            border="1px solid #44B8FC"
            borderTopRightRadius="10px"
            borderBottomRightRadius="10px"
            color="white"
            backgroundColor={"#44B8FC"}
            height="35px"
          >
            <FaChevronUp />
          </Box>
        </Flex>
        <Box onClick={dispatchRemoveFromCart} color="#c53030" fontSize="large">
          <Button rightIcon={<FaTrash />}>Delete</Button>
        </Box>
      </Box>
    </Flex>
  );
}
