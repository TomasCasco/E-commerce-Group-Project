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
  import { removeFromFavorites } from "../../redux/favorites/favoritesActions";
  
  
  export default function FavoritesItem({data}) {
    const dispatch = useDispatch();

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

           <Box>     {/*Grid justify="center" align="center" */}
            <Box m="10" fontSize="xl" fontWeight="semibold" lineHeight="5">{data.name}</Box>
            <Box m="10" fontWeight="semibold">${data.price}.00</Box>
            <Box onClick={() => dispatch(removeFromFavorites(data.id))}>Borrar</Box>
          </Box>

      </Flex>
  );
  }
  