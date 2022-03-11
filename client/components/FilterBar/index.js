import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItemOption,
  MenuOptionGroup,
  Container,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import Router from "next/router";

export default function FilterBar({ title, values, defaultValue, setUrl }) {
  const setFilter = (value) => {
    const query = Router.query;
    query[title] = value;
    console.log(query);
  };
  return (
    <Container paddingBottom={"20px"} textAlign="center">
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          <FaFilter />
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup
            defaultValue={defaultValue}
            title={title}
            type="radio"
          >
            {values.map((value) => {
              return (
                <MenuItemOption
                  key={value + 20}
                  textTransform={"capitalize"}
                  value={value}
                  onClick={() => setUrl(value, title)}
                >
                  {value}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Container>
  );
}
