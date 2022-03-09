import { Container } from "@chakra-ui/react";
import React from "react";
import NavBar from "../../components/Navbar/NavBar";

export default function UserPanel() {
  return (
    <>
      <NavBar />
      <Container align="center" justify="center">
        Hola soy panel de usuario
      </Container>
    </>
  );
}

export function getServerSideProps(context) {
  if (!context.req.headers.cookie.includes("token")) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return { props: {} };
  }
  return { props: {} };
}
