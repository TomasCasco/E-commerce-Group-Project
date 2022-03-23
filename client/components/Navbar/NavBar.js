import React from "react";
import { Flex } from "@chakra-ui/react";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import Products from "./Products";
import Brands from "./Brands";
import Logo from "./Logo";
import Support from "./Support";
import AboutUs from "./AboutUs";
import PanelLogin from "./PanelLogin";
import CartButton from "./CartButton";
import FavoritesButton from "./FavoritesButton";

import SearchModal from "../Search/SearchModal";

export default function NavBar() {
  return (
    <>
      <Flex
        flexDir="column"
        display={["none", "none", "flex", "flex", "flex"]}
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
          width="100%"
          bgColor="#44b8fc"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Flex ml={3}>
            <Logo />
          </Flex>
          <Flex alignItems="center" mr={4}>
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
