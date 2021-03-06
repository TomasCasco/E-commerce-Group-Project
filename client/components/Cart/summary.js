import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  Button,
  Flex,
  Box,
  useColorModeValue,
  Input,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { buyFromCheckout } from "../../redux/checkout/checkoutActions";
import { resetCart } from "../../redux/cart/cartActions";
import Router from "next/router";

const summary = () => {
  const toast = useToast();
  const noItems = () => {
    return toast({
      title: "No items!",
      position: "top-right",
      description: "Add products to cart to continue checkout!",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  const invalidCode = () => {
    return toast({
      title: "Invalid Code!",
      position: "top-right",
      description: "The dicount code you tried to apply is not valid. ",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  const [discountCode, setDiscountCode] = useState();
  const [discountPercent, setDiscountPercent] = useState();
  const [discountToShow, setdiscountToShow] = useState(0);
  const { id, email } = useSelector((state) => state.usersReducer.user);
  const cart = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    if (discountCode === "logiday") {
      setdiscountToShow(10);
      setDiscountPercent(0.1);
    } else if (discountCode === "gamerland10") {
      setdiscountToShow(10);
      setDiscountPercent(0.1);
    } else if (discountCode === "gamerland15") {
      setdiscountToShow(15);
      setDiscountPercent(0.15);
    } else if (discountCode === "gamerland20") {
      setdiscountToShow(20);
      setDiscountPercent(0.2);
    } else if (discountCode === "gamerland25") {
      setdiscountToShow(25);
      setDiscountPercent(0.25);
    } else if (discountCode === "gamerland30") {
      setdiscountToShow(30);
      setDiscountPercent(0.3);
    } else if (subtotal === 0) {
      setdiscountToShow(0);
    } else {
      invalidCode();
      setdiscountToShow(0);
      setDiscountPercent(0);
    }

    setDiscountCode("");
  };

  const subtotal = cart
    .map((el) => el.qty * el.product.price)
    .reduce((prev, curr) => prev + curr, 0);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const response = await buyFromCheckout({ cart, userId: id, email });
    window.open(response.data.buyFromCheckout.url);
    dispatch(resetCart());
    Router.push("/");
  };

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
          value={discountCode}
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
              cart.map((el) => el.qty).reduce((prev, curr) => prev + curr, 0) +
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
            onClick={total ? handleCheckout : noItems}
          >
            Checkout
          </Button>
        </Box>

        <Flex mt="8" align="center" justify="center" fontWeight="semibold">
          <Link href={"/products"} as={"/products"}>
            Continue shopping
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default summary;
