import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Flex,
  Text,
  Icon,
  Box,
  useColorModeValue,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import Cookie from "js-cookie";
import { getDetailBills } from "../../redux/checkout/checkoutActions";
import { client } from "../../apolloClient/apolloClient";
import { queryBills } from "../../apolloClient/querys";

export default function Orders() {
  const bills = useSelector((state) => state.checkoutReducer?.bills);
  const [bill, setBill] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getBillById = async () => {
      const { data } = await client.query({
        query: queryBills,
        variables: {
          // input: JSON.parse(Cookie.get("user")).id,
          input: "263920173",
        },
      });
      setBill(data.getBills);
    };
    getBillById();
  }, []);

  return (
    <Container>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        position={"relative"}
      >
        <Box
          m="1"
          bg={useColorModeValue("white", "blue")}
          maxW="650"
          h={"-webkit-fit-content"}
          w={[1000]}
          padding="100px"
          borderWidth="3px"
          rounded="lg"
          shadow="lg"
          display={"flex"}
          justifyContent={"center"}
        >
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
            textAlign={"center"}
            flexDir="column"
            alignItems="center"
            w={"-webkit-max-content"}
            height="-webkit-fit-content"
          >
            <Box fontSize="3xl" fontWeight="semibold" lineHeight="10">
              <Center>
                <Icon
                  as={FiShoppingBag}
                  mb="10"
                  fontSize="6xl"
                  color="blue.200"
                  alignItems={"center"}
                />
              </Center>

              {/* tabla bills */}
              <Table variant="simple">
                <TableCaption>Bills</TableCaption>
                <Thead>
                  <Tr bg={"#000"}>
                    <Th color={"#fff"} w={"400px"}>
                      Product Title
                    </Th>
                    <Th color={"#fff"}>Total Price</Th>
                    <Th color={"#fff"}>Status</Th>
                    <Th color={"#fff"}>Quantity</Th>
                    <Th color={"#fff"}>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {bill?.map((b) => (
                    <Tr>
                      <Td fontSize={"16px"} w={"400px"}>
                        {b.products.map((p) => p.title + " ")}
                      </Td>
                      <Td fontSize={"16px"}>${b.total}</Td>
                      <Td fontSize={"16px"}>{b.status}</Td>
                      <Td fontSize={"16px"}>
                        {b.products.map((p) => p.quantity)}
                      </Td>
                      <Td fontSize={"16px"}>{b.createdAt.split("T")[0]}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              {/* fin de la tabla */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
