import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  Button,
  Input,
  useToast,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { FaGooglePay, FaRegMoneyBillAlt } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GooglePayBtn } from "../Components/GooglePayBtn";
import logo from "../../public/logo.jpg";
import { useSelector } from "react-redux";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const PaymentPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [captcha, setCapcha] = useState([]);
  const [captchavalue, setCaptchavalue] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [res, setRes] = useState(null);
  const [status, setStatus] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const HandleCaptch = () => {
    let length = 5;
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setRes(result);
    let temp = result.split("");
    setCapcha(temp);
  };
  useEffect(() => {
    HandleCaptch();
  }, []);
  const HandleOrder = () => {
    setStatus(true);
    if (res == captchavalue) {
      const timer = setTimeout(() => {
        onOpen();
        setStatus(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setStatus(false);
      toast({
        status: "error",
        title: "Please check captcha once!",
        position: "top",
        duration: 3000,
      });
    }
  };
  const Handlepayment = () => {
    setStatus(true);
    const timer = setTimeout(() => {
      onOpen();
      setStatus(false);
    }, 1000);
    return () => clearTimeout(timer);
  };
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const totalSum = useSelector((store) => store.cart.totalSum);

  // console.log(totalSum);

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_uu8DTdfq92QcPq",
      currency: "INR",
      amount: totalSum * 100,
      name: "SmartBuy",
      description: "Is",
      image: logo,
      handler: function (response) {
        toast({
          title: `Your payment ID ${response.razorpay_payment_id}`,
          status: "success",
          position: "top",
          duration: 3000,
        });
        navigate("/");
      },
      prefill: {
        name: currentUser.name,
        email: currentUser.email,
        contact: currentUser.mobile_number,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Box w={["90%", "70%", "70%", "60%"]} fontSize={14} m={"auto"} mb={10}>
      <Flex mb={5} alignItems={"center"} mt={5} justifyContent={"center"}>
        <Heading color={"gray"}>PAYMENT</Heading>
      </Flex>
      <hr />
      <Box mt={5}>
        <Text fontSize={"18"} fontWeight={"bold"}>
          Choose payment mode
        </Text>
      </Box>

      <Tabs
        mt={5}
        boxShadow={"lg"}
        border={colorMode === "light" ? "1px solid black" : "1px solid white"}
      >
        <Flex gap={5}>
          <Box w="40%" h="300px" bg="blue.500">
            <TabList>
              <Tab
                _selected={{
                  color: "#3182CE",
                  bg: "white",
                  border: "none",
                }}
                bg="blue.500"
                color="white"
                borderBottom={
                  colorMode === "light" ? "1px solid white" : "1px solid black"
                }
                w={"100%"}
                h="50"
                onClick={HandleCaptch}
              >
                <FaRegMoneyBillAlt style={{ marginRight: "10px" }} size={25} />
                Cash on delivery
              </Tab>
            </TabList>
            <TabList>
              <Tab
                _selected={{
                  color: "#3182CE",
                  bg: "white",
                  border: "none",
                }}
                bg="blue.500"
                color="white"
                borderBottom={
                  colorMode === "light" ? "1px solid white" : "1px solid black"
                }
                w={"100%"}
                h="50"
              >
                <Flex flexDirection={"column"}>
                  <Flex alignItems={"center"}>
                    {" "}
                    Using{" "}
                    <FaGooglePay style={{ marginLeft: "10px" }} size={45} />
                  </Flex>
                  <Text mt={-2} mb="2" fontSize={10}>
                    (Credit/Debit Card)
                  </Text>
                </Flex>
              </Tab>
            </TabList>
            <TabList>
              <Tab
                _selected={{
                  color: "#3182CE",
                  bg: "white",
                  border: "none",
                }}
                bg="blue.500"
                color="white"
                borderBottom={
                  colorMode === "light" ? "1px solid white" : "1px solid black"
                }
                w={"100%"}
                h="50"
                onClick={displayRazorpay}
              >
                <SiRazorpay style={{ marginRight: "10px" }} /> Using Razor pay
              </Tab>
            </TabList>
          </Box>
          <Box w={"60%"} h="-moz-max-content">
            <TabPanels>
              <TabPanel>
                <Flex gap={"130px"} alignItems={"center"}>
                  <Text fontSize={"15"} fontWeight={"bold"}>
                    Pay on delivery
                  </Text>
                  <Text fontSize={"15"} fontWeight={"bold"} color={"blue"}>
                    Total Amount : {totalSum}
                  </Text>
                </Flex>
                <Flex alignItems={"center"} gap="10">
                  <Flex
                    mt={2}
                    borderRadius={"2"}
                    h={70}
                    w="50%"
                    border={
                      colorMode === "light"
                        ? "1px solid black"
                        : "1px solid white"
                    }
                    justifyContent="space-around"
                    p="2"
                    fontFamily={"sans-serif"}
                  >
                    <Text fontWeight={"bold"} mt={6}>
                      {captcha[0]}
                    </Text>
                    <Text>{captcha[1]}</Text>
                    <Text mt={8} fontWeight={"bold"}>
                      {captcha[2]}
                    </Text>
                    <Text fontWeight={"bold"}>{captcha[3]}</Text>
                    <Text mt={5}>{captcha[4]}</Text>
                  </Flex>
                  <Button
                    fontSize={"13"}
                    colorScheme={"blue"}
                    variant="outline"
                    borderRadius={"0"}
                    onClick={HandleCaptch}
                  >
                    Change Captcha
                  </Button>
                </Flex>
                <Flex mt={2}>
                  <Input
                    w="100%"
                    borderRadius={"0"}
                    border={
                      colorMode === "light"
                        ? "1px solid black"
                        : "1px solid white"
                    }
                    placeholder="enter captcha"
                    type={"text"}
                    onChange={(e) => setCaptchavalue(e.target.value)}
                  />
                </Flex>
                <Button
                  w="100%"
                  mt="3"
                  fontSize={14}
                  borderRadius={0}
                  colorScheme="blue"
                  variant="solid"
                  letterSpacing={3}
                  onClick={HandleOrder}
                >
                  {status ? <Spinner /> : "PLACE ORDER"}
                </Button>
              </TabPanel>
              <TabPanel>
                <Flex mt={10} justifyContent={"center"} alignItems="center">
                  {GooglePayBtn ? (
                    <GooglePayBtn HandleOrder={Handlepayment} />
                  ) : (
                    <Spinner />
                  )}
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>Razorpay is Loading...</p>
              </TabPanel>
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className="font-face-pt">
            <Flex justifyContent={"center"} alignItems="center" mt={5}>
              <IoCheckmarkDoneCircleOutline color="#3182CE" size={55} />
            </Flex>
            <Text fontWeight={"bold"} fontSize="25" textAlign={"center"}>
              Your Order is confirmed!
            </Text>
            <Text mt={2} textAlign={"center"}>
              {" "}
              Thanks for shopping with us!. We'll send you a shopping
              confirmation email as soon asyour order ships.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              w="100%"
              mt="2"
              fontSize={14}
              borderRadius={0}
              colorScheme="blue"
              variant="solid"
              letterSpacing={3}
              onClick={() => {
                onclose;
                navigate("/");
              }}
            >
              {status ? <Spinner /> : " Goto Home"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
