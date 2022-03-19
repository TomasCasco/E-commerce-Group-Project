import React from "react";
import {
  Flex,
  IconButton,
  useColorModeValue,
  Button,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Portal,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import SearchModal from "../Search/SearchModal";
import { IoMdCart } from "react-icons/io";
import Cart from "../Cart/Cart";

export default function NavResponsive() {
  return (
    <>
      <Flex
        w="100%"
        bg="#44b8fc"
        justifyContent="space-between"
        display={["flex", "flex", "flex", "none", "none"]}
        align="center"
        px={5}
      >
        <Flex>
          <IconButton icon={<HamburgerIcon />} bg="none" />
        </Flex>

        <Flex>
          <Logo />
        </Flex>
        <Flex align="center">
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
                <Icon fontSize="2xl" mt="5px" color="white">
                  <IoMdCart />
                </Icon>
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
                  <Cart />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          <Box ml={2}>
            <SearchModal />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
