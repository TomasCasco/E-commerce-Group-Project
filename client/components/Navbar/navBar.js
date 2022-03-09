import React from "react";
import { Flex } from "@chakra-ui/react";

import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import Products from "./Products";
import Brands from "./Brands";
import Logo from "./Logo";
import Support from "./Support";
import AboutUs from "./AboutUs";
import Search from "./Search";
import PanelLogin from "./PanelLogin";
import CartButton from "./CartButton";
import FavoritesButton from "./FavoritesButton";
import Home from "./Home";

export default function NavBar() {
  return (
    <>
      <Flex
        bgColor={"#252a2b"}
        padding="10px"
        paddingLeft={"2rem"}
        paddingRight="2rem"
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
        <Flex>
          <Logo />
        </Flex>
        <Flex alignItems="center">
          <Home />
          <Products />
          <Brands />
          <Support />
          <AboutUs />
          <Search />
        </Flex>
      </Flex>
    </>
  );
}
