import React from "react";
import {
  Flex,
  Grid,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FaTrash, FaChevronUp, FaChevronDown, FaMinus, FaPlus } from 'react-icons/fa'

import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQty,
  subtractItemQty,
} from "../../redux/cart/cartActions";

export default function CartItem({ itemProduct }) {
  const dispatch = useDispatch();

  const { product, qty } = itemProduct;

  const dispatchRemoveFromCart=()=>{
    dispatch(removeFromCart(product._id))
  }

  const dispatchAddItemQty=()=>{
    dispatch(addItemQty(product._id))
  }

  const dispatchSubstracItemQty=()=>{
    dispatch(subtractItemQty(product._id))
  }



  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      textAlign="center"
      maxWidth={"500px"} maxHeight="270px"
    >
      <Box>
        <Image src={product.image} maxWidth={"200px"} maxHeight="100px"/>
      </Box>

      <Box mr="10px" maxWidth={"270px"}>
        <Box  fontSize="15px" fontWeight="semibold" lineHeight="5" textAlign="left">
          {product.name}
        </Box>
        <Box mt="2" fontWeight="semibold" fontSize={"large"}>
          ${product.price * qty}
        </Box>
        <Flex direction="colum" justifyContent="center" mt="4" mb="2">
            <Box
              cursor="pointer"
              onClick={dispatchAddItemQty}
              fontSize="x-large"
              pl="3"
              pr="3"
              pt="1"
              pb="1"
              border="1px solid rgba(197, 48, 48, .3)"
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              color="white"
              backgroundColor={"#c53030"}
              height="35px"
            >
              <FaChevronUp />
            </Box>
            <Box
              pl="3"
              pr="3"
              pt="-2"
              border="1px solid rgba(197, 48, 48, .3)"
              type="text"
              value={qty}
              fontSize="x-large"
              height="35px"
            >
              {qty}
            </Box>
            <Box
              cursor="pointer"
              onClick={dispatchSubstracItemQty}
              fontSize="x-large"
              pl="3"
              pr="3"
              pt="1"
              pb="1"
              border="1px solid rgba(197, 48, 48, .3)"
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              color="white"
              backgroundColor={"#c53030"}
              height="35px"
            >
              <FaChevronDown />
            </Box>
          </Flex>
          <Box onClick={dispatchRemoveFromCart} color="#c53030" fontSize="large">
            <button><Box>Delete</Box></button>
          </Box>
      </Box>
    </Flex>
  );
}