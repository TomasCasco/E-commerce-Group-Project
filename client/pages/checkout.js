import { Box, Link } from "@chakra-ui/react";
import NavBar from "../components/Navbar/NavBar";
import Checkout from "../components/Cart/Checkout";
import Nav from "../components/Navbar/NavResponsive";

export default function Home() {
  return (
    <>
      <NavBar />
      <Nav />
      <Checkout />
    </>
  );
}
