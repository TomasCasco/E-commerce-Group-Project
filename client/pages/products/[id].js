import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import ProductsHome from "../../components/ProductsHome";
import SpinnerComponent from "../../components/Spinner/Spinner";
import { getProductById } from "../../redux/products/productsActions";
import { addItemQty, addToCart } from "../../redux/cart/cartActions";

export default function Home(data) {
  const product = useSelector((state) => state.productsReducer.productById);
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getProductById(data.id));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [product]);

  if (!product._id) {
    return (
      <Container alignContent={"center"} justifyContent="center">
        Product Not found
      </Container>
    );
  }
  const addCart = () => {
    if (cart.some((el) => el.product._id === data._id)) {
      dispatch(addItemQty(data._id));
    } else {
      dispatch(addToCart(data));
    }
  };

  return (
    <>
      <NavBar />
      <Flex align={"center"} justify="center" padding={"100px"}>
        {loading ? (
          <SpinnerComponent />
        ) : (
          <Container maxW={"7xl"}>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 18, md: 24 }}
            >
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={`${product.image}`}
                  fit={"contain"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                  p="auto"
                  border={"1px solid"}
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={"header"}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                    textTransform="capitalize"
                  >
                    {product.name}
                  </Heading>
                </Box>

                <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
                  <VStack
                    spacing={{ base: 4, sm: 6 }}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                      />
                    }
                  >
                    <Text
                      color={useColorModeValue("gray.500", "gray.400")}
                      fontSize={"2xl"}
                      fontWeight={"300"}
                    >
                      {product.description}
                    </Text>
                    <Text></Text>
                  </VStack>
                </Stack>
                <SimpleGrid columns={{ base: 2 }}>
                  <Text
                    color={useColorModeValue("gray.900", "gray.400")}
                    fontWeight={300}
                    fontSize={"3xl"}
                  >
                    $ {product.price}
                  </Text>
                  <Button>add to favorites</Button>
                </SimpleGrid>
                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("gray.900", "gray.300")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  onClick={addCart}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Add to cart
                </Button>
              </Stack>
            </SimpleGrid>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <ProductsHome />
            </Stack>
          </Container>
        )}
      </Flex>
      <Footer />
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { id } = query;
  return { id };
};
