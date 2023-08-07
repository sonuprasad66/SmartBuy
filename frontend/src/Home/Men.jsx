import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductsCart } from "../Pages/ProductsPage/ProductsCart";
import { GET_ALL_MENS_PRODUCTS } from "../Utils/Api";

const getData = async () => {
  let res = await axios.get(GET_ALL_MENS_PRODUCTS);
  return res;
};

const Men = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => setData(res.data.filter((el, i) => i < 5)));
  }, []);

  return (
    <Box>
      {" "}
      <Text m={"1.5%"} mb="0" fontSize={"20px"} fontWeight="bold">
        {" "}
        Mens - Top Picks
      </Text>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing="30px" p={5}>
        {data?.map((item) => (
          <ProductsCart key={item._id} products={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Men;
