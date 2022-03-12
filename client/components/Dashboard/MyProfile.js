import { useSelector } from "react-redux";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function MyProfile() {
  const user = useSelector((state) => state.usersReducer.user);

  return (
    <Container>
      <Heading>
        <Text>Username: {user.username}</Text>
        <Text>Email: {user.email}</Text>
      </Heading>
    </Container>
  );
}
