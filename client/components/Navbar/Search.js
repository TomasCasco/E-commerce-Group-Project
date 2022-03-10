import React, { useState } from "react";
import { Flex, Input, Button, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductSuggestion,
  resetProductSuggestion,
  setSearch,
} from "../../redux/products/productsActions";

export default function Search() {
  const distpatch = useDispatch();
  const suggestions = useSelector((state) => state.productsReducer.suggestions);

  const [inputSearch, setInputSearch] = useState("");

  const handleSetInputSearch = (e) => {
    setInputSearch(e.target.value);
    distpatch(getProductSuggestion(e.target.value));
  };

  const dispatchSearchProducts = (value) => {
    const filterQuery = {
      name: value?value:inputSearch,
    };
    distpatch(getAllProducts(filterQuery));
    distpatch(setSearch(filterQuery.name));
    setInputSearch("");
    distpatch(resetProductSuggestion()) 
  };

  const selectSuggestion = (e) => {
    const value = e.target[Object.keys(e.target)[1]].children;
    console.log(value);
    setInputSearch(value);
    dispatchSearchProducts(value);
  };

  return (
    <Flex
      alignItems="center"
      color="white"
      mr="4rem"
      border={"2px solid white"}
      borderRadius="2rem"
      onKeyPress={(e) => e.key === "Enter" && dispatchSearchProducts()}
    >
      <Input
        onChange={handleSetInputSearch}
        value={inputSearch}
        border="none"
        _active={{
          bgColor: "none",
        }}
        _hover={{
          bgColor: "none",
        }}
        _focus={{
          bgColor: "none",
        }}
      />
      <Button
        onClick={dispatchSearchProducts}
        background="none"
        className="chakra-input css-1y5j02c"
        border={"none"}
        borderLeft="2px solid white"
        borderRadius={"none"}
        _active={{
          bgColor: "none",
        }}
        _hover={{
          bgColor: "none",
        }}
      >
        <SearchIcon />
      </Button>

      <Box position={"absolute"} top={"150px"} zIndex={100}>
        {suggestions &&
          inputSearch.length > 0 &&
          suggestions.map((s, index) => (
            <Box
              key={s + index + "id"}
              bg="#eee"
              w="100%"
              p={2}
              my="4px"
              color="#000"
              cursor="pointer"
              onClick={selectSuggestion}
            >
              {s}
            </Box>
          ))}
      </Box>
    </Flex>
  );
}
