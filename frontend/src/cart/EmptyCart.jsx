import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import empty_cart from "../assets/empty_cart.png";

const EmptyCart = () => {
  return (
    <Box>
      <Center>
        <Image src={empty_cart} />
      </Center>
      <Text
        color={"blue"}
        fontSize="25px"
        textDecor={"underline"}
        textAlign="center"
        mb={"5%"}
      >
        <Link to="/products">Go back to Product page</Link>
      </Text>
    </Box>
  );
};

export default EmptyCart;
