import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Flex, Heading, Avatar, Text, Icon, Link, Box, useColorModeValue, Button, Center} from "@chakra-ui/react";

import {
  FiHome,
  FiHeart,
  FiShoppingCart,
  FiSmile,
  FiUser,
} from "react-icons/fi";


export default function MyProfile() {
  const [{ username, email, id }, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(JSON.parse(Cookies.get("user")));
  }, []);

  return (
    <div>
       <Flex
          w="full"
          alignItems="center"
          justifyContent="center"
          position={"relative"}
        >
          <Box
            m="50"
            bg={useColorModeValue("white", "blue")}
            maxW="lg"
            h={"-webkit-fit-content"}
            w={"-webkit-fit-content"}
            padding="100px"
            borderWidth="3px"
            rounded="lg"
            shadow="lg"
            display={"flex"}
            flexDirection="column"
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
                <Box fontSize="xl" fontWeight="semibold" lineHeight="10" >
                  <Center>
                  <Button mb="10" color="blue.200" display={["none", "none", "flex", "flex", "flex"]} align="center">
                    <Icon as={FiUser} fontSize="4xl" />
                  </Button>
                  </Center>
                    <Text as='u' color="blue.500" >Username:</Text> <Text>{username}</Text>
                    
                    <Text as='u' color="blue.500" >ID:</Text> <Text>{id}</Text>
                    
                    <Text as='u' color="blue.500" >email:</Text> <Text>{email}</Text>
                                     
                </Box>
            </Flex>
      </Box>
    </Flex>








      
    </div>
  );
}
