import React from "react";
import {
  Flex,
  Grid,
  Box,
  Image,
  Button,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FaTrash, FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { Divider } from '@chakra-ui/react'

import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQty,
  subtractItemQty,
} from "../../redux/cart/cartActions";

export default function CheckoutItem({ itemProduct }) {
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
    <Flex align="center" ml="1" pr={"30px"} pt="30px" textAlign="center">
      <Box minWidth={"220px"}>
        <Image src={product.image} maxWidth={"220px"} maxHeight="120px"/>
      </Box>

        <Box fontSize="19px" fontWeight="semibold" lineHeight="5" maxWidth={"250px"} minWidth={"250px"}>
          {product.name}
        </Box>
        <Box ml="4" mr="6" mb="18px" fontWeight="semibold" fontSize={"m"}>
          ${product.price}
        </Box>
        
          <Flex direction="colum" justifyContent="center" mt="4" mb="8">
            <Box 
              cursor="pointer"
              onClick={dispatchAddItemQty}
              fontSize="x-large"
              pl="3"
              pr="3"
              pt="2"
              border="1px solid #44B8FC"
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              color="white"
              backgroundColor={"#44B8FC"}
            >
              <FaChevronUp />
            </Box >
            <Box
              pl="3"
              pr="3"
              pt="1"
              pb="1"
              border="1px solid #44B8FC"
              type="text"
              value={qty}
              fontSize="x-large"
            >
              {qty}
            </Box>
            <Box 
              cursor="pointer"
              onClick={dispatchSubstracItemQty}
              fontSize="x-large"
              pl="3"
              pr="3"
              pt="3"
              border="1px solid #44B8FC"
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              color="white"
              backgroundColor={"#44B8FC"}
            >
              <FaChevronDown />
            </Box>
          </Flex>
          <Box m="10" fontWeight="semibold" fontSize={"m"} mb="50px">
          ${product.price * qty}
           </Box>
          <Box onClick={dispatchRemoveFromCart} fontSize="large" mb="12px" cursor="pointer"><FaTrash /> </Box>
    </Flex>
  );
}