import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";


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
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            h={"300px"}
            w={"-webkit-fit-content"}
            padding="100px"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            position="relative"
          >
            <Flex
                mt="1"
                justifyContent="space-between"
                alignContent="center"
                textAlign={"center"}
                flexDir="column"
                alignItems="center"
              >
                <Box fontSize="xl" fontWeight="semibold" lineHeight="10" >
                  <text>
                    <h1>Username: {username}</h1>
                    <p>ID: {id}</p>
                    <p>email: {email}</p>
                  </text>  
                </Box>
            </Flex>
      </Box>
    </Flex>








      
    </div>
  );
}
