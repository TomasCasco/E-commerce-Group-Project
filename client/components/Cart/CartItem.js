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
    dispatch(removeFromCart(product._id));
  };

  const dispatchAddItemQty = () => {
    dispatch(addItemQty(product._id));
  };

  const dispatchSubstracItemQty = () => {
    dispatch(subtractItemQty(product._id));
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      padding={"30px"}
      textAlign="center"
      maxWidth={"1000px"}
    >
      <Box>
        <Image src={product.image} maxWidth={"300px"} maxHeight="200px" />
      </Box>

      <Box>
        <Box
          m="10"
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="5"
          maxWidth={"200px"}
        >
          {product.name}
        </Box>
        <Box m="10" fontSize="xs" fontWeight="" lineHeight="4">
          {product.description}
        </Box>
        <Box m="10" fontWeight="semibold" fontSize={"large"}>
          ${product.price * qty}
        </Box>
      </Box>

      <Grid align="center" mr="4">
        <div>
          <Flex direction="colum" justifyContent="center" mt="4" mb="16">
            <Box
              mt="2"
              mr="2"
              cursor="pointer"
              onClick={dispatchAddItemQty}
              fontSize="x-large"
            >
              +
            </Box>
            <Box
              pl="3"
              pr="3"
              pt="1"
              pb="1"
              border="1px solid black"
              borderRadius="100"
              type="text"
              value={qty}
              fontSize="x-large"
            >
              {qty}
            </Box>
            <Box
              mt="2"
              ml="2"
              cursor="pointer"
              onClick={dispatchSubstracItemQty}
              fontSize="x-large"
            >
              -
            </Box>
          </Flex>
        </div>
        <div>
          <Box onClick={dispatchRemoveFromCart} fontSize="large">
            <button>Delete</button>
          </Box>
        </div>
      </Grid>
    </Flex>
  );
}
