import React from "react";
import { Flex, IconButton, useColorModeValue, Box } from "@chakra-ui/react";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import Products from "./Products";
import Brands from "./Brands";
import Logo from "./Logo";
import Support from "./Support";
import AboutUs from "./AboutUs";
import PanelLogin from "./PanelLogin";
import CartButton from "./CartButton";
import FavoritesButton from "./FavoritesButton";
import Home from "./Home";
import SearchModal from "../Search/SearchModal";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaTruckLoading } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <Flex
        flexDir="column"
        display={["none", "none", "none", "flex", "flex"]}
        w="100%"
      >
        <Flex
          bgColor={"#252a2b"}
          px={4}
          color={"grey"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <DarkModeSwitch />
          <Flex justifyContent="flex-end" align={"center"}>
            <FavoritesButton />
            |
            <CartButton />
            |
            <PanelLogin />
          </Flex>
        </Flex>

        <Flex
          w="100%"
          bgColor="#44b8fc"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Flex ml={7}>
            <Logo />
          </Flex>

          <Flex alignItems="center" mr={7}>
            <Home />
            <Products />
            <Brands />
            <Support />
            <AboutUs />
            <SearchModal />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
