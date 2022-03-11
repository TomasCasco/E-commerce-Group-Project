import React from "react";
import { Flex, Text, Icon, Link } from "@chakra-ui/react";

export default function Option({ icon, text, href }) {
  return (
    <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
      <Link href={href} display={["none", "none", "flex", "flex", "flex"]}>
        <Icon as={icon} fontSize="2xl" className="active-icon" />
      </Link>
      <Link
        href="/"
        _hover={{ textDecor: "none" }}
        display={["flex", "flex", "none", "flex", "flex"]}
      >
        <Text className="active">{text}</Text>
      </Link>
    </Flex>
  );
}
