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
        <Flex alignItems="center" color="white">
          <Button
            background="none"
            className="chakra-input css-1y5j02c"
            border={"none"}
            size="large"
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
