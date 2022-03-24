import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function ContactUsForm() {
  const toast = useToast();
  const showToastForm = () => {
    return toast({
      title: "Success!",
      position: "top-right",
      description: `Your question was successfully submitted!!`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Gamerland", "Contact_Us", form.current, "V234cHRQ-5mIWKJHd")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showToastForm();
  };
  return (
    <Container
      bgColor={useColorModeValue("#eeeeee", "#15171C")}
      borderRadius={15}
      mb={15}
      p={10}
    >
      <Stack spacing="8" align="center">
        <Box py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
          <Stack spacing="6">
            <Text fontSize="24px">Your question was not answered?</Text>
            <Text fontSize="22px"> Contact Us</Text>
            <Stack spacing="5">
              <form align="center" ref={form} onSubmit={sendEmail}>
                <FormControl>
                  <FormLabel htmlFor="email">Full Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    borderColor={"gray"}
                    placeholder="Full Name"
                    required
                    mb={5}
                  />

                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    borderColor={"gray"}
                    placeholder="mail@mail.com"
                    required
                    mb={5}
                  />
                  <FormLabel htmlFor="question">Question</FormLabel>
                  <Textarea
                    id="question"
                    type="text"
                    name="message"
                    borderColor={"gray"}
                    placeholder="..."
                    mb={5}
                    required
                  />
                </FormControl>
                <Stack
                  spacing="6"
                  bgColor={useColorModeValue("#DDDDDD", "#1A202C")}
                  border="1px solid gray"
                  borderRadius="5px"
                >
                  <button mt={8} type="submit">
                    Send
                  </button>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
