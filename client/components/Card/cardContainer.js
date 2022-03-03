import React from 'react'
import Card from './card'
import {
    Grid,
    Flex,
    Box
} from '@chakra-ui/react'


export default function CardContainer() {
  return (<>
  <Flex justifyContent='center'>
    <Box w='60%'>

        <Grid 
            templateColumns='repeat(3,1fr)'
            templateRows='repeat(2,1fr)'
        >        
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
    </Box>
  </Flex>
  </>
  )
}

