import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Nav from "../../components/Navbar/NavResponsive";
import Logo from "../../components/Navbar/Logo";
import { PasswordField } from "../../components/Register/PasswordField";
import { useSelector } from "react-redux";
import axios from "axios";

export default function EditPassword() {
  const user = useSelector((state) => state.usersReducer.user);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
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
    const response = await axios.post(
      "https://users-gamerland.herokuapp.com/users/edit-password",
      { userId: user.id, newPassword: password }
    );

    const messageResponse = response.data.msg;

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
    setPassword("");
    setPasswordCheck("");
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
                      <PasswordField
                        id="password1"
                        borderColor={"gray"}
                        labelname="Password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        mb={5}
                      />
                      <PasswordField
                        id="password2"
                        labelname="Repeat password"
                        placeholder="*******"
                        borderColor={"gray"}
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        mb={5}
                      />
                    </FormControl>
                    <Stack spacing="6">
                      <Button variant="primary" type="submit">
                        Submit
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
