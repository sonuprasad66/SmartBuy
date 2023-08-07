import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImStarEmpty } from "react-icons/im";

const WishlisCard = ({
  id,
  pId,
  img,
  title,
  brand,
  price,
  rating,
  mrp,
  deleteWishlist,
  handleDetails,
}) => {
  return (
    <Box
      h={"400px"}
      p={4}
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <Image
        src={img}
        alt="Product_Image"
        w={"100%"}
        h={"60%"}
        borderRadius={2}
        cursor={"pointer"}
        onClick={() => handleDetails(pId)}
      />
      <Flex justifyContent={"space-between"} alignItems={"center"} mt={2}>
        <Heading size={"20px"}>{brand}</Heading>
        <Box></Box>
      </Flex>
      <Text fontSize={"15px"}>{title.slice(0, 20).trim() + " ..."}</Text>
      <Flex alignItems={"center"} mt={1} gap={"20px"}>
        <Flex alignItems={"center"} gap={1}>
          <Text fontSize={"15px"}>Rating: </Text>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"15px"}
            h={"20px"}
            w={"45px"}
            gap={"3px"}
            color={"white"}
            bg={"green"}
            borderRadius={1}
          >
            <Text>{rating}</Text>
            <ImStarEmpty fontSize={"12px"} />
          </Flex>
        </Flex>
        <Heading size={"20px"}>Rs.{price}</Heading>
      </Flex>
      <Flex alignItems={"center"} mt={1} gap={"20px"} fontSize={"15px"}>
        <Text color={"grey"} textDecoration={"line-through"}>
          MRP. {mrp}
        </Text>
        <Text color={"#ff6f61"}>
          ({100 - Math.floor((price * 100) / mrp)}% OFF)
        </Text>
      </Flex>
      <Button
        color={"#fff"}
        bg="#14244b"
        _hover={{ bg: "#1761a6" }}
        mt={2}
        onClick={() => deleteWishlist(id)}
      >
        Remove from wishlist
      </Button>{" "}
    </Box>
  );
};

export default WishlisCard;
