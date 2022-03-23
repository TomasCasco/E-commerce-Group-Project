import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  Icon,
  Container,
  useColorModeValue,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";
import Favorites from "../Favorites/Favorites";

export default function FavoritesButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          display="flex"
          alignItems="center"
          p="2px"
          _active={{
            backgroundColor: "none",
          }}
          _hover={{
            color: "white",
          }}
          className="chakra-menu__menu-button css-ez1frj !important"
          border={"none"}
          bg="none"
          _focus={{
            bgColor: "none",
          }}
        >
          <Icon
            fontSize="large"
            mt="5px"
            alignSelf="center"
            display={["none", "none", "flex", "flex", "flex"]}
          >
            <MdFavorite />
          </Icon>

          <Text
            alignSelf="center"
            display={["none", "none", "flex", "flex", "flex"]}
          >
            My Favorites
          </Text>
          <Flex className="nav-items" bg={"none !important"}>
            <Text
              display={["block", "block", "none", "none", "none"]}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              aria-label="Courses"
              fontSize={"13px"}
              color="white"
              lineHeight="21px"
              fontStyle={"inherit"}
              letterSpacing={"0.56px"}
              ml="-45px"
              fontWeight="700"
              cursor={"pointer"}
              className="chakra-menu__menu-button css-ez1frj"
            >
              FAVORITES
            </Text>
          </Flex>
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          width={"100%"}
          position="relative"
          right={"10px"}
          _focus={{
            bgColor: "none",
          }}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Container>
              <Favorites />
            </Container>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
