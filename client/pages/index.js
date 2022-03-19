import CaptionCarousel from "../components/Carousel/Carousel.js";
import NavBar from "../components/Navbar/NavBar";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/products/productsActions";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer.tsx";
import { bannerCards } from "../assets/images.js";
import ProductsHome from "../components/ProductsHome/index.js";
import NavResponsive from "../components/Navbar/NavResponsive.js";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <NavBar />
      <NavResponsive />

      <CaptionCarousel slides={bannerCards} />
      <ProductsHome />
      <Footer />
    </>
  );
}
