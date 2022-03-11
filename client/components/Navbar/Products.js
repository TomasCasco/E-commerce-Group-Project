import React from "react";
import {
  Flex,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
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
  const categories = useSelector(state=>state.productsReducer.categories);

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
          {
            categories.map((category,index)=>{
              return <Link href={`/products?category=${category}`} key={index+category}>
              <MenuItem>{category}</MenuItem>
            </Link>
            })
          }
        </MenuList>
      </Menu>
    </Flex>
  );
}
