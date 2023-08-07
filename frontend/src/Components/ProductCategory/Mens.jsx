import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductsCart } from "../../Pages/ProductsPage/ProductsCart";
import { GET_ALL_MENS_PRODUCTS } from "../../Utils/Api";
import loader from "../../assets/abg.gif";

const getData = async () => {
  let res = await axios.get(GET_ALL_MENS_PRODUCTS);
  return res;
};

export const Mens = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  if (data.length === 0) {
    return (
      <>
        <Flex
          w={"100%"}
          h={"80vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={loader} alt="loader" />
        </Flex>
      </>
    );
  }

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing="30px" p={5}>
        {data?.map((item) => (
          <ProductsCart key={item._id} products={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
