import { Box, Button, Flex, Select, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDataSortByDiscount,
  getAllDataSortByPrice,
  getAllDataSortByRating,
  getFilterProducts,
  getProducts,
} from "../../Redux/Products/action";

export const Filter = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const products = useSelector((state) => state.ProductsReducer.products);
  const filterProducts = useSelector(
    (state) => state.ProductsReducer.filterProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(getFilterProducts());
  }, []);

  const handleReset = () => {
    dispatch(getFilterProducts())
      .then((res) => {
        toast({
          title: "Products Filter Reset Success",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        toast({
          title: "Products Filter Reset Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const handlePrice = (e) => {
    dispatch(getAllDataSortByPrice(e))
      .then((res) => {
        toast({
          title: "Products Sorted By Price",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        toast({
          title: "Products Sorted Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const handleDiscount = (e) => {
    dispatch(getAllDataSortByDiscount(e))
      .then((res) => {
        toast({
          title: "Products Sorted By Discount",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        toast({
          title: "Products Sorted Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const handleRating = (e) => {
    dispatch(getAllDataSortByRating(e))
      .then((res) => {
        console.log(res);
        toast({
          title: "Products Sorted By Rating",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        toast({
          title: "Products Sorted Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Button
            _hover={"none"}
            bg={"#14244b"}
            color={"white"}
            onClick={handleReset}
          >
            Reset All Filters
          </Button>
        </Box>
        <Box>
          <Select
            placeholder="Sort By Price"
            onChange={(e) => handlePrice(e.target.value)}
          >
            <option value="asc">LOW TO HIGH</option>
            <option value="desc">HIGH TO LOW</option>
          </Select>
        </Box>
        <Box>
          <Select
            placeholder="Sort By Discount"
            onChange={(e) => handleDiscount(e.target.value)}
          >
            <option value="asc">LOW TO HIGH</option>
            <option value="desc">HIGH TO LOW</option>
          </Select>
        </Box>
        <Box>
          <Select
            placeholder="Sort By Rating"
            onChange={(e) => handleRating(e.target.value)}
          >
            <option value="asc">LOW TO HIGH</option>
            <option value="desc">HIGH TO LOW</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
};
