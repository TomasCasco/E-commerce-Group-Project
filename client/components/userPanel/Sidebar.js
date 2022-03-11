import React from "react";
import Option from "./Option";
import { Flex, Heading, Avatar, Text } from "@chakra-ui/react";
import { FiHome, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

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
        align={["center", "center", "center", "flex-start", "flex-start"]}
        wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        justifyContent="center"
      >
        <Option href="/" icon={FiHome} text="Home" />
        <Option href="" icon={FiShoppingCart} text="Orders" />
        <Option href="" icon={FiHeart} text="Favorites" />
        <Option href="" icon={FiUser} text="Your Profile" />
      </Flex>
    </Flex>
    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
      <Avatar my={2} src="" />
      <Text textAlign="center">Your Name</Text>
    </Flex>
  </Flex>
</Flex>;
