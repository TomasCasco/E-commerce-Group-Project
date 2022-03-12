import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setLogged, setUser } from "../../redux/user/usersActions";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { BsPersonFill } from "react-icons/bs";

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
    router.push("/");
  };

  function UserIsLogged() {
    return (
      <Flex align={"center"} justify="center">
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
          onClick={() => router.push("/userPanel")}
        >
          <Icon fontSize="large" mt="5px">
            <BsPersonFill />
          </Icon>
          {`Hi, ${userInfo.username}`}
        </Button>
        |
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
          <Icon fontSize="large" mt="5px">
            <MdLogout />
          </Icon>
          Logout
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
        <Icon fontSize="large" mt="5px">
          <MdLogin />
        </Icon>
        Login
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
