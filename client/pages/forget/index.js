import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FORGET } from "../../apolloClient/mutations";
import { client } from "../../apolloClient/apolloClient";
import { Logo } from "../../components/Login/Logo";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async () => {
    const { data } = await client.mutate({
      mutation: FORGET,
      variables: { input: { email } },
    });
    setEmail("");
    setMsg(data.forgetPassword);
    setShowAlert(true);
  };

  return (
    <Box align="center" justify={"center"}>
      <Logo />
      <FormControl maxW="40%">
        <Text fontSize="md" my={5}>
          Enter your email to get a new password or{" "}
          <Box
            as="button"
            borderBottom="1px solid #999"
            onClick={() => router.push("/")}
          >
            back to home
          </Box>
        </Text>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Flex>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button colorScheme="teal" variant="outline" onClick={handleSubmit}>
            SEND
          </Button>
        </Flex>
        <Alert
          status={msg.status}
          maxW={"300px"}
          display={showAlert ? "block" : "none"}
        >
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>{msg.status}</AlertTitle>
            <AlertDescription>{msg.message}</AlertDescription>
          </Box>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setShowAlert(false)}
          />
        </Alert>
      </FormControl>
    </Box>
  );
};

export default Index;
