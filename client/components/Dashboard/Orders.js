import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Flex, Text, Icon, Box, useColorModeValue, Center} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import Cookie from "js-cookie";
import { getDetailBills } from "../../redux/checkout/checkoutActions"
import { getBills } from "../../redux/checkout/checkoutActions";
import { client } from "../../apolloClient/apolloClient";
import { queryBills } from "../../apolloClient/querys";

export default function Orders() {
  const bills = useSelector(state=>state.checkoutReducer?.bills);
  const [bill, setBill] = useState([]);

  const dispatch = useDispatch();

  const handleGetBill = async () => {
    const { data } = await client.query({
      query: queryBills,
      variables: {
        userId: JSON.parse(Cookie.get("user")).id 
      }
        {
          userId,
          products,
          status,
          total,
        }
    });

  };

  useEffect(() => {
    dispatch(getDetailBills(JSON.parse(Cookie.get("user")).id));
  }, [dispatch])


  return (
    <Container>
       <Flex
          w="full"
          alignItems="center"
          justifyContent="center"
          position={"relative"}
        >
          <Box
            m="1"
            bg={useColorModeValue("white", "blue")}
            maxW="650"
            h={"-webkit-fit-content"}
            w={[1000]}
            padding="100px"
            borderWidth="3px"
            rounded="lg"
            shadow="lg"
            display={"flex"}
            justifyContent={"center"}
            
          >
            <Flex
                mt="1"
                justifyContent="space-between"
                alignContent="center"
                textAlign={"center"}
                flexDir="column"
                alignItems="center"
                w={"-webkit-max-content"}
                height="-webkit-fit-content"
              >
                  <Box fontSize="3xl" fontWeight="semibold" lineHeight="10" >
                    <Center>
                      <Icon as={FiShoppingBag} mb="10" fontSize="6xl" color="blue.200" alignItems={"center"}/>
                    </Center>
                  
                      <Text as='u' color="blue.500"> ID:</Text> {bills?.userId} 
                        <br />        
                      <Text as='u' color="blue.500"> Products:</Text> {bills?.products} 
                      <br />        
                      <Text as='u' color="blue.500"> Total:</Text> {bills?.products.total} 
                      <br />        
                      <Text as='u' color="blue.500"> Status:</Text> {bills?.products.status}      
                  </Box> 
                  
            </Flex>
      </Box>
    </Flex>
    </Container>
  );
}
