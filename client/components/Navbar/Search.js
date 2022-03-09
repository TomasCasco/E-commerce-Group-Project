import React, { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {getAllProducts, setSearch} from "../../redux/products/productsActions"


export default function Search() {
  const distpatch = useDispatch();

  const [inputSearch, setInputSearch] = useState("");

  const dispatchSearchProducts = (e) => {
    const filterQuery = {
      name: inputSearch,
    };
    distpatch(getAllProducts(filterQuery));
    distpatch(setSearch(filterQuery.name));
    setInputSearch("");
  };
  return (
    <Flex alignItems="center" color="white" mr="4rem" border={"2px solid white"} borderRadius="2rem" onKeyPress={(e)=> e.key==="Enter" && dispatchSearchProducts()}>
      <Input
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        border="none"
        _active={
          {
            bgColor:"none"
          }
        }
        _hover={
          {
            bgColor:"none"
          }
        }
        _focus={
          {
            bgColor:"none"
          }
        }
      />
      <Button
        onClick={dispatchSearchProducts}
        background="none"
        className="chakra-input css-1y5j02c"
        border={"none"}
        borderLeft="2px solid white"
        borderRadius={"none"}
        _active={
          {
            bgColor:"none"
          }
        }
        _hover={
          {
            bgColor:"none"
          }
        }
      >
        <SearchIcon />
      </Button>
    </Flex>
  );
}
