import React from "react";
import {
  Flex,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Brands() {
  const {
    isOpen: isOpenBrands,
    onOpen: onOpenBrands,
    onClose: onCloseBrands,
  } = useDisclosure();

  const brands = useSelector((state) => state.productsReducer.brands);

  return (
    <Flex className="nav-items" bg={"none !important"}>
      <Menu isOpen={isOpenBrands}>
        <MenuButton
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ color: "white" }}
          aria-label="Courses"
          fontSize={"20px"}
          color="white"
          lineHeight="21px"
          fontStyle={"inherit"}
          letterSpacing={"0.56px"}
          fontWeight="600"
          onMouseEnter={onOpenBrands}
          onMouseLeave={onCloseBrands}
        >
          BRANDS {isOpenBrands ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList
          onMouseEnter={onOpenBrands}
          onMouseLeave={onCloseBrands}
          color={"black"}
        >
          {brands &&
            brands.map((b) => (
              <Link key={b+"id"} href={"/brand/[filterBrand]"} as={`/brand/${b}`}>
                <MenuItem _hover={{ color: "#160606" }}>{b}</MenuItem>
              </Link>
            ))}
        </MenuList>
      </Menu>
    </Flex>
  );
}
