import { Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CartDetails = ({ total, totalMrp, item }) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      p="6"
      rounded="md"
      bg="white"
    >
      <Text color="#212121" py={5}>
        PRICE DETAILS
      </Text>
      <Box borderY="1px solid #878787">
        <Flex justify="space-between" align="center" my={5}>
          <Text color="#212121">Price({item}, items)</Text>
          <Text color="#212121">₹ {totalMrp}</Text>
        </Flex>
        <Flex justify="space-between" align="center" my={5}>
          <Text color="#212121">Discount</Text>
          <Text color={"#388F3C"}> - ₹{totalMrp - total}</Text>
        </Flex>

        <Flex justify="space-between" align="center" my={5}>
          <Text color="#212121">Delivery Charges</Text>
          <Text color={"#388F3C"}>Free</Text>
        </Flex>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        my={5}
        fontWeight="bold"
        borderBottom={"1px solid #878787"}
        pb={5}
      >
        <Text color="#212121">Total Amount</Text>
        <Text color="#212121">₹ {total}</Text>
      </Flex>
      <Text color={"#388F3C"} pb={3}>
        You will save ₹ {totalMrp - total} on this order
      </Text>
      <Link to="/checkout">
        <Button
          bg={"#14244b"}
          color={"white"}
          _hover={{ bg: "#193780" }}
          w="full"
        >
          Checkout
        </Button>
      </Link>
    </Box>
  );
};

export default CartDetails;
