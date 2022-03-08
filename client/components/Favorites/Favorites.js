import React from 'react'
import { useSelector } from 'react-redux'
import FavoritesItem from './FavoritesItem'

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


const Favorites = () => {
    const data = useSelector((state) => state.favoritesReducer.favorites);

  return (
    <Flex direction="column" justify="center" align="center">
      <Box fontSize="xl"
              fontWeight="semibold"
              lineHeight='5'>Favoritos
      {/* {` (` + data
            .map((el) => el.qty)
            .reduce((prev, curr) => prev + curr, 0) + ` items) `} */}
        </Box>

        <Flex justify="center" align="center" direction="row">
          <Box w="72%">
              {data ? (
                data.map((data, index) => {
                  return (
                    <Box  m="20" key={index}>
                      <FavoritesItem data={data} />
                      {/* <h1>{data.name}</h1> */}
                    </Box>
                  );
                })
              ) : (
                <p>No hay productos cargados</p>
              )}
          </Box>
          </Flex>
          </Flex>
  )
}

export default Favorites