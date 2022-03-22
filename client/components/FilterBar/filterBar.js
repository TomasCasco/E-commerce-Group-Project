import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import FilterItem from "./filterItem";
import Router from "next/router";

export default function FilterBar(props) {
  const [url, setStateUrl] = useState({
    orderBy: null,
    sortBy: null,
  });
  const filterSortBy = useRef();
  const filterOrderBy = useRef();

  useEffect(() => {
    filterOrderBy.current.setDefaultValue();
    filterSortBy.current.setDefaultValue();
  }, [props.category, props.brand]);

  const setUrl = (value, title) => {
    setStateUrl({
      ...url,
      [title]: value,
    });
  };

  const handleSetUrl = () => {
    if (props.category) {
      return Router.push(
        `/products?category=${props.category}&orderBy=${url.orderBy}&sortBy=${url.sortBy}`
      );
    } else if (props.brand) {
      return Router.push(
        `/brand?brand=${props.brand}&orderBy=${url.orderBy}&sortBy=${url.sortBy}`
      );
    } else {
      Router.push(`/products?orderBy=${url.orderBy}&sortBy=${url.sortBy}`);
    }
  };

  return (
    <Flex
      align={"center"}
      p="50px"
      justify="space-between"
      maxW={"50%"}
      ml="auto"
      mr="auto"
    >
      <FilterItem
        setUrl={setUrl}
        title={"sortBy"}
        values={["desc", "asc"]}
        ref={filterSortBy}
      />
      <FilterItem
        setUrl={setUrl}
        title={"orderBy"}
        values={["name", "price"]}
        ref={filterOrderBy}
      />
      <Button
        colorScheme={"blue"}
        p="20px"
        width={"300px"}
        onClick={handleSetUrl}
        disabled={url.sortBy === null || url.orderBy === null}
      >
        Apply
      </Button>
    </Flex>
  );
}
