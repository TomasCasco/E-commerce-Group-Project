import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import Products from "./Products";
import Brands from "./Brands";
import Support from "./Support";
import AboutUs from "./AboutUs";
import SearchModal from "../Search/SearchModal";
import { FaUser } from "react-icons/fa";
import PanelLogin from "./PanelLogin";
import Cart from "../Cart/Cart";
import CartButton from "./CartButton";
import Favorites from "../Favorites/Favorites";
import FavoritesButton from "./FavoritesButton";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const Links = [<Products />, <Brands />, <Support />, <AboutUs />];

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bgColor="#44b8fc"
        display={["flex", "flex", "none", "none", "none"]}
        w="100vh"
        flexDir={"column"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
          color="white"
          borderBottom="1.5px solid #3ba5e2"
        >

          <Flex>

            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              bg="transparent"
              ml="5"
              mr="3"
              onClick={isOpen ? onClose : onOpen}
            />
            <DarkModeSwitch />

          </Flex>

          <Box>
            <Logo />
          </Box>
          <HStack alignItems={"center"} mr="5">
            <Stack color="white">
              <CartButton />
            </Stack>
            <Stack>
              <SearchModal />
            </Stack>
          </HStack>
        </Flex>
        <Flex>
          {isOpen ? (
            <HStack flexDir="column">
              <Stack as={"nav"} spacing={4}>
                <Products /> <Brands /> <Support /> <AboutUs />
                <FavoritesButton />
                <PanelLogin />
              </Stack>
            </HStack>
          ) : null}
        </Flex>
      </Box>
    </>
  );
}
