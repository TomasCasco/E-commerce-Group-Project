import React from 'react'
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
  } from "@chakra-ui/react";
import { MdFavorite } from 'react-icons/md';
import Favorites from '../Favorites/Favorites';

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
          <Icon fontSize="large" mt="5px">
            <MdFavorite/>
          </Icon>
          Favorites
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
                <Favorites/>
            </Container>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
