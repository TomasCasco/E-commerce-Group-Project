import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  useToast,
  FormLabel,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { PasswordField } from "./PasswordField.js";
import { client } from "../../apolloClient/apolloClient";
import { useRouter } from "next/router";
import { mutationUserRegister } from "../../apolloClient/mutations";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = {
      email: email,
      password: password,
      username: username,
    };
    const response = await client.mutate({
      mutation: mutationUserRegister,
      variables: {
        input: inputValue,
      },
    });

    const errorResponse = response.data.registerUser.error;
    const messageResponse = response.data.registerUser.message;
    if (errorResponse) {
      toast({
        title: "Error!",
        position: "top",
        description: errorResponse,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    if (messageResponse) {
      toast({
        title: "Success!",
        position: "top",
        description: messageResponse,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <Container bgColor={"lightsteelblue"} maxWidth="100vw" height={"100vh"}>
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
        maxH="100%"
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Flex align={"center"} justify="center">
              <Logo />
            </Flex>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      borderColor={"gray"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <FormLabel htmlFor="email">Username</FormLabel>
                    <Input
                      id="username"
                      type="text"
                      borderColor={"gray"}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <PasswordField
                      borderColor={"gray"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing="6">
                    <Button variant="primary" type="submit">
                      Sign up
                    </Button>
                    <Button variant="primary" onClick={() => router.push("/")}>
                      Back to home
                    </Button>
                  </Stack>
                </form>
                {/* <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup /> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}
