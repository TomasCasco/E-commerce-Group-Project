import { Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import SpinnerComponent from "../../components/Spinner/Spinner";
import { getProductById } from "../../redux/products/productsActions";

export default function Home({ id }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productsReducer.productById);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getProductById(id));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [product]);

  if (!product._id) {
    return (
      <Container alignContent={"center"} justifyContent="center">
        Not found
      </Container>
    );
  }

  return (
    <>
      <NavBar />
      <Flex align={"center"} justify="center" padding={"100px"}>
        {loading ? (
          <SpinnerComponent />
        ) : (
          <Container>
            <Flex flexDir={"column"}>
              <Heading>
                {product.name}
                <Image src={product.image} maxW="50%" maxH={"50%"} />
              </Heading>
              <Text>{product.description}</Text>
            </Flex>
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
