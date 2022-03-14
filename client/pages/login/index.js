import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  useToast,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { PasswordField } from "./PasswordField.js";
import { client } from "../../apolloClient/apolloClient";
import { queryInfoUser, queryLogin } from "../../apolloClient/querys";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setLogged, setUser } from "../../redux/user/usersActions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = {
      email: email,
      password: password,
    };
    const response = await client.query({
      query: queryLogin,
      variables: {
        input: inputValue,
      },
    });
    const token = response.data.loginUser.token;
    const errorResponse = response.data.loginUser.error;
    if (token) {
      Cookies.set("token", token, { expires: 3 });
      router.push("/");
      const user = await client.query({
        query: queryInfoUser,
        context: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      });
      Cookies.set("user", JSON.stringify(user.data.infoUser), { expires: 3 });
      dispatch(setUser(user.data.infoUser));
      dispatch(setLogged(true));
    } else if (errorResponse) {
      toast({
        title: "Error",
        position: "top",
        description: errorResponse,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setEmail("");
      setPassword("");
    }
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
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button
                  variant="link"
                  colorScheme="blue"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </Button>
              </HStack>
            </Stack>
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
                    <PasswordField
                      borderColor={"gray"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <HStack justify="space-between">
                    <Button
                      variant="link"
                      colorScheme="blue"
                      size="sm"
                      onClick={() => router.push("/forget")}
                    >
                      Forgot password?
                    </Button>
                  </HStack>
                  <Stack spacing="6">
                    <Button variant="primary" type="submit">
                      Sign in
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

export function getServerSideProps(context) {
  if (context.req.headers.cookie?.includes("token")) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return { props: {} };
  }
  return { props: {} };
}
