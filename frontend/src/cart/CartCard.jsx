import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, updateCartData } from "../Redux/Cart/cart.action";

const CartCard = ({ id, img, title, brand, price, mrp, qty }) => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const loading = useSelector((store) => store.cart.loading);

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteCartData(id)).then((res) =>
      toast({
        title: "Product removed from the cart",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      })
    );
  };

  const handleQty = (id, qty) => {
    dispatch(updateCartData(id, qty)).then(() =>
      qty == -1
        ? toast({
            title: "Quantity decreases",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          })
        : toast({
            title: "Quantity increases",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          })
    );
  };

  return (
    <>
      <Box w={"90%"} m="auto">
        <Grid
          templateColumns="repeat(7, 1fr)"
          gap={5}
          padding={5}
          borderBottom={"1px solid #878787"}
        >
          <GridItem colSpan={[6, 1]}>
            <Center>
              {" "}
              <Box>
                <Center>
                  <Image maxH={"100px"} w={["100px", "auto"]} src={img} />
                </Center>

                <HStack mt={8}>
                  <button
                    disabled={qty === 1}
                    style={{
                      borderRadius: "50%",
                      border: "1px solid black",
                      hight: "20px",
                      width: "25px",
                    }}
                    onClick={() => handleQty(id, -1)}
                  >
                    -
                  </button>
                  <Box border={"1px solid #212121"} p={"0px 15px"}>
                    {qty}
                  </Box>
                  <button
                    style={{
                      borderRadius: "50%",
                      border: "1px solid black",
                      hight: "20px",
                      width: "25px",
                    }}
                    onClick={() => handleQty(id, 1)}
                  >
                    +
                  </button>
                </HStack>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={[7, 4]}>
            <Text colour={colorMode === "light" ? "#212121" : "#fff"}>
              {title}{" "}
            </Text>
            <Text fontSize={"14px"} color="#878787">
              {title}{" "}
            </Text>
            <Text fontSize={"14px"} color="#878787" my={2}>
              Brand : {brand}
            </Text>

            <HStack my={5}>
              <Text fontSize={"14px"} color="#878787" as={"s"}>
                ₹{mrp}
              </Text>
              <Text fontWeight={"bold"}>₹{price}</Text>
              <Text color={"#388F3C"}>
                {Math.floor((price * 100) / mrp)}% Off
              </Text>
              <Text color={"#388F3C"}>3 offers applied</Text>
            </HStack>
            <HStack spacing={8}>
              <Text
                fontWeight={"600"}
                _hover={{ color: "#2874f0", cursor: "pointer" }}
              >
                {" "}
                SAVE FOR LATER
              </Text>
              <Text
                fontWeight={"600"}
                _hover={{ color: "#2874f0", cursor: "pointer" }}
                onClick={() => handleRemove(id)}
              >
                REMOVE
              </Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={[4, 2]}>
            <Text color={"#212121"} fontSize="14px">
              {" "}
              Delivery by 11 PM, Tomorrow |
            </Text>
            <Text color={"#388F3C"}>
              {" "}
              Free
              <span
                style={{
                  color: "#212121",
                  padding: "5px",
                  textDecoration: "line-through",
                }}
              >
                ₹70
              </span>
            </Text>
            <Text color={"#212121"} fontSize="14px" my={3}>
              Delivery by{" "}
              {new Date().getDate() +
                1 +
                "/" +
                (new Date().getMonth() + 1) +
                "/" +
                new Date().getFullYear()}{" "}
              |
              <span
                style={{
                  color: "#388F3C",
                  padding: "5px",
                }}
              >
                Free
              </span>
              <span
                style={{
                  color: "#212121",
                  padding: "5px",
                  textDecoration: "line-through",
                }}
              >
                ₹40
              </span>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default CartCard;
