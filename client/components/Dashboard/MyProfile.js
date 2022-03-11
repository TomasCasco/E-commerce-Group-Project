import { useSelector } from "react-redux";
import { Container, Flex, Heading, Avatar, Text, Icon, Link, Box, useColorModeValue, Button, Center} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";


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
            maxW="lg"
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
                  <Button mb="10" size={"lg"} color="blue.200" display={["none", "none", "flex", "flex", "flex"]} align="center">
                    <Icon as={FiUser} fontSize="4xl" />
                  </Button>
                  </Center>
                    <Text as='u' color="blue.500" >Username:</Text> {user.username}     
                    <br />        
                    <Text as='u' color="blue.500" >email:</Text> {user.email}
                                     
                </Box>
            </Flex>
      </Box>
    </Flex>
    </Container>
  );
}
