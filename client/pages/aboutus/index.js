import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer.tsx";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialButton } from "../../components/Footer/Footer.tsx";
import Nav from "../../components/Navbar/NavResponsive";

export default function about() {
  return (
    <>
      <NavBar />
      <Nav />
      <Flex align={"center"} flexDirection="column" h="100%" mb="20px">
        <Heading mt={20}>About Gamerland</Heading>
        <Text my={10} w="50%" fontSize="lg">
          Gamerland is a leading global developer and manufacturer of
          high-performance gear and technology for gamers, content creators, and
          PC enthusiasts. From award-winning PC components and peripherals, to
          premium streaming equipment and smart ambient lighting, Gamerland
          delivers a full ecosystem of products that work together to enable
          everyone, from casual gamers to committed professionals, to perform at
          their very best. Gamerland also includes subsidiary brands Logitech,
          Hyperx, Razer, Corsair, Samsung and other Gaming Brands.
        </Text>
        <Heading> Our Developers </Heading>
        <Grid templateColumns="repeat(2,1fr)">
          <Flex
            alignItems="center"
            m={10}
            border="1px solid"
            borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
            p={5}
            rounded={20}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/85589457?s=400&u=4281c15c742e0e572074793223b3925f9522e9e6&v=4"
            />
            <Box ml={10}>
              <Text fontSize="xl" fontWeight="bold">
                Tomas Casco
              </Text>
              <Text fontSize="l"> Full Stack Developer</Text>

              <Stack direction={"row"} spacing={6} mt={8}>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/TomasCasco"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/in/tomascasco/"}
                >
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            m={10}
            border="1px solid"
            borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
            p={5}
            rounded={20}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/87780982?v=4"
            />
            <Box ml={10}>
              <Text fontSize="xl" fontWeight="bold">
                Gonzalo Salinas
              </Text>
              <Text fontSize="l"> Full Stack Developer</Text>

              <Stack direction={"row"} spacing={6} mt={8}>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/gonzacs96"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Linkedin"}
                  href={
                    "https://www.linkedin.com/in/gonzalo-salinas-aba0b9209/"
                  }
                >
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            m={10}
            border="1px solid"
            borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
            p={5}
            rounded={20}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/73263519?v=4"
            />
            <Box ml={10}>
              <Text fontSize="xl" fontWeight="bold">
                Camila Alvarin
              </Text>
              <Text fontSize="l"> Full Stack Developer</Text>

              <Stack direction={"row"} spacing={6} mt={8}>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/camilaalvarin"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/in/camila-alvarin/"}
                >
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            m={10}
            border="1px solid"
            borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
            p={5}
            rounded={20}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/92762013?v=4"
            />
            <Box ml={10}>
              <Text fontSize="xl" fontWeight="bold">
                Ignacio Lopez
              </Text>
              <Text fontSize="l"> Full Stack Developer</Text>

              <Stack direction={"row"} spacing={6} mt={8}>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/NachooLopez"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/in/ignacio-fco-lopez/"}
                >
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            m={10}
            border="1px solid"
            borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
            p={5}
            rounded={20}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/81631509?v=4"
            />
            <Box ml={10}>
              <Text fontSize="xl" fontWeight="bold">
                Carolina Fondacaro
              </Text>
              <Text fontSize="l"> Full Stack Developer</Text>

              <Stack direction={"row"} spacing={6} mt={8}>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/CaroFonda"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/in/carolina-fondacaro/"}
                >
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            m={10}
            border="1px solid"
            borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
            p={5}
            rounded={20}
          >
            <Avatar
              size="2xl"
              src="https://avatars.githubusercontent.com/u/84867719?v=4"
            />
            <Box ml={10}>
              <Text fontSize="xl" fontWeight="bold">
                Joel Chavez
              </Text>
              <Text fontSize="l"> Full Stack Developer</Text>

              <Stack direction={"row"} spacing={6} mt={8}>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/joel-CM"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
                  label={"Linkedin"}
                  href={"https://www.linkedin.com/in/joel-c-dev/"}
                >
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Box>
          </Flex>
        </Grid>
      </Flex>

      <Footer />
    </>
  );
}
