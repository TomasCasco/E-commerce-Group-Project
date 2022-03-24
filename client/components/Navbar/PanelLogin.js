import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setLogged, setUser } from "../../redux/user/usersActions";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { BsPersonFill } from "react-icons/bs";
import { client } from "../../apolloClient/apolloClient";

export default function PanelLogin() {
  const userInfo = useSelector((state) => state.usersReducer.user);
  const isLogged = useSelector((state) => state.usersReducer.isLogged);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(setLogged(false));
    dispatch(setUser({}));
    Cookies.remove("token");
    Cookies.remove("user");
    client.resetStore();
    router.push("/");
  };

  function UserIsLogged() {
    return (
      <Flex
        align={"center"}
        justify="center"
        flexDir={{ base: "column", md: "row" }}
        ml={{ base: "13px", md: "0px" }}
      >
        <Button
          alignItems="center"
          p="2px"
          _active={{
            backgroundColor: "none",
          }}
          _hover={{
            color: "white",
          }}
          className="chakra-menu__menu-button css-ez1frj"
          border={"none"}
          bg="none"
          _focus={{
            bgColor: "none",
          }}
          onClick={() => router.push("/userPanel")}
        >
          <Icon
            fontSize="lg"
            mt="4px"
            display={["none", "none", "flex", "flex", "flex"]}
          >
            <BsPersonFill />
          </Icon>
          {`Hi, ${userInfo.username}`}
        </Button>
        <Text display={["none", "none", "flex", "flex", "flex"]}>|</Text>
        <Button
          display="flex"
          alignItems="center"
          p="2px"
          _active={{
            backgroundColor: "none",
          }}
          _hover={{
            color: "white",
          }}
          className="chakra-menu__menu-button css-ez1frj"
          border={"none"}
          bg="none"
          _focus={{
            bgColor: "none",
          }}
          onClick={handleLogOut}
        >
          <Icon
            fontSize="large"
            mt="4px"
            display={["none", "none", "flex", "flex", "flex"]}
            alignSelf="center"
          >
            <MdLogout />
          </Icon>
          <Text
            display={["none", "none", "flex", "flex", "flex"]}
            alignSelf="center"
          >
            Logout
          </Text>
          <Text
            display={["flex", "flex", "none", "none", "none"]}
            py={[1, 2, 2]}
            px={4}
            ml="-55"
            borderRadius={5}
          >
            Logout
          </Text>
        </Button>
      </Flex>
    );
  }

  function UsertNotLogged() {
    return (
      <Button
        display="flex"
        alignItems="center"
        p="2px"
        _active={{
          backgroundColor: "none",
        }}
        _hover={{
          color: "white",
        }}
        className="chakra-menu__menu-button css-ez1frj"
        border={"none"}
        bg="none"
        _focus={{
          bgColor: "none",
        }}
        onClick={() => router.push("/login")}
      >
        <Icon
          fontSize="large"
          mt="5px"
          alignSelf="center"
          display={["none", "none", "flex", "flex", "flex"]}
        >
          <MdLogin />
        </Icon>
        <Text
          alignSelf="center"
          display={["none", "none", "flex", "flex", "flex"]}
        >
          Login
        </Text>
        <Flex className="nav-items" bg={"none !important"}>
          <Text
            display={["block", "block", "none", "none", "none"]}
            py={[1, 2, 2]}
            px={4}
            borderRadius={5}
            aria-label="Courses"
            fontSize={"13px"}
            color="white"
            lineHeight="21px"
            fontStyle={"inherit"}
            letterSpacing={"0.56px"}
            fontWeight="700"
            cursor={"pointer"}
            className="chakra-menu__menu-button css-ez1frj"
          >
            LOGIN
          </Text>
        </Flex>
      </Button>
    );
  }

  return (
    <Flex alignItems="center">
      <Box background={"none"} cursor={"pointer"}>
        {isLogged ? <UserIsLogged /> : <UsertNotLogged />}
      </Box>
    </Flex>
  );
}
