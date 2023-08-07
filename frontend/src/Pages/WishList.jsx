import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlisCard from "../Components/Wishlist/WishlisCard";
import { deleteWishListData, getWishListData } from "../Redux/WaitList/action";
import { getProductsDetails } from "../Redux/Products/action";
import { useNavigate } from "react-router-dom";
import loader from "../assets/abg.gif";

const WishList = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((store) => store.wishlist);
  const navigate = useNavigate();
    const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getWishListData(token));
  }, []);

  const deleteWishlist = async (id) => {
    dispatch(deleteWishListData(id));
  };

  const handleDetails = (id) => {
    console.log(id);
    dispatch(getProductsDetails(id));
    navigate(`/products/${id}`);
  };

  if (loading) {
    return (
      <Flex
        w={"100%"}
        h={"80vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={loader} alt="loader" />
      </Flex>
    );
  }
  return (
    <Box mt={"160px"}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} w="90%" m={"auto"} p={5}>
        {data.length > 0 ? (
          data?.map((el) => (
            <WishlisCard
              key={el._id}
              id={el._id}
              pId={el.product._id}
              img={el.product.Image1}
              title={el.product.Product_Title}
              brand={el.product.Brand}
              price={el.product.Price}
              rating={el.product.Rating}
              mrp={el.product.MRP}
              category={el.product.category}
              deleteWishlist={deleteWishlist}
              handleDetails={handleDetails}
            />
          ))
        ) : (
          <>
            <Flex
              w={"90vw"}
              h={"80vh"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Center>
                <Box>
                  <Image
                    src="https://media.tenor.com/W6YUgyV84o0AAAAM/cry-crying.gif"
                    alt="gif"
                  />
                  <Text>No Products Available</Text>
                </Box>
              </Center>
            </Flex>
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default WishList;
