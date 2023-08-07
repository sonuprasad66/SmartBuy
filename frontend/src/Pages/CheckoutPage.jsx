import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../App.css";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { BsFillGiftFill, BsTag } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/Cart/cart.action";
import { getProfile } from "../Redux/Auth/action";
import { TOTAL_SUM_SUCCESS } from "../Redux/Cart/cart.type";
import { AddressModel } from "../Components/AddressModel";

export const CheckoutPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [coupan, setCoupan] = useState(false);
  const [discount, setDiscount] = useState(0);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.cart.data);
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getProfile(token));
    dispatch(getCartData(token));
  }, [dispatch]);

  let address;
  if (currentUser.address) {
    address = `${currentUser?.address.details},${currentUser?.address.town},${currentUser?.address.city},${currentUser?.address.state}-${currentUser?.address.pincode}`;
  }

  let totalsum = 0;
  for (let i = 0; i < data.length; i++) {
    totalsum += Number(data[i].qty) * Number(data[i].product.Price);
  }

  const HandleCoupan = () => {
    setDiscount(totalsum - Math.floor(totalsum * (30 / 100)));
    onClose();
    setCoupan(true);
  };

  useEffect(() => {
    if (discount !== 0) {
      dispatch({ type: TOTAL_SUM_SUCCESS, payload: discount });
    } else {
      dispatch({ type: TOTAL_SUM_SUCCESS, payload: totalsum });
    }
  }, [totalsum, discount]);

  return (
    <Box w={["90%", "80%", "80%", "70%"]} fontSize={14} m={"auto"} mb={10}>
      <Flex alignItems={"center"} mt={5} justifyContent={"center"}>
        <Heading color={"gray"}>CHECKOUT</Heading>
      </Flex>
      <Flex
        mt={5}
        justifyContent={"space-between"}
        flexDirection={["column", "column", "column", "row"]}
        gap={"10"}
      >
        <Box w={["100%", "100%", "90%", "60%"]}>
          <Flex
            boxShadow={"lg"}
            border={
              colorMode === "light" ? "1px solid black" : "1px solid white"
            }
            p={5}
            justifyContent={"space-between"}
            flexDirection={["column", "column", "column", "row"]}
            gap="5"
            alignItems={"center"}
          >
            <Box width={"70%"}>
              <Text>
                Deliver to: <b>{currentUser.name} ,</b>
              </Text>
              <Text mt={2} fontSize={13}>
                {address}
              </Text>
            </Box>
            <AddressModel />
          </Flex>
          <Box
            boxShadow={"lg"}
            border={
              colorMode === "light" ? "1px solid black" : "1px solid white"
            }
            mt={5}
            p={5}
          >
            <Flex alignItems={"center"} gap="2">
              <HiCurrencyDollar size={35} />
              <Text fontWeight={"bold"}>Available Offers</Text>
            </Flex>
            <Text mt={2} fontSize={14}>
              {" "}
              10% Instant Discount on Kotak Credit and Debit Cards on a min
              spend of Rs 3,000.TCA.
            </Text>
          </Box>
          <Flex
            boxShadow={"lg"}
            border={
              colorMode === "light" ? "1px solid black" : "1px solid white"
            }
            mt={5}
            p={5}
            alignItems={"center"}
            gap={2}
          >
            <TbTruckDelivery size={25} />
            <Text>
              Yay! <b>No convenience fee</b> on this order.
            </Text>
          </Flex>
          <Box>
            {data.length > 0 ? (
              data.map((item) => (
                <>
                  <Flex
                    key={item.product._id}
                    boxShadow={"lg"}
                    border={
                      colorMode === "light"
                        ? "1px solid black"
                        : "1px solid white"
                    }
                    mt={5}
                    p={2}
                    alignItems={"center"}
                    gap={10}
                    pl={10}
                  >
                    <Image
                      w={["35%", "35%", "22%", "22%"]}
                      h={["300px", "300px", "200px", "200px"]}
                      src={item.product.Image1}
                      alt="img"
                    />
                    <Box>
                      <Text fontWeight={"bold"}>{item.product.Brand}</Text>
                      <Text>{item.product.Product_Title}</Text>
                      <Flex mt={2} mb={2} gap={5} alignItems="center">
                        <Box
                          pl={"2"}
                          pr="2"
                          bg="#f5f5f6"
                          color={colorMode === "light" ? "black" : "black"}
                        >
                          <Text fontWeight={"bold"}>Qty: {item.qty}</Text>
                        </Box>
                      </Flex>
                      <Flex alignItems={"center"}>
                        <FaRupeeSign />
                        <Text fontWeight={"bold"}>{item.product.Price}</Text>
                        <s>
                          <Flex ml={5} color="#FF3F6C" alignItems={"center"}>
                            <BiRupee />
                            <Text fontSize={12}>{item.product.MRP}</Text>
                          </Flex>
                        </s>
                      </Flex>
                    </Box>
                  </Flex>
                </>
              ))
            ) : (
              <Flex
                boxShadow={"lg"}
                border={
                  colorMode === "light" ? "1px solid black" : "1px solid white"
                }
                mt={5}
                p={5}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                color="red"
              >
                <TfiFaceSad size={30} /> cart is empty!
              </Flex>
            )}
          </Box>
        </Box>
        <Box
          w={["100%", "100%", "90%", "37%"]}
          h={"-webkit-fit-content"}
          boxShadow={"lg"}
          border={colorMode === "light" ? "1px solid black" : "1px solid white"}
          p={5}
        >
          <Text>COUPONS</Text>
          <Flex
            mb={3}
            mt={1}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Flex alignItems={"center"}>
              {" "}
              <BsTag size={20} />
              <Text ml={5} fontWeight={"bold"}>
                Apply Coupons
              </Text>
            </Flex>
            {coupan ? (
              <Button
                fontSize={12}
                h="8"
                borderRadius={0}
                colorScheme="blue"
                variant="outline"
                disabled
              >
                Applied
              </Button>
            ) : (
              <Button
                fontSize={12}
                h="8"
                onClick={onOpen}
                borderRadius={0}
                colorScheme="blue"
                variant="outline"
              >
                Apply
              </Button>
            )}
          </Flex>
          <hr />
          <Text mt={2}>GIFTING & PERSONALISATION</Text>
          <Flex mb={4} mt={1} color="black" bgColor={"#FFF1EC"}>
            <Image
              ml={3}
              w="10%"
              src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
            />
            <Box ml={2} p="2">
              <Text fontSize={13} fontWeight={"bold"}>
                Buying for a loved one?
              </Text>
              <Text fontSize={13}>
                Gift wrap and personalised message on card, Only for &#8377; 25
              </Text>
              <Link to={"/"}>
                <Text mt={2} color="#FF3F6C">
                  ADD GIFT WRAP
                </Text>
              </Link>
            </Box>
          </Flex>
          <hr />
          <Text mt={2} fontWeight="bold">
            PRICE DETAILS({data.length} items)
          </Text>
          <Flex mt={2} fontSize={13} justifyContent={"space-between"}>
            <Text>Total MRP</Text>
            <Text>
              &#8377;
              {totalsum + Math.floor((totalsum / 95) * 100)}
            </Text>
          </Flex>
          <Flex mt={2} fontSize={13} justifyContent={"space-between"}>
            <Text>Discount on MRP</Text>
            <Text color={"green"}>
              - &#8377;
              {Math.floor((totalsum / 95) * 100)}
            </Text>
          </Flex>
          <Flex mb={3} mt={2} fontSize={13} justifyContent={"space-between"}>
            <Text>Convenience Fee</Text>
            <Text color={"green"}>Free</Text>
          </Flex>
          <hr />
          <Flex
            mb={3}
            alignItems="center"
            mt={2}
            fontWeight="bold"
            fontSize={13}
            justifyContent={"space-between"}
          >
            <Text>Total Amount</Text>
            {coupan && (
              <Box w="50%">
                <Text textAlign={"center"} fontSize={"10"} color={"green"}>
                  you got 30% discount on Total Amount. Now you need to pay
                </Text>
              </Box>
            )}
            <Text color={coupan && "blue"}>
              &#8377; {discount !== 0 ? discount : totalsum}
            </Text>
          </Flex>
          {data.length > 0 ? (
            <Link to={"/payment"}>
              <Button
                w="100%"
                mt="2"
                fontSize={14}
                borderRadius={0}
                colorScheme="blue"
                variant="solid"
                letterSpacing={3}
              >
                PLACE ORDER
              </Button>
            </Link>
          ) : (
            <Button
              w="100%"
              mt="2"
              fontSize={14}
              borderRadius={0}
              colorScheme="blue"
              variant="solid"
              letterSpacing={3}
              disabled
            >
              PLACE ORDER
            </Button>
          )}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontWeight={0}
                fontSize="15"
                className="font-face-pt"
              >
                APPLY COUPON
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody className="font-face-pt">
                <Flex
                  bgColor={"#FFF1EC"}
                  alignItems={"center"}
                  w="100%"
                  h={100}
                  p={5}
                  gap="5"
                >
                  <BsFillGiftFill color="#FF3F6C" size={35} />
                  <Box>
                    <Text fontWeight={"bold"}>LUCKY30</Text>
                    <Text fontSize={"13"}>
                      Best offer for best people,Apply <b>LUCKY30</b> Coupan and
                      you got 30% off on your shopping.
                    </Text>
                  </Box>
                </Flex>
              </ModalBody>

              <ModalFooter className="font-face-pt">
                <Button
                  borderRadius={0}
                  fontWeight={0}
                  colorScheme="blue"
                  mr={3}
                  onClick={HandleCoupan}
                >
                  APPLY
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
};
