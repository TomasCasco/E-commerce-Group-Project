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
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQty,
  subtractItemQty,
} from "../../redux/cart/cartActions";

export default function CartItem({ data }) {
  const dispatch = useDispatch();
  let qty = data.qty;

  return (
      <Flex
        w="full" alignItems="center" justifyContent="center"
        bg={useColorModeValue("white", "gray.800")}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
          <Box>
            <Image src={data.image} />
          </Box>

          <Box >
            <Box m="10" fontSize="xl" fontWeight="semibold" lineHeight="5">{data.name}</Box>
            <Box m="10" fontSize="xs" fontWeight="" lineHeight="4">{data.description}</Box>
            <Box m="10" fontWeight="semibold">${data.price * data.qty}.00</Box>
          </Box>


        <Grid align="center" mr="4"> 
          <div>
                <Flex direction="colum" justifyContent="center" mt="4" mb="16">
                    <Box mt="2" mr="2" cursor="pointer" onClick={() => dispatch(addItemQty(data.id))}>+</Box>
                    <Box pl="3" pr="3" pt="1" pb="1" border="1px solid black" borderRadius="100" type="text" value={qty}>{qty}</Box>
                    <Box mt="2" ml="2" cursor="pointer" disabled={qty === 1} onClick={() => dispatch(subtractItemQty(data.id))}>-</Box>
                </Flex>
            </div>
                <div>
                    <Box onClick={() => dispatch(removeFromCart(data.id))}>Borrar</Box>
                </div>
        </Grid>
      </Flex>
  );
}
