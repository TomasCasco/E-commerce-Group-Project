import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    Tooltip,
    useToast,
  } from "@chakra-ui/react";
  
  import {  FiUser } from "react-icons/io";
  import { useDispatch, useSelector } from "react-redux";
  
  export default function MyProfile ({ data }) {
    
  
    const dispatch = useDispatch();
  
  
    return (
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        position={"relative"}
      >
        <Box
          m="5"
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          h={"400px"}
          padding="15px"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          position="relative"
        >
          <Box position="absolute">
             <Icon as={FiUser} fontSize="2xl" />
          </Box>
          
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="x-large"
                fontWeight={"bold"}
                lineHeight="5"
                fontFamily={"sans-serif"}
                margin="10px auto"
              >
                {data.name}
              </Box>
            </Flex>
  
            <Flex
              mt="1"
              justifyContent="space-between"
              alignContent="center"
              textAlign={"center"}
            >
              <Box fontSize="xl" fontWeight="semibold" lineHeight="5">
                {data.name}
              </Box>
            </Flex>
  
            <Flex mt="6" alignContent="center">
              <Box fontSize="xs" fontWeight="" lineHeight="4">
                {data.description}
              </Box>
            </Flex>
  
            <Flex mt="5" justifyContent="space-between" alignContent="center">
              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="sm">
                  $
                </Box>
                {data.price}
              </Box>
              <Box fontSize="xl" color={useColorModeValue("")}>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={".8em"}
                >
                  <button onClick={addCart} href={"#"} display={"flex"}>
                    <Icon as={IoMdCart} h={5} w={5} alignSelf={"center"} />
                  </button>
                </Tooltip>
              </Box>
            </Flex>
            <Box d="flex" alignItems="baseline">
              {!data.stock && (
                <Badge
                  mt="3"
                  rounded="full"
                  px="2"
                  fontSize="0.8em"
                  colorScheme="red"
                >
                  No Stock
                </Badge>
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  }
  