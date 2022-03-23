import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  toast,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";

export default function ContactUsForm() {
  const toast = useToast();
  const showToastForm = (action) => {
    return toast({
      title: "Success!",
      position: "top-right",
      description: `Your question was successfully submitted!!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Container
      bgColor={useColorModeValue("white", "#15171C")}
      borderRadius={15}
      mb={15}
      p={10}
      mx="10"
    >
      <Container maxW="lg" H="100%" mx="10" align="center">
        <Stack spacing="8" align="center">
          <Box py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
            <Stack spacing="6">
              <Text fontSize="24px">Your question was not answered?</Text>
              <Text fontSize="22px"> Contact Us</Text>
              <Stack spacing="5">
                <form align="center">
                  <FormControl>
                    <FormLabel htmlFor="email">Nombre</FormLabel>
                    <Input
                      id="nombre"
                      type="text"
                      borderColor={"gray"}
                      placeholder="Lionel"
                      required
                      mb={5}
                    />
                    <FormLabel htmlFor="Apellido">Apellido</FormLabel>
                    <Input
                      id="Apellido"
                      type="text"
                      borderColor={"gray"}
                      placeholder="Messi"
                      required
                      mb={5}
                    />
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      borderColor={"gray"}
                      placeholder="leomessi@mail.com"
                      required
                      mb={5}
                    />
                    <FormLabel htmlFor="question">Question</FormLabel>
                    <Input
                      id="question"
                      type="text"
                      borderColor={"gray"}
                      placeholder="..."
                      mb={5}
                    />
                  </FormControl>
                  <Stack spacing="6">
                    <button
                      mt={8}
                      variant="primary"
                      type="submit"
                      bgColor={useColorModeValue("white", "#1A202C")}
                      border="1px solid"
                    >
                      Submit question
                    </button>
                  </Stack>
                </form>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}
