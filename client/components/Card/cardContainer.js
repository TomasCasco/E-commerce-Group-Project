import React, { useState } from "react";
import Card from "./card";
import { Grid, Flex, Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import SpinnerComponent from "../Spinner/Spinner";
import FilterBar from "../FilterBar";
import Router from "next/router";

export default function CardContainer() {
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const data = useSelector((state) => state.productsReducer.products);
  const [url, setStateUrl] = useState({});

  const setUrl = (value, title) => {
    setStateUrl({
      ...url,
      [title]: value,
    });
    console.log(url);
  };

  const handleSetUrl = () => {
    console.log(url);
    const orderBy = url.orderBy ? url.orderBy : null;
    const sortBy = url.sortBy ? url.sortBy : null;
    Router.push(`/products?orderBy=${orderBy}&sortBy=${sortBy}`);
  };

  if (loadingData) {
    return <SpinnerComponent />;
  }

  return (
    <Box padding={"100px"}>
      <Flex justify={"center"} flexDir={"column"} align="flex-end">
        <Flex>
          <FilterBar
            setUrl={setUrl}
            title={"sortBy"}
            values={["desc", "asc"]}
            defaultValue={"asc"}
          />
          <FilterBar
            setUrl={setUrl}
            title={"orderBy"}
            values={["name", "price"]}
            defaultValue={"name"}
          />
          <Button
            colorScheme={"blue"}
            p="20px"
            width={"300px"}
            onClick={handleSetUrl}
            disabled={!url.sortBy && !url.orderBy}
          >
            Apply
          </Button>
        </Flex>
        <Box w="100%">
          <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)">
            {data
              ? data.map((data) => {
                  return (
                    <div key={data._id}>
                      <Card data={data} />
                    </div>
                  );
                })
              : null}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}
