import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
  MenuButton,
  Icon,
} from "@chakra-ui/react";
import Cart from "../Cart/Cart";
import { IoMdCart } from "react-icons/io";

export default function CartButton() {
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
          <Icon fontSize="large" mt="5px">
            <IoMdCart />
          </Icon>
          My Cart
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
  );
}
