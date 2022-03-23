import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";

// import { Flex, Heading, Avatar, Text, Icon, Link, Box } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  Avatar,
  Text,
  Icon,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiHeart,
  FiShoppingCart,
  FiSmile,
  FiUser,
} from "react-icons/fi";
import LinkNext from "next/link";

// components
import Orders from "../../components/Dashboard/Orders";
import MyProfile from "../../components/Dashboard/MyProfile";
import Favorite from "../../components/Dashboard/Favorite";

import { useSelector } from "react-redux";
import Router from "next/router";
import Nav from "../../components/Navbar/NavResponsive";

export default function UserPanel() {
  const [render, setRender] = useState("profile");
  const user = useSelector((state) => state.usersReducer.user);

  return (
    <>
      <NavBar />
      <Nav />
      <Flex
        maxH={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
      >
        {/* Column 1 */}
        <Flex
          w={["100%", "100%", "20%", "25%", "25%"]}
          flexDir="column"
          alignItems="center"
          backgroundColor="#252a2b"
          color="#fff"
        >
          <Flex
            flexDir="column"
            h={[null, null, "100vh"]}
            justifyContent="space-between"
          >
            <Flex flexDir="column" as="nav">
              <Heading
                mt={50}
                mb={[25, 50, 100]}
                fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
                alignSelf="center"
                letterSpacing="tight"
              >
                My Account
              </Heading>
              <Flex
                flexDir={["row", "row", "column", "column", "column"]}
                align={[
                  "center",
                  "center",
                  "center",
                  
                ]}
                wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                justifyContent="center"
              >

              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Button leftIcon={<FiUser />} 
                  fontSize="2xl"
                  colorScheme="white" 
                  variant='#44b8fc'
                  onClick={() => setRender("profile")}
                  _hover={{
                    background: "white",
                    color: "#44b8fc",
                    border: "2px solid",
                    borderColor: "#44b8fc",
                  }}>
                  Your Profile
                </Button>
              </Flex>  

              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Button leftIcon={<FiShoppingCart />} 
                  fontSize="2xl"
                  colorScheme="white" 
                  variant='#44b8fc'
                  onClick={() => setRender("orders")}
                  _hover={{
                    background: "white",
                    color: "#44b8fc",
                    border: "2px solid",
                    borderColor: "#44b8fc",
                  }}>
                  Orders
                </Button>
                </Flex>

                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Button leftIcon={<FiHeart />} 
                    fontSize="2xl"
                    colorScheme="white" 
                    variant='#44b8fc'
                    onClick={() => setRender("favorite")}
                    _hover={{
                      background: "white",
                      color: "#44b8fc",
                      border: "2px solid",
                      borderColor: "#44b8fc",
                    }}>
                    Favorites
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
              <Avatar my={2} src="" />
              <Text
                textAlign="center"
                fontSize={"1.5rem"}
                textTransform="uppercase"
                color={"gray"}
              >
                {user.username}
              </Text>
              <Text textAlign="center" fontSize={"1.5rem"} color={"gray"}>
                {user.role}
              </Text>
              <Button
                onClick={() =>
                  Router.push("https://users-gamerland.herokuapp.com/admin")
                }
                mt={"10px"}
                background="#44B8FC"
                color="white "
                _hover={{
                  background: "white",
                  color: "#44B8FC",
                  border: "2px solid",
                  borderColor: "#44B8FC",
                }}
                fontWeight="bold"
                size="md"
                fontSize="md"
                hidden={user.role === "client"}
              >
                PANEL ADMIN
              </Button>
            </Flex>
          </Flex>
        </Flex>

        {/* Column 2 */}
        <Flex
          w={["100%", "100%", "100%", "100%", "100%"]}
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          alignContent={"center"}
          align="center"
          alignItems={"center"}
          mb="-2.5"
        >
          <Heading
            mt={3}
            mb={[10, 10, 10]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            alignSelf="center"
            letterSpacing="tight"
          >
            We are glad you are here...
          </Heading>

          <Flex justifyContent="space-between">
            <Flex align="flex-end" w={"-moz-min-content"}>
              <Heading as="h2" size="lg" letterSpacing="tight">
                {render === "orders" && <Orders />}
                {render === "favorite" && <Favorite />}
                {render === "profile" && <MyProfile />}
              </Heading>
            </Flex>
          </Flex>
        </Flex>
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
