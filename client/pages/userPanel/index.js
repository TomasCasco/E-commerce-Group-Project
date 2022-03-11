
import React from "react";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";


import { Flex, Heading, Avatar, Text, Icon, Link, Box } from "@chakra-ui/react";
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
import Favorites from "../../components/Dashboard/Favorites";

export default function UserPanel() {
  const [render, setRender] = useState("profile");

  return (
    <>
      <NavBar />
      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
      >
        {/* Column 1 */}
        <Flex
          w={["100%", "100%", "10%", "15%", "15%"]}
          flexDir="column"
          alignItems="center"
          backgroundColor="#020202"
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
                  "flex-start",
                  "flex-start",
                ]}
                wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                justifyContent="center"
              >
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link
                    href="/"
                    display={["none", "none", "flex", "flex", "flex"]}
                  >
                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                  </Link>
                  <LinkNext href="/">
                    <Box as="button">
                      <Text className="active">Home</Text>
                    </Box>
                  </LinkNext>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon as={FiShoppingCart} fontSize="2xl" />
                  </Link>
                  {/* -------render -------------- */}
                  <Box as="button" onClick={() => setRender("orders")}>
                    <Text>Orders</Text>
                  </Box>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon as={FiHeart} fontSize="2xl" />
                  </Link>
                  <Box as="button" onClick={() => setRender("favorites")}>
                    <Text>Favorites</Text>
                  </Box>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                  <Link display={["none", "none", "flex", "flex", "flex"]}>
                    <Icon as={FiUser} fontSize="2xl" />
                  </Link>
                  <Box as="button" onClick={() => setRender("profile")}>
                    <Text>Your Profile</Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
              <Avatar my={2} src="" />
              <Text textAlign="center">Your Name</Text>
            </Flex>
          </Flex>
        </Flex>

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
                {render === "orders" && <Orders />}
                {render === "favorites" && <Favorites />}
                {render === "profile" && <MyProfile />}
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
