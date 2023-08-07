import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const SubNavbar = () => {
  return (
    <Box
      w="100%"
      mt={"100px"}
      position="fixed"
      zIndex={99}
      color={"white"}
      h={50}
      bg={"#0D6DD7"}
    >
      <Flex
        h={"100%"}
        alignItems={"center"}
        w="60%"
        justifyContent={"space-around"}
        m={"auto"}
      >
        <Link to={"/products"}>
          <Text fontSize={"20px"}>Products</Text>
        </Link>
        <Link to={"/mens"}>
          <Text fontSize={"20px"}>Mens</Text>
        </Link>
        <Link to={"/womens"}>
          <Text fontSize={"20px"}>Womens</Text>
        </Link>
        <Link to={"/kids"}>
          <Text fontSize={"20px"}>Kids</Text>
        </Link>
        <Link to={"/electronics"}>
          <Text fontSize={"20px"}>Electronics</Text>
        </Link>
      </Flex>
    </Box>
  );
};
