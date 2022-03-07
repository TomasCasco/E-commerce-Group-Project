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
} from '@chakra-ui/react';
import { IoMdCart } from "react-icons/io";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import { addToFavorites } from "../../redux/favorites/favoritesActions";


export default function Card({data}) {
  const dispatch = useDispatch();

  return (
    <Flex  w="full" alignItems="center" justifyContent="center">
      <Box
        m="5"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        
        <Box position="absolute" onClick={() => dispatch(addToFavorites(data.id))}>🧡</Box>  {/* alert("Add To Wish List") */}
        <Image
          src={data.image}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              lineHeight='5'
              >
              {data.name}
            </Box>
            </Flex>
            <Flex mt="6"  alignContent="center">
            <Box
              fontSize="xs"
              fontWeight=""
              
              lineHeight="4"
              >
              {data.description} 
            </Box>
          </Flex>

          <Flex mt='5' justifyContent="space-between" alignContent="center">
            
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="sm">
                $
              </Box>
              {data.price.toFixed(2)}
            </Box>
            <Box fontSize="xl" color={useColorModeValue('')}>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'.8em'}>
                  
              <chakra.a onClick={() => dispatch(addToCart(data.id))} href={'#'} display={'flex'}>
                <Icon   as={IoMdCart} h={5} w={5} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
            </Box>
          </Flex>
          <Box d="flex" alignItems="baseline">
            {!data.stock && (
              <Badge  mt='3' rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                No Stock
              </Badge>
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
