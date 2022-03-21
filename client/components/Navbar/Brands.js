import React from "react";
import {
  Flex,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Brands() {
  const brands = useSelector((state) => state.productsReducer.brands);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorMode = useColorModeValue("black", "white");

  return (
    <Flex className="nav-items" bg={"none !important"}>
      <Menu isOpen={isOpen}>
        <MenuButton
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ color: "white" }}
          aria-label="Courses"
          fontSize="13px"
          color="white"
          lineHeight="21px"
          fontStyle={"inherit"}
          letterSpacing={"0.56px"}
          fontWeight="700"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          BRANDS {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          color={"black"}
          padding="15px"
        >
          <Grid templateColumns="repeat(5, 1fr)">
            {brands &&
              brands.map((b) => (
                <Link key={b + "id"} href={`/brand?brand=${b}`}>
                  <MenuItem borderRadius={"1rem"} color={colorMode}>
                    {b}
                  </MenuItem>
                </Link>
              ))}
          </Grid>
        </MenuList>
      </Menu>
    </Flex>
  );
}
