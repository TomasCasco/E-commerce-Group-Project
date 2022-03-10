import React from "react";
import Link from "next/link";
import { Text, Flex, Box } from "@chakra-ui/react";

export default function Support() {
  return (
    <Flex className="nav-items" bg={"none !important"}>
      <Link
        href="/support"
        
      >
        <Text
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          aria-label="Courses"
          fontSize={"20px"}
          color="white"
          lineHeight="21px"
          fontStyle={"inherit"}
          letterSpacing={"0.56px"}
          fontWeight="600"
          cursor={"pointer"}
          className="chakra-menu__menu-button css-ez1frj"
        >
          SUPPORT
        </Text>
      </Link>
    </Flex>
  );
}
