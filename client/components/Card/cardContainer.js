import React, { useEffect, useState } from "react";
import Card from "./card";
import {
  Grid,
  Flex,
  Box,
  Text,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import {
  getAllProducts,
  resetSearch,
} from "../../redux/products/productsActions";

export default function CardContainer() {
  const loadingData = useSelector((state) => state.productsReducer.loading);
  const data = useSelector((state) => state.productsReducer.products);
  const brands = useSelector((state) => state.productsReducer.brands);
  const searchValue = useSelector((state) => state.productsReducer.searchValue);
  const searchBoolean = useSelector((state) => state.productsReducer.search);
  const [alertHidden, setAlertHidden] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(resetSearch());
  }, []);

  const dispatchResetSearch = () => {
    dispatch(resetSearch());
    dispatch(getAllProducts());
  };

  const handleSetAlertHidden = () => {
    setAlertHidden(true);
  };

  if (loadingData)
    return (
      <Flex justifyContent={"center"} marginTop="200px">
        {
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      </Flex>
    );

  if (searchBoolean && data.length === 0)
    return (
      <Flex
        justifyContent={"center"}
        flexDirection="column"
        margin={"0 auto"}
        alignItems="center"
        padding={"10px"}
      >
        <Text
          padding={"10px"}
          border={"2px solid black"}
          borderRadius="1rem"
          fontSize="x-large"
        >
          {searchValue}
          <Button onClick={dispatchResetSearch}>X</Button>
        </Text>
        <Text fontSize="6xl">No se encontraron resultados</Text>
      </Flex>
    );

  return (
    <>
      <Alert
        status="success"
        position={"fixed"}
        top="20"
        right={10}
        maxWidth={"250px"}
        zIndex="100"
        hidden={alertHidden}
      >
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription display="block">
            Producto agregado correctamente al carrito!
          </AlertDescription>
        </Box>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={handleSetAlertHidden}
        />
      </Alert>
      <Flex
        justifyContent={"center"}
        flexDirection="column"
        margin={"0 auto"}
        alignItems="center"
        padding={"10px"}
        hidden={!searchBoolean}
      >
        <Text
          padding={"10px"}
          border={"2px solid black"}
          borderRadius="1rem"
          fontSize="x-large"
        >
          {searchValue}
          <Button onClick={dispatchResetSearch}>X</Button>
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <Box w="90%">
          <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)">
            {data
              ? data.map((data) => {
                  return (
                    <div key={data._id}>
                      <Card data={data} setAlertHidden={setAlertHidden} />
                    </div>
                  );
                })
              : null}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}
