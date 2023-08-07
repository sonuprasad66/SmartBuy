import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ImStarEmpty } from "react-icons/im";
import { GrLocation } from "react-icons/gr";
import { getProductsDetails } from "../../Redux/Products/action";
import Men from "../../Home/Men";
import Women from "../../Home/Women";
import Kid from "../../Home/Kids";
import Electronics from "../../Home/Electronics";
import { addWishListData } from "../../Redux/WaitList/action";
import { addCartData } from "../../Redux/Cart/cart.action";

export const ProductsDetails = () => {
  const [deliveryPin, setDeliveryPin] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.ProductsReducer.productsDetails);
  const isLoading = useSelector((state) => state.cart.loading);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, []);

  const handleWishlist = (id) => {
    dispatch(addWishListData({ product: id })).then((res) => {
      if (res.product) {
        toast({
          title: "Product added to wishlisht",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: res,
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  const handleCart = (id) => {
    dispatch(addCartData(token, { product: id, qty: 1 })).then((res) => {
      if (res.status === "success") {
        toast({
          title: res.msg,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else if (res.status === "info") {
        toast({
          title: res.msg,
          status: "info",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Product Added Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  const handleDeliveryCheck = () => {
    if (deliveryPin.length < 6 || deliveryPin.length > 6) {
      toast({
        title: "Pin Code Must be at least 6 Digit.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } else {
      console.log(deliveryPin);
      const date = new Date(1666632563517);
      let delivery_date = document.getElementById("delivery_date");
      delivery_date.innerHTML = `Delivery between 3 to 5 working days`;
      delivery_date.style.color = "green";
    }
  };

  return (
    <>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        m={"10px auto"}
        p={5}
      >
        <Flex w={["column", "column", "column", "60%"]}>
          <Box w={"30%"} p={2}>
            <Box
              w={"90%"}
              h={["60px", "60px", "100px", "120px"]}
              boxShadow="base"
              p={3}
              mt={3}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image2}
                alt={product.Brand}
                borderRadius={5}
              />
            </Box>
            <Box
              w={"90%"}
              h={["60px", "60px", "100px", "120px"]}
              boxShadow="base"
              p={3}
              mt={3}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image3}
                alt={product.Brand}
                borderRadius={5}
              />
            </Box>
            <Box
              w={"90%"}
              h={["60px", "60px", "100px", "120px"]}
              boxShadow="base"
              p={3}
              mt={3}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image4}
                alt={product.Brand}
                borderRadius={5}
              />
            </Box>
            <Box
              w={"90%"}
              h={["60px", "60px", "100px", "120px"]}
              boxShadow="base"
              p={3}
              mt={3}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={product.Image5}
                alt={product.Brand}
                borderRadius={5}
              />
            </Box>
          </Box>
          <Box w={"70%"} h={["300px", "400px", "500px", "600px"]} p={4}>
            <Image
              w={"100%"}
              h={"100%"}
              src={product.Image1}
              alt={product.Brand}
            />
          </Box>
        </Flex>

        <Box w={["100%", "100%", "100%", "50%"]} p={5}>
          <Heading fontSize={"25px"}>{product.Product_Title}</Heading>

          <Flex gap={"20px"} alignItems={"center"} mt={2}>
            <Text color={"gray"}>{product.Brand}</Text>
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
              <Text>{product.Rating}</Text>
              <ImStarEmpty fontSize={"12px"} />
            </Flex>
          </Flex>
          <Flex gap={"20px"} alignItems={"center"} mt={2}>
            <Heading size={"md"}>₹ {product.Price}.00</Heading>
            <Flex gap={2}>
              M.R.P:{" "}
              <Text color={"grey"} textDecoration={"line-through"}>
                ₹ {product.MRP}.00
              </Text>
            </Flex>
          </Flex>
          <Flex gap={"20px"} alignItems={"center"} mt={2}>
            <Flex gap={2}>
              You Save:{" "}
              <Text color={"green"}>₹ {product.MRP - product.Price}.00</Text>
            </Flex>
            <Text>Inclusive of all taxes</Text>
          </Flex>
          <Heading color={"green"} fontSize={"20px"} mt={2}>
            In Stock
          </Heading>
          <Flex gap={"20px"} alignItems={"center"} mt={2}>
            <Text>Inaugural Offer</Text>
            <Heading fontSize={"25px"}>Free Shopping</Heading>
          </Flex>

          <Flex alignItems={"center"} gap={4} mt={2}>
            <Box
              border={"1px solid grey"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={"0px 12px"}
              cursor={"pointer"}
            >
              <Heading fontSize={"20px"}>S</Heading>
              <Text color={"gray.500"}>Rs. {product.Price}</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={"0px 12px"}
              cursor={"pointer"}
            >
              <Heading fontSize={"20px"}>M</Heading>
              <Text color={"gray.500"}>Rs. {product.Price}</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={"0px 12px"}
              cursor={"pointer"}
            >
              <Heading fontSize={"20px"}>L</Heading>
              <Text color={"gray.500"}>Rs. {product.Price}</Text>
            </Box>
            <Box
              border={"1px solid grey"}
              borderRadius={"25px"}
              textAlign={"center"}
              p={"0px 12px"}
              cursor={"pointer"}
            >
              <Heading fontSize={"20px"}>XL</Heading>
              <Text color={"gray.500"}>Rs. {product.Price}</Text>
            </Box>
          </Flex>

          <Flex gap={4} mt={2}>
            <Box
              textAlign={"center"}
              mt={2}
              cursor={"pointer"}
              bg={"#14244b"}
              color={"white"}
              p={2}
              borderRadius={1}
              w={"180px"}
            >
              <Text onClick={() => handleCart(product._id)}>
                {isLoading ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="md"
                  />
                ) : (
                  "Add To Cart"
                )}
              </Text>
            </Box>

            <Box
              textAlign={"center"}
              mt={2}
              cursor={"pointer"}
              bg={"#14244b"}
              color={"white"}
              p={2}
              borderRadius={1}
              w={"180px"}
            >
              <Text onClick={() => handleWishlist(product._id)}>
                Add Wishlist
              </Text>
            </Box>
          </Flex>

          <Box mt={4}>
            <Heading fontSize={"20px"}>Delivery</Heading>
            <Flex mt={2} w={"300px"} borderBottom={"2px solid gray"} p={1}>
              <GrLocation fontSize={"25px"} />
              <input
                type="number"
                placeholder="100001"
                value={deliveryPin}
                onChange={(e) => setDeliveryPin(e.target.value)}
                style={{
                  border: "0px",
                  outline: "none",
                  marginLeft: "5px",
                }}
              />
              <Text
                color={"red"}
                cursor={"pointer"}
                onClick={handleDeliveryCheck}
              >
                CHECK
              </Text>
            </Flex>
            <Text color={"gray"} fontSize={"12px"} id="delivery_date">
              Check for estimated delivery date
            </Text>
          </Box>

          <Box mt={2}>
            <UnorderedList>
              <ListItem>100% Original Products</ListItem>
              <ListItem>Pay on delivery might be available</ListItem>
              <ListItem>Easy 30 days returns and exchanges</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Men />
      </Box>
      <Box>
        <Women />
      </Box>
      <Box>
        <Kid />
      </Box>
      <Box>
        <Electronics />
      </Box>
    </>
  );
};
