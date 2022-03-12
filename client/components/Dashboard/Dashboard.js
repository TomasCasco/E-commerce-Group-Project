import { Flex, Heading, Avatar, Text, Icon, Link, Box } from "@chakra-ui/react";
import {
    FiHome,
    FiHeart,
    FiShoppingCart,
    FiSmile,
    FiUser,
  } from "react-icons/fi";
  
export default function Favorites() {
    return (
    <>
    <Flex justifyContent="center" mt={8} className="sidebar-items">
        <Heading mt={50} as="h3" size="lg" letterSpacing="normal">
        Start shopping now...
        </Heading>
        <Link
        href="/"
        _hover={{ textDecor: "none" }}
        display={["flex", "flex", "none", "flex", "flex"]}
        >
        <Heading mt={50} ml={10} as="h3" size="lg" letterSpacing="normal">
            Store
        </Heading>
        </Link>
        <Link
        href="/"
        mt={55}
        display={["none", "none", "flex", "flex", "flex"]}
        >
        <Icon as={FiShoppingCart} fontSize="4xl" />
        </Link>
    </Flex>
  </>
  );
  }