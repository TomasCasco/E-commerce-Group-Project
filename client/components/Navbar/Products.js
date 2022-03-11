import React from "react";
import {
  Flex,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Products() {
  const {
    isOpen: isOpenProducts,
    onOpen: onOpenProducts,
    onClose: onCloseProducts,
  } = useDisclosure();
  const categories = useSelector((state) => state.productsReducer.categories);
  const colorMode = useColorModeValue("black", "white");

  return (
    <Flex className="nav-items" bg={"none !important"}>
      <Menu isOpen={isOpenProducts}>
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
          onMouseEnter={onOpenProducts}
          onMouseLeave={onCloseProducts}
        >
          PRODUCTS {isOpenProducts ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList
          /* bgColor="#1606068a" */
          onMouseEnter={onOpenProducts}
          onMouseLeave={onCloseProducts}
          color={"black"}
          padding="15px"
        >
          <Link href={`/products`} key={20 + 500}>
            <MenuItem borderRadius={"1rem"} color={colorMode}>
              All
            </MenuItem>
          </Link>
          {categories.map((category, index) => {
            return (
              <Link
                href={`/products?category=${category}`}
                key={index + category}
              >
                <MenuItem borderRadius={"1rem"} color={colorMode}>
                  {category}
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
}
