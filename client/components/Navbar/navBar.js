import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Input,
  Box,
  Button,
  useColorMode
} from "@chakra-ui/react";

import { BsFillPersonFill } from "react-icons/bs";
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdCart } from "react-icons/io";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  setSearch,
} from "../../redux/products/productsActions";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";



export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const distpatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  const { toggleColorMode } = useColorMode();

  const dispatchSearchProducts = (e) => {
    const filterQuery = {
      name: inputSearch,
    };
    distpatch(getAllProducts(filterQuery));
    distpatch(setSearch(filterQuery.name));
    setInputSearch("");
  };
  return (
    <>
      <Flex
        h="2vh"
        w="100nh"
        bg="#0C0C0C"
        color="grey"
        justifyContent="flex-end"
        fontSize="large"
      >
        <Flex alignItems="center">
            <Link href={"/login"} as="/login">
          <Box background={"none"} className="chakra-menu__menu-button css-ez1frj" cursor={"pointer"}>
              <Icon fontSize="medium" mt="5px">
                <BsFillPersonFill />
              </Icon>
            Login
          </Box>
            </Link>
          |
        </Flex>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              display="flex"
              alignItems="center"
              p="2px"
              href="/favorites"
              _hover={{
                color: "white",
              }}
            >
              <Icon fontSize="medium" mt="5px">
                <IoMdCart />
              </Icon>
              Favorites
            </MenuButton>
            <MenuList bgColor="#1606068a" borderColor="#160606">
              <MenuList>
                <Favorites />
              </MenuList>
            </MenuList>
          </Menu>
          |
        </Flex>
        <Flex alignItems="center" mx="10px" fontSize="large">
          <Menu>
            <MenuButton
              display="flex"
              alignItems="center"
              p="2px"
              href="/cart"
              _hover={{
                color: "white",
              }}
            >
              <Icon fontSize="medium" mt="5px">
                <IoMdCart />
              </Icon>
              My Cart
            </MenuButton>
            <MenuList bgColor="#1606068a" borderColor="#160606">
              <MenuList>
                <Cart />
              </MenuList>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex w="100%" bg="#160606" justifyContent="space-between">
        <Heading
          my=".5em"
          ml="2em"
          fontSize="3xl"
          alignSelf="center"
          color="#8C1515"
        >
          <Link href="/" _hover={{ color: "#8C1515" }}>
            Gamerland
          </Link>
        </Heading>

        <Flex
          direction="row"
          marginLeft={6}
          w="800px"
          pt={3}
          justify="space-between"
          >
          <DarkModeSwitch />
          </Flex>
          {/* <Button marginLeft={6} onClick={toggleColorMode}>DarkMode</Button> */}



        <Flex alignItems="center">
          <Flex className="nav-items">
            <Menu isOpen={isOpen}>
              <MenuButton
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ color: "white" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                PRODUCTS {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList
                bgColor="#1606068a"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                borderColor="#160606"
              >
                <Link href={"/products/[filterName]"} as={"/products/teclado"}>
                  <MenuItem _hover={{ color: "#160606" }}>
                    Gaming Keyboards
                  </MenuItem>
                </Link>
                <Link
                  href={"/products/[filterName]"}
                  as={"/products/microfono"}
                >
                  <MenuItem _hover={{ color: "#160606" }}>Microphones</MenuItem>
                </Link>
                <Link href={"/products/[filterName]"} as={"/products/mouse"}>
                  <MenuItem _hover={{ color: "#160606" }}>
                    Gaming Mouse
                  </MenuItem>
                </Link>
                <Link href={"/products/[filterName]"} as={"/products/mousepad"}>
                  <MenuItem _hover={{ color: "#160606" }}>Mouse Pads</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
          <Flex className="nav-items">
            <Link
              href="/support"
              _hover={{ color: "white" }}
              py={[1, 2, 2]}
              mx={1}
            >
              <Text cursor={"pointer"} className="chakra-menu__menu-button css-ez1frj">SUPPORT</Text>
            </Link>
          </Flex>
          <Flex className="nav-items">
            <Link
              href="/aboutus"
              _hover={{ color: "white" }}
              py={[1, 2, 2]}
              mx={1}
            >
              <Text cursor={"pointer"} className="chakra-menu__menu-button css-ez1frj">ABOUT US</Text>
            </Link>
          </Flex>
        </Flex>
        <Flex alignItems="center" color="white" mr="4em">
          <Input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            border={"2px solid white"}
            borderRight="none"
            borderRadius={"none"}
            borderTopLeftRadius={"1rem"}
            borderBottomLeftRadius="1rem"
          ></Input>
          <Button
            onClick={dispatchSearchProducts}
            background="none"
            border={"2px solid white"}
            borderRadius={"none"}
            borderBottomRightRadius={"1rem"}
            borderTopRightRadius="1rem"
          >
            <SearchIcon />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
