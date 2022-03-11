import { Container } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Flex, Heading, Avatar, Text, Icon, Link } from "@chakra-ui/react";
import {
  FiHome,
  FiHeart,
  FiShoppingCart,
  FiSmile,
  FiUser,
} from "react-icons/fi";

export default function UserPanel() {
  return (
    <>
      <NavBar />
      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
      >
        {/* Column 2 */}
        <Flex
          w={["100%", "100%", "60%", "60%", "55%"]}
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
        >
          <Heading fontWeight="normal" mb={4} letterSpacing="tight">
            We are glad you are here... <Icon as={FiSmile} fontSize="4xl" />
          </Heading>

          <Flex justifyContent="space-between" mt={8}>
            <Flex align="flex-end">
              <Heading as="h2" size="lg" letterSpacing="tight">
                Dashboard
              </Heading>
            </Flex>
          </Flex>

          <favoritesContainer />

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
        </Flex>
        {/* Column 3 */}
        <Flex
          w={["100%", "100%", "30%"]}
          bgColor="#F5F5F5"
          p="3%"
          flexDir="column"
          overflow="auto"
          minW={[null, null, "300px", "300px", "400px"]}
        ></Flex>
      </Flex>
      <Footer />
    </>
  );
}

export function getServerSideProps(context) {
  if (!context.req.headers.cookie.includes("token")) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return { props: {} };
  }
  return { props: {} };
}
