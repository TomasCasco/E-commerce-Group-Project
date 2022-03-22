import { useSelector } from "react-redux";
import { Container, Flex, Heading, Avatar, Text, Icon, Link, Box, useColorModeValue, Button, Center} from "@chakra-ui/react";
import { FiUser, FiEdit2, FiSmile } from "react-icons/fi";


export default function MyProfile() {
  const user = useSelector(state=>state.usersReducer.user);

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
                    <Icon as={FiSmile} mb="10" fontSize="6xl" color="blue.200" alignItems={"center"}/>
                  </Center>
                
                  <Text as='u' color="blue.500"> Username:</Text> {user.username} 
                  {/* <Text d="inline">
                    <Link> <Icon as={FiEdit2} fontSize="medium" color={"#44b8fc !important"}/></Link>
                  </Text> */}
                    <br />        
                  <Text as='u' color="blue.500"> email:</Text> {user.email} 
                  {/* <Text d="inline">
                    <Link> <Icon as={FiEdit2} fontSize="medium" color={"#44b8fc !important"}/></Link>
                  </Text> */}
                                     
                </Box>
            </Flex>
      </Box>
    </Flex>
    </Container>
  );
}

