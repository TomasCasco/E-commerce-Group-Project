import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Button,
  Flex,
  Box,
  useColorModeValue,
  Input,
  Divider,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const summary = () => {
  const [discountCode, setDiscountCode] = useState();
  const [discountPercent, setDiscountPercent] = useState();
  const [discountToShow, setdiscountToShow] = useState(0);

  const onChange = (e) => {
    setDiscountCode(e.target.value);
  };

  // console.log(discountCode)

  const onClick = (e) => {
    e.preventDefault();

    if (discountCode === "gamerland10") {
      setdiscountToShow(10);
      setDiscountPercent(0.1);
    }
    if (discountCode === "gamerland15") {
      setdiscountToShow(15);
      setDiscountPercent(0.15);
    }
    if (discountCode === "gamerland20") {
      setdiscountToShow(20);
      setDiscountPercent(0.2);
    }
    if (discountCode === "gamerland25") {
      setdiscountToShow(25);
      setDiscountPercent(0.25);
    }
    if (discountCode === "gamerland30") {
      setdiscountToShow(30);
      setDiscountPercent(0.3);
    }
    if (subtotal === 0) {
      setdiscountToShow(0);
    }

    setDiscountCode("");
  };

  // console.log(discountPercent)

  const data = useSelector((state) => state.cartReducer.cart);

  const subtotal = data
    .map((el) => el.qty * el.product.price)
    .reduce((prev, curr) => prev + curr, 0);

  const handleCheckout = (e) => {};

  // console.log(subtotal)

  const discountValue = subtotal * discountPercent;
  const total = subtotal - discountValue;

  return (
    <Box
      ml="20px"
      h="410"
      w="300"
      position="relative"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Box p={"4"} minWidth={"300px"} maxHeight="300px">
        <Box fontSize="x-large" fontWeight="semibold">
          Order Summary
        </Box>

        <Divider mt="10px" w="95%" />

        <Input
          mt="18px"
          ml="30px"
          mr="20px"
          w="150px"
          borderColor="#44B8FC"
          _hover={{ borderColor: "#44B8FC" }}
          focusBorderColor="#44B8FC"
          placeholder="Discount code"
          onChange={onChange}
        />
        <Button
          onClick={onClick}
          variant="outline"
          mb="8px"
          color="#44B8FC"
          border="1px solid"
          borderColor="#44B8FC"
        >
          Apply
        </Button>

        <Divider mt="10px" w="95%" />

        <Flex mt="6" justify="space-between">
          <Box fontSize="22px">
            Subtotal
            {` (` +
              data.map((el) => el.qty).reduce((prev, curr) => prev + curr, 0) +
              ` items) `}
          </Box>
          <Box fontSize="22px" fontWeight="bold">
            {"$" + subtotal.toFixed(2)}
          </Box>
        </Flex>

        <Flex mt="6" mb="6" justify="space-between">
          <Box fontSize="22px">Discount{` (` + discountToShow + `%) `}</Box>
          <Box fontSize="22px" fontWeight="bold">
            {!discountValue ? `$` + 0 : `$` + discountValue.toFixed(2)}
          </Box>
        </Flex>

        <Divider w="95%" />

        <Flex mt="6" justify="space-between">
          <Box mb="3" fontSize="22px">
            Total
          </Box>
          <Box maxHeight="100px" fontSize="22px" fontWeight="bold">
            {!total ? `$` + subtotal.toFixed(2) : `$` + total.toFixed(2)}
          </Box>
        </Flex>

        <Box fontSize="x-large">
          <Button
            background="#44B8FC"
            color="white"
            _hover={{
              background: "transparent",
              color: "#44B8FC",
              border: "2px solid",
              borderColor: "#44B8FC",
            }}
            ml="12px"
            w="300px"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Box>

        <Flex mt="20px" align="center" justify="center" fontWeight="semibold">
          <Link href={"/products/[filterName]"} as={"/products/teclado"}>
            or Continue shopping
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default summary;
