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
  Heading,
  HStack,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "../../components/Register/Logo";
import { PasswordField } from "../../components/Register/PasswordField.js";
import { client } from "../../apolloClient/apolloClient";
import { useRouter } from "next/router";
import { mutationUserRegister } from "../../apolloClient/mutations";
import NavBar from "../../components/Navbar/NavBar";
import Nav from "../../components/Navbar/NavResponsive";
import Link from "next/link";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return toast({
        title: "Error!",
        position: "top",
        description: "Password fields do not match",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
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
    setPasswordCheck("");
    setUsername("");
  };
  return (
    <>
      <NavBar />
      <Nav />
      <Container
        my="100"
        align="center"
        bgColor={useColorModeValue("white", "#15171C")}
        boxShadow={useColorModeValue(
          "5px 5px 4px 4px grey",
          "5px 5px 4px  4px #131720"
        )}
        borderRadius={15}
      >
        <Container maxW="lg" maxH="100%">
          <Stack spacing="8">
            <Stack spacing="6">
              <Flex
                align={"center"}
                justify={{ base: "flex-start", md: "center" }}
                ml={{ base: "10", md: "0" }}
                mt={10}
              >
                <Logo />
              </Flex>
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
                  Create a new account
                </Heading>
                <HStack spacing="1" justify="center">
                  <Text color="muted">Already registered?</Text>
                  <Button
                    variant="link"
                    colorScheme="blue"
                    onClick={() => router.push("/login")}
                  >
                    Sign in
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: "0", sm: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
              boxShadow={{
                base: "none",
                sm: useColorModeValue("md", "md-dark"),
              }}
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
                        placeholder="mail@mail.com"
                        borderColor={"gray"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        mb={5}
                      />
                      <FormLabel htmlFor="email">Username</FormLabel>
                      <Input
                        placeholder="UserName"
                        id="username"
                        type="text"
                        borderColor={"gray"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        mb={5}
                      />
                      <PasswordField
                        borderColor={"gray"}
                        labelName="Password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        mb={5}
                      />
                      <PasswordField
                        labelName="Repeat password"
                        placeholder="*******"
                        borderColor={"gray"}
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        mb={5}
                      />
                      <Flex
                        align="center"
                        flexDir="row"
                        mb={5}
                        fontSize="sm"
                        textDecoration="underline"
                        fontWeight="semibold"
                      >
                        <Checkbox required borderColor={"gray"} mr={2} />
                        <Link href="/support/terms" target="_blank">
                          I read and agree to the terms and conditions.
                        </Link>
                      </Flex>
                    </FormControl>
                    <Stack spacing="6">
                      <Button variant="primary" type="submit">
                        Sign up
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => router.push("/")}
                      >
                        Back to home
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Container>
    </>
  );
}
