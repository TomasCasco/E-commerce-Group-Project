import React, { useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { client } from "../../apolloClient/apolloClient";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { queryProducts } from "../../apolloClient/querys";
import Link from "next/link";
import Router from "next/router"





export default function Search(props) {
  const [autocompleteState, setAutoCompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const AutocompleteItem = ({ _id, name, price, image }) => {

    const handleSearch=()=>{
      props.onClose();
      Router.push(`/products/${_id}`)
    }
    return (
      <Container cursor={"pointer"} onClick={handleSearch}> 
          <Box
            _hover={{ bgColor: "blue.300" }}
            bgColor="white"
            display="flex"
            gap={"4"}
            p="4"
          >
            <Image src={image} alt="not" w={"12"} h="12" objectFit={"contain"} />
            <Container>
              <Heading fontSize={"sm"}>{name}</Heading>
              <Text fontSize={"xs"} color="gray.600">
                ${price}
              </Text>
            </Container>
          </Box>
      </Container>
    );
  };

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Search",
        autoFocus:"true",
        onStateChange: ({ state }) => setAutoCompleteState(state),
        getSources: () => [
          {
            sourceId: "query-search-items",
            getItems: ({ query }) => {
              return client
                .query({
                  query: queryProducts,
                  variables: {
                    input: {},
                  },
                })
                .then((res) => {
                  let items = res.data.getAllProducts.filter((el) => {
                    let returnValue = true;
                    let array = query.split(" ");
                    for (let index = 0; index < array.length; index++) {
                      if (!el.name.includes(array[index])) returnValue = false;
                    }
                    return returnValue;
                  });
                  return items.slice(0, 10);
                });
            },
          },
        ],
      }),
    [props]
  );
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  const handleSearch=()=>{
    props.onClose();
    Router.push(`/search?q=${inputRef.current.value}`);
  }

  return (
    <Flex justify="stretch" {...autocomplete.getRootProps()} w="100%">
      <Box {...formProps} ref={formRef} width="100%">
        <Flex>
        <Input width={"100%"} {...inputProps} ref={inputRef} type="text" />
        <Button onClick={handleSearch}>Search</Button>
        </Flex>
        {autocompleteState.isOpen && (
          <div
            position={"absolute"}
            ref={panelRef}
            {...autocomplete.getPanelProps()}
          >
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection;
              return (
                <Flex
                  mt={"40px"}
                  key={"source" + index}
                  overflowY="scroll"
                  maxH={"300px"}
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#44B8FC",
                      borderRadius: "24px",
                    },
                  }}
                >
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item) => (
                        <AutocompleteItem key={item._id} {...item} />
                      ))}
                    </ul>
                  )}
                </Flex>
              );
            })}
          </div>
        )}
      </Box>
    </Flex>
  );
}
