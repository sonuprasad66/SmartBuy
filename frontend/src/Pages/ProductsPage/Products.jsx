import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Products.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import loader from "../../assets/abg.gif";
import { getFilterProducts, getProducts } from "../../Redux/Products/action";
import { Filter } from "./Filter";
import { Pagination } from "./Pagination";
import { ProductsCart } from "./ProductsCart";
import { Sidebar } from "./Sidebar";

export const Products = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const products = useSelector((state) => state.ProductsReducer.products);
  const filterProducts = useSelector(
    (state) => state.ProductsReducer.filterProducts
  );

  const totalPage = Math.ceil(filterProducts.length / 8);

  let limit = 8;
  let start = (page - 1) * limit;
  let end = start + limit;

  let pageData = filterProducts.slice(start, end);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (location || data.length === 0) {
      let getProductsParams = {
        params: {
          brand: searchParams.getAll("brand"),
          category: searchParams.getAll("category"),
          price: searchParams.getAll("price"),
          page: page,
        },
      };
      // console.log(getProductsParams);
      dispatch(getFilterProducts(getProductsParams));
    }
  }, [location.search, page]);

  const handleSidebar = () => {
    setOpenMenu(true);
  };
  const handleOpenSort = () => {
    setOpenSort(true);
  };

  if (products.length === 0 && filterProducts.length === 0) {
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
    <>
      <Box p={"20px"} mt={"160px"}>
        <Box
          w={"100%"}
          bg={colorMode === "light" ? "#fff" : "#14244B"}
          className={openSort ? "select_sort active" : "select_sort"}
        >
          <Text onClick={() => setOpenSort(false)} className="sort_cross">
            X
          </Text>
          <Filter />
        </Box>
        <Box className={"open_mobile"}>
          <Button
            bg={"#14244b"}
            _hover={"none"}
            color={"white"}
            onClick={handleSidebar}
          >
            Open Filter
          </Button>
          <Button
            bg={"#14244b"}
            _hover={"none"}
            color={"white"}
            onClick={handleOpenSort}
          >
            Open Sort
          </Button>
        </Box>

        <Flex w={"100%"} gap={"20px"} mt={4}>
          <Box
            w={["100%", "35%", "15%", "15%"]}
            h={"500px"}
            p={4}
            bg={colorMode === "light" ? "#fff" : "#14244B"}
            className={openMenu ? "left_side_bar active" : "left_side_bar"}
          >
            <Text onClick={() => setOpenMenu(false)} className="sidebar_cross">
              X
            </Text>
            <Sidebar />
          </Box>
          <Box w={["100%", "100%", "100%", "85%"]} p={4}>
            {pageData.length > 0 ? (
              <>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
                  {pageData &&
                    pageData.map((item) => {
                      return <ProductsCart key={item._id} products={item} />;
                    })}
                </SimpleGrid>
              </>
            ) : (
              <>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src="https://media.tenor.com/W6YUgyV84o0AAAAM/cry-crying.gif"
                    alt="gif"
                  />
                  <Text>No Products Available</Text>
                </Flex>
              </>
            )}
          </Box>
        </Flex>
        <Box w={"100%"} p={5} mt={5}>
          <Pagination
            page={page}
            total={Math.ceil(filterProducts.length / 8)}
            setPage={setPage}
          />
        </Box>
      </Box>
    </>
  );
};
