import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/Cart/cart.action";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";
import EmptyCart from "./EmptyCart";
import loader from "../assets/abg.gif";

const Cart = () => {
  const data = useSelector((store) => store.cart.data);
  const dispatch = useDispatch();

  let total = data?.reduce((acc, el) => acc + el.qty * el.product.Price, 0);

  let totalMrp = data?.reduce((acc, el) => acc + el.qty * el.product.MRP, 0);

  const { loading } = useSelector((store) => store.cart);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getCartData(token));
  }, []);

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

  if (data.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Box w={"90%"} m="auto" mt={"160px"}>
      <Box display={["block", "flex"]} justify={"space-between"}>
        <Box>
          {data.length > 0 ? (
            data?.map((el) => (
              <CartCard
                key={el._id}
                id={el._id}
                img={el.product.Image1}
                title={el.product.Product_Title}
                brand={el.product.Brand}
                price={el.product.Price}
                rating={el.product.Rating}
                mrp={el.product.MRP}
                category={el.product.category}
                qty={el.qty}
              />
            ))
          ) : (
            <>
              <Flex
                w={"100%"}
                h={"80vh"}
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
        <Box>
          {" "}
          <CartDetails total={total} totalMrp={totalMrp} item={data.length} />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
