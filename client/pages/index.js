import CaptionCarousel from "../components/Carousel/Carousel.js";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer.tsx";
import { bannerCards } from "../assets/images.js";
import ProductsHome from "../components/ProductsHome/index.js";
import Popup from '../components/Chat/Popup/Popup'
import { Flex } from "@chakra-ui/react";
import Nav from "../components/Navbar/NavResponsive.js";

export default function Home() {
  return (
    <>
      <NavBar />
      <Nav />
      <CaptionCarousel slides={bannerCards} />
      <ProductsHome />
      <Footer />
      <Flex position='fixed' bottom='5' right='-10'>
        <Popup />
      </Flex>
    </>
  );
}
