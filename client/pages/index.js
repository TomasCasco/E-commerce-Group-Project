import CaptionCarousel from "../components/Carousel/Carousel.js";
import NavBar from "../components/Navbar/NavBar";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/products/productsActions";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer.tsx";
import { bannerCards } from "../assets/images.js";
import ProductsHome from "../components/ProductsHome/index.js";
import Popup from '../components/Chat/Popup/Popup'
import { Flex } from "@chakra-ui/react";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <NavBar />
      <CaptionCarousel slides={bannerCards} />
      <ProductsHome />
      <Footer />
      <Flex position='fixed' bottom='5' right='-10'>
        <Popup />
      </Flex>
    </>
  );
}
