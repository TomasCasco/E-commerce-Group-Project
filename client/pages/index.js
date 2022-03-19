import CaptionCarousel from "../components/Carousel/Carousel.js";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer.tsx";
import { bannerCards } from "../assets/images.js";
import ProductsHome from "../components/ProductsHome/index.js";

export default function Home() {




  return (
    <>
      <NavBar />
      <CaptionCarousel slides={bannerCards} />
      <ProductsHome />
      <Footer />
    </>
  );
}
