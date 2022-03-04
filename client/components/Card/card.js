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
// import { addToWishList } from "../../redux/Wishlist/WishlistActions";

const data = {
    id: 1,
    stock: 0,
    imageURL:'https://media.kingston.com/hyperx/features/hx-features-keyboard-alloyfpspro-litup.jpg',
    name: 'HyperX Alloy FPS Pro Gaming Keyboard',
    description: 'Mechnical Gaming Keyboard tenkeyless, with detachable USB-C cable, keys with radiant lighting effects.',
    price: 45,
};



export default function Card({p}) {
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
        
          {/* <Box position="absolute" onClick={() => alert("Add To Wish List")}>🧡</Box>  dispatch(addToWishList(p.id)) */}
        <Image
          src={p.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              lineHeight='5'
              >
              {p.name}
            </Box>
            </Flex>
            <Flex mt="6"  alignContent="center">
            <Box
              fontSize="xs"
              fontWeight=""
              
              lineHeight="4"
              >
              {p.description} 
            </Box>
          </Flex>

          <Flex mt='5' justifyContent="space-between" alignContent="center">
            
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="sm">
                $
              </Box>
              {p.price.toFixed(2)}
            </Box>
            <Box fontSize="xl" color={useColorModeValue('')}>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'.8em'}>
                  
              <chakra.a onClick={() => dispatch(addToCart(p.id))} href={'#'} display={'flex'}>
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
