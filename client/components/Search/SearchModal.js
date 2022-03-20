import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Search from "./Search";


export default function SearchModal() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        onClick={() => {
          onOpen();
        }}
      >
        <Flex
          alignItems="center"
          color="white"
          mr="4rem"
          border={"2px solid white"}
          borderRadius="2rem"
        >
          <Box
            border="none"
            _active={{
              bgColor: "none",
            }}
            _hover={{
              bgColor: "none",
            }}
            _focus={{
              bgColor: "none",
            }}
            minW={"300px"}
          />
          <Button
            background="none"
            className="chakra-input css-1y5j02c"
            border={"none"}
            borderLeft="2px solid white"
            borderRadius={"none"}
            _active={{
              bgColor: "none",
            }}
            _hover={{
              bgColor: "none",
            }}
          >
            <SearchIcon />
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        {<OverlayOne />}
        <ModalContent minH={"200px"}>
          <ModalHeader>Search products:</ModalHeader>
          <ModalCloseButton />
          <ModalBody width={"100%"}>
            <Search onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
